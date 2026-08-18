"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MovieIcon from "@mui/icons-material/Movie";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import reelsContent from "@/content/reels.json";

const SlideGapPx = 20;

type Reel = {
	video?: string;
	poster?: string;
	caption?: string;
};

/** Poster tile shown before the play click — no video bytes load with the page. */
function ReelCover({ poster, onPlay }: { poster?: string; onPlay: () => void }) {
	return (
		<Box
			component="button"
			type="button"
			onClick={onPlay}
			aria-label="Play reel"
			sx={{
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				p: 0,
				border: "none",
				cursor: "pointer",
				bgcolor: "#232325",
				overflow: "hidden",
				fontFamily: "inherit",
			}}
		>
			{poster ? (
				<Box
					component="img"
					src={poster}
					alt=""
					loading="lazy"
					decoding="async"
					sx={{
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			) : null}
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(180deg, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.1) 45%, rgba(15, 23, 42, 0.6) 100%)",
				}}
			/>
			<Stack
				spacing={1.75}
				alignItems="center"
				justifyContent="center"
				sx={{ position: "absolute", inset: 0 }}
			>
				<Box
					sx={{
						width: 76,
						height: 76,
						borderRadius: "50%",
						bgcolor: "rgba(15, 23, 42, 0.45)",
						backdropFilter: "blur(6px)",
						border: "1px solid rgba(255, 255, 255, 0.35)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<PlayArrowIcon sx={{ fontSize: 40, color: "#FFFFFF", ml: "3px" }} />
				</Box>
				<Typography
					sx={{
						color: "rgba(255, 255, 255, 0.9)",
						fontSize: 13,
						fontWeight: 600,
						letterSpacing: "0.06em",
						textTransform: "uppercase",
					}}
				>
					Play reel
				</Typography>
			</Stack>
		</Box>
	);
}

/** Placeholder tile when no video has been uploaded in the CMS yet. */
function ReelEmptySlot({ instagramUrl }: { instagramUrl: string }) {
	return (
		<Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
			<Stack
				spacing={1.75}
				alignItems="center"
				justifyContent="center"
				sx={{
					position: "absolute",
					inset: 0,
					textAlign: "center",
					p: 3,
					color: "rgba(255, 255, 255, 0.75)",
					backgroundImage:
						"repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
				}}
			>
				<PlayCircleOutlineIcon
					sx={{ fontSize: 44, color: "rgba(255, 255, 255, 0.5)" }}
				/>
				<Typography
					sx={{
						fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
						fontSize: 12,
						letterSpacing: "0.06em",
						lineHeight: 1.6,
						color: "rgba(255, 255, 255, 0.6)",
					}}
				>
					reel slot
					<br />
					add an mp4 in CMS
				</Typography>
			</Stack>
		</Link>
	);
}

function ReelCard({
	reel,
	playing,
	onPlay,
	onEnded,
	instagramUrl,
}: {
	reel: Reel;
	playing: boolean;
	onPlay: () => void;
	onEnded: () => void;
	instagramUrl: string;
}) {
	return (
		<Stack
			spacing={1.5}
			sx={{
				height: "100%",
				bgcolor: "rgba(255, 255, 255, 0.03)",
				border: "1px solid rgba(255, 255, 255, 0.1)",
				borderRadius: 3,
				p: 1.5,
			}}
		>
			<Box
				sx={{
					position: "relative",
					height: { xs: 520, md: 620 },
					borderRadius: 2,
					overflow: "hidden",
					bgcolor: "#232325",
				}}
			>
				{reel.video ? (
					playing ? (
						// Mounted only after the play click, so the MP4 is fetched on demand.
						<Box
							component="video"
							src={reel.video}
							poster={reel.poster || undefined}
							controls
							autoPlay
							playsInline
							preload="auto"
							onEnded={onEnded}
							sx={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								display: "block",
								bgcolor: "#000",
							}}
						/>
					) : (
						<ReelCover poster={reel.poster} onPlay={onPlay} />
					)
				) : (
					<ReelEmptySlot instagramUrl={instagramUrl} />
				)}
			</Box>
			{reel.caption ? (
				<Typography
					sx={{
						color: "rgba(255, 255, 255, 0.6)",
						fontSize: 14,
						lineHeight: 1.5,
						px: 1,
						pb: 1,
						textAlign: "center",
					}}
				>
					{reel.caption}
				</Typography>
			) : null}
		</Stack>
	);
}

