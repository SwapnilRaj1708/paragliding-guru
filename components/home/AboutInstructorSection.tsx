import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlightIcon from "@mui/icons-material/Flight";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

const achievements = [
	{
		icon: FlightIcon,
		value: "30+",
		label: "Years Flying",
	},
	{
		icon: EmojiEventsIcon,
		value: "50+",
		label: "Competitions",
	},
	{
		icon: PublicIcon,
		value: "10+",
		label: "Countries",
	},
	{
		icon: VerifiedUserIcon,
		value: "BHPA",
		label: "Certified",
	},
];

export default function AboutInstructorSection() {
	return (
		<Box
			component="section"
			id="about"
			sx={{
				bgcolor: "#FAFBFC",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
			}}
		>
			<Box sx={{ maxWidth: 1200, mx: "auto" }}>
				<Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
					<Grid size={{ xs: 12, md: 6 }}>
						<Box
							sx={{
								position: "relative",
							}}
						>
							{/* Main Image */}
							<Box
								sx={{
									position: "relative",
									borderRadius: 4,
									overflow: "hidden",
									boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
								}}
							>
								<Box
									component="img"
									src={assets.instructorPhoto.src}
									alt="Gurpreet - Lead Instructor"
									sx={{
										width: "100%",
										height: { xs: 400, md: 500 },
										objectFit: "cover",
									}}
								/>
								{/* Gradient Overlay */}
								<Box
									sx={{
										position: "absolute",
										bottom: 0,
										left: 0,
										right: 0,
										height: "50%",
										background:
											"linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 100%)",
									}}
								/>
								{/* Name Badge */}
								<Box
									sx={{
										position: "absolute",
										bottom: 24,
										left: 24,
										right: 24,
									}}
								>
									<Typography
										sx={{
											color: "#FFFFFF",
											fontSize: 24,
											fontWeight: 700,
											fontFamily: "var(--font-outfit)",
										}}
									>
										Gurpreet Singh
									</Typography>
									<Typography
										sx={{
											color: "rgba(255,255,255,0.8)",
											fontSize: 14,
										}}
									>
										Lead Instructor & Founder
									</Typography>
								</Box>
							</Box>

							{/* Floating Achievement Cards */}
							<Box
								// sx={{
								// 	position: { xs: "relative", md: "absolute" },
								// 	top: { md: 40 },
								// 	right: { md: -60 },
								// 	mt: { xs: 2, md: 0 },
								// 	display: "grid",
								// 	gridTemplateColumns: "repeat(2, 1fr)",
								// 	gap: 1.5,
								// 	maxWidth: { xs: "100%", md: 200 },
								// }}
								sx={{
									position: { xs: "relative" },
									mt: { xs: 2, md: 0 },
									p: { md: 2 },
									display: "grid",
									gridTemplateColumns: {
										xs: "repeat(2, 1fr)",
										md: "repeat(4, 1fr)",
									},
									gap: 1.5,
									maxWidth: { xs: "100%" },
								}}
							>
								{achievements.map((achievement) => {
									const Icon = achievement.icon;
									return (
										<Box
											key={achievement.label}
											sx={{
												bgcolor: "#FFFFFF",
												borderRadius: 2,
												p: 2,
												textAlign: "center",
												boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
												border: "1px solid rgba(0,0,0,0.05)",
											}}
										>
											<Icon sx={{ color: "#0D5C8F", fontSize: 24, mb: 0.5 }} />
											<Typography
												sx={{
													fontWeight: 700,
													fontSize: 18,
													color: "#1A1D21",
													fontFamily: "var(--font-outfit)",
												}}
											>
												{achievement.value}
											</Typography>
											<Typography
												sx={{
													fontSize: 11,
													color: "#5A6370",
													textTransform: "uppercase",
													letterSpacing: "0.03em",
												}}
											>
												{achievement.label}
											</Typography>
										</Box>
									);
								})}
							</Box>
						</Box>
					</Grid>

					<Grid size={{ xs: 12, md: 6 }}>
						<Stack spacing={3}>
							<Box>
								<Chip
									label="Meet Your Instructor"
									sx={{
										bgcolor: "rgba(13, 92, 143, 0.1)",
										color: "#0D5C8F",
										fontWeight: 600,
										fontSize: 13,
										mb: 2,
									}}
								/>
								<Typography
									variant="h2"
									sx={{
										color: "#1A1D21",
										mb: 2,
									}}
								>
									Learn from One of India&apos;s Best
								</Typography>
							</Box>

							<Typography
								sx={{
									color: "#5A6370",
									fontSize: 16,
									lineHeight: 1.8,
								}}
							>
								Gurpreet is{" "}
								<strong style={{ color: "#0D5C8F" }}>
									one of India&apos;s most accomplished
								</strong>{" "}
								paragliding competition pilots, with over three decades of
								flying experience since 1993.
							</Typography>

							<Typography
								sx={{
									color: "#5A6370",
									fontSize: 16,
									lineHeight: 1.8,
								}}
							>
								As a{" "}
								<strong style={{ color: "#0D5C8F" }}>
									BHPA-certified paragliding instructor
								</strong>
								,{" "}
								<strong style={{ color: "#0D5C8F" }}>Flying since 1993</strong>{" "}
								and competing{" "}
								<strong style={{ color: "#0D5C8F" }}>
									internationally since 2002
								</strong>
								. likely the only one in India certified by a globally
								accredited body.
								{/* As a{" "}
								<strong style={{ color: "#0D5C8F" }}>
									BHPA-certified instructor
								</strong>{" "}
								— likely the only one in India certified by a globally
								accredited body — he brings unmatched expertise and a passion
								for safe, professional training. */}
							</Typography>

							<Typography
								sx={{
									color: "#5A6370",
									fontSize: 16,
									lineHeight: 1.8,
								}}
							>
								With multiple podium finishes in India and Europe, his
								competition experience translates into{" "}
								<strong style={{ color: "#0D5C8F" }}>
									real-world skills and techniques
								</strong>{" "}
								that he passes on to every student.
							</Typography>

							<Button
								variant="contained"
								href="#contact"
								sx={{
									alignSelf: "flex-start",
									mt: 2,
									px: 4,
									py: 1.5,
									// background:
									// 	"linear-gradient(135deg, #0D5C8F 0%, #1A8FD1 100%)",
									// boxShadow: "0 8px 25px rgba(13, 92, 143, 0.3)",
									// "&:hover": {
									// 	background:
									// 		"linear-gradient(135deg, #1A8FD1 0%, #0D5C8F 100%)",
									// 	boxShadow: "0 12px 35px rgba(13, 92, 143, 0.4)",
									// },
								}}
							>
								Train with Gurpreet
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
