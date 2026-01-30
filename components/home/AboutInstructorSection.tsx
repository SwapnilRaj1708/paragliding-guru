import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlightIcon from "@mui/icons-material/Flight";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import instructorContent from "@/content/instructor.json";

const iconMap: Record<string, React.ElementType> = {
	FlightIcon,
	EmojiEventsIcon,
	PublicIcon,
	VerifiedUserIcon,
};

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
									src={instructorContent.photo}
									alt={`${instructorContent.name} - ${instructorContent.title}`}
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
										{instructorContent.name}
									</Typography>
									<Typography
										sx={{
											color: "rgba(255,255,255,0.8)",
											fontSize: 14,
										}}
									>
										{instructorContent.title}
									</Typography>
								</Box>
							</Box>

							{/* Floating Achievement Cards */}
							<Box
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
								{instructorContent.achievements.map((achievement) => {
									const Icon = iconMap[achievement.icon] || FlightIcon;
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
									{instructorContent.sectionTitle}
								</Typography>
							</Box>

							{instructorContent.paragraphs.map((paragraph, index) => (
								<Typography
									key={index}
									sx={{
										color: "#5A6370",
										fontSize: 16,
										lineHeight: 1.8,
										"& strong": {
											color: "#0D5C8F",
										},
									}}
									dangerouslySetInnerHTML={{ __html: paragraph }}
								/>
							))}

							<Button
								variant="contained"
								href="#contact"
								sx={{
									alignSelf: "flex-start",
									mt: 2,
									px: 4,
									py: 1.5,
								}}
							>
								{instructorContent.buttonText}
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
