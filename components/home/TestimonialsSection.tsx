"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import {
	Avatar,
	Box,
	Chip,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import testimonialsContent from "@/content/testimonials.json";

const MdSlideGapPx = 24;
/** Space between cards on small screens (one card per view). */
const XsSlideGapPx = 16;

type Testimonial = {
	name: string;
	role: string;
	text: string;
	rating: number;
	photo?: string;
	link?: string;
};

/** Stable pseudo-random accent from the display name (same name → same colors). */
function avatarColorsFromName(name: string): {
	bgcolor: string;
	color: string;
} {
	let hash = 0;
	const s = name.trim();
	for (let i = 0; i < s.length; i++) {
		hash = s.charCodeAt(i) + ((hash << 5) - hash);
	}
	const hue = Math.abs(hash) % 360;
	return {
		bgcolor: `hsl(${hue}deg 52% 36%)`,
		color: `hsl(${hue}deg 90% 92%)`,
	};
}

function TestimonialCard({
	name,
	role,
	text,
	rating,
	photo,
	link,
}: Testimonial) {
	return (
		<Box
			sx={{
				height: "100%",
				p: 4,
				borderRadius: 3,
				bgcolor: "#3f3f3f",
				border: "1px solid #6f6f6f",
				transition: "all 0.3s ease",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Quote Icon */}
			<FormatQuoteIcon
				sx={{
					position: "absolute",
					top: 16,
					right: 16,
					fontSize: 48,
					color: "#b9ddff",
					transform: "rotate(180deg)",
				}}
			/>

			<Stack spacing={3}>
				{/* Rating */}
				<Stack direction="row" spacing={0.5}>
					{[...Array(rating)].map((_, i) => (
						<StarIcon
							key={i.toString()}
							sx={{ color: "#FBBF24", fontSize: 20 }}
						/>
					))}
				</Stack>

				{/* Text */}
				<Typography
					sx={{
						color: "rgba(255,255,255,0.85)",
						fontSize: 15,
						lineHeight: 1.8,
						fontStyle: "italic",
					}}
				>
					&quot;{text}&quot;
				</Typography>

				{/* Author */}
				<Stack direction="row" spacing={2} alignItems="center">
					{photo ? (
						<Avatar src={photo} alt={name} sx={{ width: 48, height: 48 }} />
					) : (
						<Avatar
							sx={{
								width: 48,
								height: 48,
								fontWeight: 600,
								...avatarColorsFromName(name),
							}}
						>
							{name
								.split(" ")
								.map((n) => n.charAt(0))
								.join("")
								.slice(0, 2)}
						</Avatar>
					)}
					<Box>
						{link ? (
							<Link href={link} target="_blank" rel="noopener noreferrer">
								<Typography
									sx={{
										color: "#FFFFFF",
										fontWeight: 600,
										fontSize: 16,
									}}
								>
									{name}
								</Typography>
							</Link>
						) : (
							<Typography
								sx={{
									color: "#FFFFFF",
									fontWeight: 600,
									fontSize: 16,
								}}
							>
								{name}
							</Typography>
						)}
						<Typography
							sx={{
								color: "rgba(255,255,255,0.6)",
								fontSize: 13,
							}}
						>
							{role}
						</Typography>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
}

function TestimonialsCarousel() {
	const mdUp = useMediaQuery((t) => t.breakpoints.up("md"));
	const items = testimonialsContent.items;
	const slidesToScroll = mdUp ? 2 : 1;
	const loopEnabled =
		items.length > (mdUp ? 2 : 1);

	const carouselOptions = useMemo(
		() => ({
			loop: loopEnabled,
			align: "start" as const,
			slidesToScroll,
			containScroll: "trimSnaps" as const,
		}),
		[loopEnabled, slidesToScroll],
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(false);

	useEffect(() => {
		const api = emblaApi;
		if (!api) return;

		const onSelect = () => {
			setCanPrev(api.canScrollPrev());
			setCanNext(api.canScrollNext());
		};

		onSelect();
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api.off("reInit", onSelect);
			api.off("select", onSelect);
		};
	}, [emblaApi]);

	const scrollPrev = useCallback(
		() => emblaApi?.scrollPrev(),
		[emblaApi],
	);
	const scrollNext = useCallback(
		() => emblaApi?.scrollNext(),
		[emblaApi],
	);

	const controlSx = {
		color: "rgba(255, 255, 255, 0.42)",
		border: "1px solid rgba(255, 255, 255, 0.1)",
		"&:hover": {
			color: "rgba(255, 255, 255, 0.75)",
			bgcolor: "rgba(255, 255, 255, 0.05)",
		},
		"&:disabled": {
			color: "rgba(255, 255, 255, 0.12)",
			borderColor: "rgba(255, 255, 255, 0.06)",
		},
	} as const;

	return (
		<Stack spacing={2.5} sx={{ width: "100%", alignSelf: "stretch" }}>
			<Box
				ref={emblaRef}
				sx={{
					overflow: "hidden",
					width: "100%",
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: { xs: `${XsSlideGapPx}px`, md: `${MdSlideGapPx}px` },
						touchAction: "pan-y pinch-zoom",
					}}
				>
					{items.map((testimonial, index) => (
						<Box
							key={`${testimonial.name}-${index}`}
							sx={{
								minWidth: 0,
								flex: {
									xs: "0 0 100%",
									md: `0 0 calc((100% - ${MdSlideGapPx}px) / 2)`,
								},
								display: "flex",
							}}
						>
							<Box sx={{ width: "100%", display: "flex" }}>
								<TestimonialCard {...testimonial} />
							</Box>
						</Box>
					))}
				</Box>
			</Box>

			<Stack direction="row" spacing={1.5} justifyContent="center" alignItems="center">
				<IconButton
					type="button"
					onClick={scrollPrev}
					disabled={!canPrev}
					aria-label="Previous testimonials"
					size="small"
					sx={controlSx}
				>
					<ChevronLeftIcon sx={{ fontSize: 22 }} />
				</IconButton>
				<IconButton
					type="button"
					onClick={scrollNext}
					disabled={!canNext}
					aria-label="Next testimonials"
					size="small"
					sx={controlSx}
				>
					<ChevronRightIcon sx={{ fontSize: 22 }} />
				</IconButton>
			</Stack>
		</Stack>
	);
}

export default function TestimonialsSection() {
	return (
		<Box
			component="section"
			id="testimonials"
			sx={{
				position: "relative",
				background: "linear-gradient(180deg, #1c1c1c 0%, #3d3d3f 100%)",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
				overflow: "hidden",
			}}
		>
			{/* Decorative elements */}
			<Box
				sx={{
					position: "absolute",
					top: "10%",
					left: "-5%",
					width: 300,
					height: 300,
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(13, 92, 143, 0.2) 0%, transparent 70%)",
					filter: "blur(60px)",
					pointerEvents: "none",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					bottom: "10%",
					right: "-5%",
					width: 300,
					height: 300,
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(232, 93, 4, 0.15) 0%, transparent 70%)",
					filter: "blur(60px)",
					pointerEvents: "none",
				}}
			/>

			<Stack
				spacing={8}
				alignItems="center"
				sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}
			>
				<Stack spacing={3} alignItems="center" textAlign="center">
					<Chip
						label={testimonialsContent.badge}
						sx={{
							bgcolor: "#152b42",
							color: "#b9ddff",
							fontWeight: 600,
							fontSize: 13,
						}}
					/>
					<Typography variant="h2" sx={{ color: "#FFFFFF" }}>
						{testimonialsContent.title}
					</Typography>
					<Typography
						sx={{
							color: "rgba(255,255,255,0.7)",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
						}}
					>
						{testimonialsContent.description}
					</Typography>
				</Stack>

				<TestimonialsCarousel />
			</Stack>
		</Box>
	);
}