function ReelsCarousel({
	reels,
	instagramUrl,
}: {
	reels: Reel[];
	instagramUrl: string;
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
	});
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(false);
	const [playing, setPlaying] = useState<Record<number, boolean>>({});

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

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	const scrollable = canPrev || canNext;

	const controlSx = {
		color: "rgba(255, 255, 255, 0.5)",
		border: "1px solid rgba(255, 255, 255, 0.15)",
		width: 40,
		height: 40,
		flexShrink: 0,
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
		<Stack
			direction="row"
			spacing={2}
			alignItems="center"
			sx={{ width: "100%" }}
		>
			{scrollable && (
				<IconButton
					type="button"
					onClick={scrollPrev}
					disabled={!canPrev}
					aria-label="Previous reels"
					sx={{ ...controlSx, display: { xs: "none", sm: "inline-flex" } }}
				>
					<ChevronLeftIcon sx={{ fontSize: 22 }} />
				</IconButton>
			)}
			<Box ref={emblaRef} sx={{ overflow: "hidden", flex: "1 1 auto", minWidth: 0 }}>
				<Box
					sx={{
						display: "flex",
						gap: `${SlideGapPx}px`,
						justifyContent: scrollable ? "flex-start" : "center",
						touchAction: "pan-y pinch-zoom",
					}}
				>
					{reels.map((reel, index) => (
						<Box
							key={`${reel.video || reel.caption || "reel"}-${index}`}
							sx={{ flex: "0 0 min(352px, 84vw)", minWidth: 0 }}
						>
							<ReelCard
								reel={reel}
								playing={!!playing[index]}
								onPlay={() =>
									setPlaying((s) => ({ ...s, [index]: true }))
								}
								onEnded={() =>
									setPlaying((s) => ({ ...s, [index]: false }))
								}
								instagramUrl={instagramUrl}
							/>
						</Box>
					))}
				</Box>
			</Box>
			{scrollable && (
				<IconButton
					type="button"
					onClick={scrollNext}
					disabled={!canNext}
					aria-label="Next reels"
					sx={{ ...controlSx, display: { xs: "none", sm: "inline-flex" } }}
				>
					<ChevronRightIcon sx={{ fontSize: 22 }} />
				</IconButton>
			)}
		</Stack>
	);
}

export default function ReelsSection() {
	const reels = reelsContent.items as Reel[];

	return (
		<Box
			component="section"
			id="reels"
			sx={{
				position: "relative",
				background: "linear-gradient(180deg, #1c1c1c 0%, #3d3d3f 100%)",
				px: { xs: 2, md: 4 },
				py: { xs: 6, md: 9 },
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: "-10%",
					right: "8%",
					width: 340,
					height: 340,
					borderRadius: "50%",
					background:
						"radial-gradient(circle, rgba(232, 93, 4, 0.18) 0%, transparent 70%)",
					filter: "blur(60px)",
					pointerEvents: "none",
				}}
			/>
			<Stack
				spacing={4.5}
				sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}
			>
				<Stack spacing={2.5} alignItems="center" textAlign="center">
					<Chip
						icon={<MovieIcon sx={{ fontSize: 16, color: "#b9ddff !important" }} />}
						label={reelsContent.badge}
						sx={{ bgcolor: "#152b42", color: "#b9ddff", fontWeight: 600, fontSize: 13 }}
					/>
					<Typography variant="h2" sx={{ color: "#FFFFFF" }}>
						{reelsContent.title}
					</Typography>
					<Typography
						sx={{
							color: "rgba(255,255,255,0.7)",
							fontSize: { xs: 16, md: 18 },
							lineHeight: 1.7,
						}}
					>
						{reelsContent.description}{" "}
						<Link
							href={reelsContent.instagramUrl}
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#b9ddff",
								fontWeight: 600,
								textDecoration: "underline",
								textUnderlineOffset: 3,
							}}
						>
							{reelsContent.instagramHandle}
						</Link>
						.
					</Typography>
				</Stack>
				<ReelsCarousel reels={reels} instagramUrl={reelsContent.instagramUrl} />
			</Stack>
		</Box>
	);
}
