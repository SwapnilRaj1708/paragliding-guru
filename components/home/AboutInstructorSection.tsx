"use client";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlightIcon from "@mui/icons-material/Flight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
	Box,
	Button,
	Chip,
	Collapse,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import instructorContent from "@/content/instructor.json";
import teamContent from "@/content/team.json";

const iconMap: Record<string, React.ElementType> = {
	FlightIcon,
	EmojiEventsIcon,
	PublicIcon,
	VerifiedUserIcon,
};

export default function AboutInstructorSection() {
	const [teamOpen, setTeamOpen] = useState(teamContent.teamExpandedByDefault);
	const members = teamContent.members;

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
			<Box
				sx={{
					maxWidth: 1200,
					mx: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 8,
				}}
			>
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

							{instructorContent.paragraphs.map((paragraph) => (
								<Typography
									key={paragraph}
									sx={{
										color: "#5A6370",
										fontSize: 16,
										lineHeight: 1.8,
										"& strong": {
											color: "#0D5C8F",
										},
									}}
									// biome-ignore lint/security/noDangerouslySetInnerHtml: <this is required as the content is in HTML format>
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

				{/* Team Members Dropdown */}
				<Box sx={{ width: "100%" }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2.5,
							maxWidth: 560,
							mx: "auto",
						}}
					>
						<Box
							sx={{
								flex: 1,
								height: "1px",
								bgcolor: "rgba(13, 92, 143, 0.18)",
							}}
						/>
						<Button
							onClick={() => setTeamOpen((prev) => !prev)}
							endIcon={
								<KeyboardArrowDownIcon
									sx={{
										fontSize: 20,
										transform: teamOpen ? "rotate(180deg)" : "rotate(0)",
										transition: "transform 0.25s ease",
									}}
								/>
							}
							aria-expanded={teamOpen}
							aria-controls="team-members-panel"
							sx={{
								color: "#0D5C8F",
								fontWeight: 600,
								fontSize: 15,
								letterSpacing: "0.02em",
								textTransform: "none",
								px: 2.5,
								py: 1,
								borderRadius: 999,
								bgcolor: "rgba(13, 92, 143, 0.08)",
								transition:
									"background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
								"&:hover": {
									bgcolor: "rgba(13, 92, 143, 0.14)",
									boxShadow: "0 4px 14px rgba(13, 92, 143, 0.15)",
								},
							}}
						>
							{teamOpen
								? teamContent.hideButtonText
								: teamContent.showButtonText}
						</Button>
						<Box
							sx={{
								flex: 1,
								height: "1px",
								bgcolor: "rgba(13, 92, 143, 0.18)",
							}}
						/>
					</Box>

					<Collapse in={teamOpen} timeout="auto" unmountOnExit>
						<Box id="team-members-panel" sx={{ mt: 6 }}>
							<Typography
								variant="h3"
								sx={{
									color: "#1A1D21",
									textAlign: "center",
									mb: 5,
									fontSize: { xs: 24, md: 32 },
								}}
							>
								{teamContent.sectionTitle}
							</Typography>

							<Grid container spacing={{ xs: 3, md: 4 }}>
								{members.map((member, index) => {
									const isLastOdd =
										index === members.length - 1 && members.length % 2 === 1;
									return (
										<Grid
											key={member.name}
											size={{ xs: 12, md: 6 }}
											offset={{ md: isLastOdd ? 3 : 0 }}
										>
											<Stack
												direction={{ xs: "column", sm: "row" }}
												spacing={{ xs: 2, sm: 3 }}
												sx={{
													bgcolor: "#FFFFFF",
													borderRadius: 3,
													p: { xs: 2, md: 3 },
													boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
													border: "1px solid rgba(0,0,0,0.05)",
													height: "100%",
												}}
											>
												<Box
													component="img"
													src={member.photo}
													alt={member.name}
													sx={{
														width: { xs: "100%", sm: 160 },
														height: { xs: 220, sm: 200 },
														flexShrink: 0,
														objectFit: "cover",
														borderRadius: 2,
													}}
												/>
												<Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
													<Box>
														<Typography
															sx={{
																fontSize: { xs: 18, md: 20 },
																fontWeight: 700,
																color: "#1A1D21",
																fontFamily: "var(--font-outfit)",
																lineHeight: 1.2,
															}}
														>
															{member.name}
														</Typography>
														<Typography
															sx={{
																fontSize: 14,
																fontWeight: 600,
																color: "#0D5C8F",
																mt: 0.5,
															}}
														>
															{member.role}
														</Typography>
													</Box>

													<Stack
														direction="row"
														spacing={1}
														flexWrap="wrap"
														useFlexGap
														sx={{ mt: 0.5 }}
													>
														{member.flyingSince && (
															<Chip
																label={`Flying since ${member.flyingSince}`}
																size="small"
																sx={{
																	bgcolor: "rgba(13, 92, 143, 0.08)",
																	color: "#0D5C8F",
																	fontWeight: 600,
																	fontSize: 12,
																}}
															/>
														)}
														{member.qualification && (
															<Chip
																label={member.qualification}
																size="small"
																sx={{
																	bgcolor: "rgba(232, 93, 4, 0.08)",
																	color: "#C14A03",
																	fontWeight: 600,
																	fontSize: 12,
																}}
															/>
														)}
													</Stack>

													<Stack spacing={1} sx={{ pt: 0.5 }}>
														{member.bio.map((paragraph) => (
															<Typography
																key={paragraph}
																sx={{
																	color: "#5A6370",
																	fontSize: 14,
																	lineHeight: 1.5,
																}}
															>
																{paragraph}
															</Typography>
														))}
													</Stack>
												</Stack>
											</Stack>
										</Grid>
									);
								})}
							</Grid>
						</Box>
					</Collapse>
				</Box>
			</Box>
		</Box>
	);
}
