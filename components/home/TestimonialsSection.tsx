import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

const testimonials = [
	{
		name: "Shon Fulzele",
		role: "P3 Graduate",
		text: "Dream bigger. Do bigger. Training with Gurpreet taught me how to face my fears and stay calm under pressure. The experience transformed not just my flying skills, but my entire approach to challenges in life.",
		rating: 5,
		withPhoto: true,
	},
	{
		name: "Priya Sharma",
		role: "P2 Graduate",
		text: "The best decision I ever made was joining PG Gurukul. The systematic approach to learning, combined with world-class safety standards, made me confident in the sky within weeks.",
		rating: 5,
		withPhoto: false,
	},
	{
		name: "Rahul Mehta",
		role: "Integrated Course",
		text: "From zero experience to soaring with the eagles. The comprehensive training and personal attention made all the difference. Gurpreet's expertise is unmatched in India.",
		rating: 5,
		withPhoto: true,
	},
	{
		name: "Ananya Verma",
		role: "SIV Graduate",
		text: "The SIV course was intense but incredibly valuable. Learning emergency procedures gave me the confidence to push my limits safely. Truly professional instruction.",
		rating: 5,
		withPhoto: false,
	},
];

function TestimonialCard({
	name,
	role,
	text,
	rating,
	withPhoto,
}: (typeof testimonials)[number]) {
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
				// "&:hover": {
				// 	bgcolor: "rgba(255,255,255,0.05)",
				// 	borderColor: "rgba(255,255,255,0.2)",
				// 	transform: "translateY(-4px)",
				// },
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
					{withPhoto ? (
						<Avatar
							src={assets.testimonial1.src}
							alt={name}
							sx={{ width: 48, height: 48 }}
						/>
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
						label="Student Stories"
						sx={{
							bgcolor: "#152b42",
							color: "#b9ddff",
							fontWeight: 600,
							fontSize: 13,
						}}
					/>
					<Typography variant="h2" sx={{ color: "#FFFFFF" }}>
						What Our Graduates Say
					</Typography>
					<Typography
						sx={{
							color: "rgba(255,255,255,0.7)",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
						}}
					>
						Join hundreds of pilots who started their journey with us and are
						now soaring the skies with confidence.
					</Typography>
				</Stack>

				<Grid container spacing={3}>
					{testimonials.map((testimonial, index) => (
						<Grid size={{ xs: 12, md: 6 }} key={`${testimonial.name}-${index}`}>
							<TestimonialCard {...testimonial} />
						</Grid>
					))}
				</Grid>
			</Stack>
		</Box>
	);
}
