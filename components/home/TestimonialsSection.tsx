import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Box, Chip, Grid, Stack, Typography } from "@mui/material";
import testimonialsContent from "@/content/testimonials.json";

type Testimonial = {
	name: string;
	role: string;
	text: string;
	rating: number;
	photo: string | null;
};

function TestimonialCard({ name, role, text, rating, photo }: Testimonial) {
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
						<StarIcon key={i} sx={{ color: "#FBBF24", fontSize: 20 }} />
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
								bgcolor: "rgba(13, 92, 143, 0.3)",
								color: "#1A8FD1",
								fontWeight: 600,
							}}
						>
							{name.charAt(0)}
						</Avatar>
					)}
					<Box>
						<Typography
							sx={{
								color: "#FFFFFF",
								fontWeight: 600,
								fontSize: 16,
							}}
						>
							{name}
						</Typography>
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

				<Grid container spacing={3}>
					{testimonialsContent.items.map((testimonial, index) => (
						<Grid size={{ xs: 12, md: 6 }} key={`${testimonial.name}-${index}`}>
							<TestimonialCard {...testimonial} />
						</Grid>
					))}
				</Grid>
			</Stack>
		</Box>
	);
}
