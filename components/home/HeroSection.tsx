import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import heroContent from "@/content/hero.json";
import { assets } from "./assets";

export default function HeroSection() {
	return (
		<Box
			component="section"
			id="home"
			sx={{
				position: "relative",
				minHeight: { xs: "100vh", md: "100vh" },
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			{/* Background Image */}
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					zIndex: 0,
				}}
			>
				<Box
					component="img"
					src={assets.bgImage.src}
					alt=""
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
				{/* Decorative Elements */}
				<Box
					sx={{
						position: "absolute",
						top: "20%",
						left: "10%",
						width: 400,
						height: 400,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(13, 92, 143, 0.3) 0%, transparent 70%)",
						filter: "blur(60px)",
						pointerEvents: "none",
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						bottom: "10%",
						right: "5%",
						width: 300,
						height: 300,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(232, 93, 4, 0.2) 0%, transparent 70%)",
						filter: "blur(60px)",
						pointerEvents: "none",
					}}
				/>
			</Box>

			{/* Content */}
			<Box
				sx={{
					position: "relative",
					zIndex: 1,
					flex: 1,
					display: "flex",
					alignItems: "center",
					maxWidth: 1400,
					mx: "auto",
					width: "100%",
					px: { xs: 2, md: 4 },
					pt: { xs: 16, md: 20 },
					pb: { xs: 6, md: 10 },
				}}
			>
				<Stack
					spacing={4}
					sx={{
						maxWidth: { xs: "100%", md: 720 },
						p: 4,
						bgcolor: "#3d3d3fc2",
						borderRadius: 2,
						boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
					}}
					className="animate-fade-in-up"
				>
					{heroContent.displayBadge && (
						<Stack direction="row" spacing={1} alignItems="center">
							<Chip
								icon={<FlightTakeoffIcon sx={{ fontSize: 16 }} />}
								label={heroContent.badge}
								sx={{
									bgcolor: "rgba(255,255,255,0.15)",
									backdropFilter: "blur(10px)",
									color: "#FFFFFF",
									fontWeight: 500,
									fontSize: 13,
									height: 36,
									px: 1,
									"& .MuiChip-icon": {
										color: "#1361AF",
									},
								}}
							/>
						</Stack>
					)}

					<Typography
						variant="h1"
						sx={{
							color: "#FFFFFF",
							fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
							lineHeight: 1.1,
							"& span": {
								background: "linear-gradient(135deg, #B9DDFF 0%, #409EFC 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							},
						}}
					>
						{heroContent.title}
						<br />
						<span>{heroContent.titleHighlight}</span>
					</Typography>

					<Typography
						sx={{
							color: "rgba(255,255,255,0.8)",
							fontSize: { xs: 16, md: 18 },
							lineHeight: 1.7,
							maxWidth: 560,
						}}
					>
						{heroContent.description}
					</Typography>

					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={2}
						sx={{ pt: 1 }}
					>
						<Button
							variant="contained"
							size="large"
							href={heroContent.primaryButtonLink}
							sx={{
								px: 4,
								py: 1.5,
								fontSize: 16,
								fontWeight: 600,
							}}
						>
							{heroContent.primaryButtonText}
						</Button>
					</Stack>
				</Stack>
			</Box>

			{/* Stats Bar */}
			<Box
				sx={{
					position: "relative",
					zIndex: 1,
					bgcolor: "#3d3d3ffd",
					backdropFilter: "blur(20px)",
					borderTop: "1px solid rgba(255,255,255,0.1)",
				}}
			>
				<Box
					sx={{
						maxWidth: 1100,
						mx: "auto",
						px: { xs: 2, md: 4 },
						py: { xs: 3, md: 4 },
					}}
				>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={{ xs: 3, sm: 0 }}
						justifyContent="space-around"
						alignItems="center"
						divider={
							<Box
								sx={{
									display: { xs: "none", sm: "block" },
									width: 1,
									height: 2,
									bgcolor: "rgba(255,255,255,0.15)",
								}}
							/>
						}
					>
						{heroContent.stats.map((stat) => (
							<Stack
								key={stat.label}
								alignItems="center"
								spacing={0.5}
								sx={{
									minWidth: 140,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: { xs: 32, md: 40 },
										fontWeight: 700,
										fontFamily: "var(--font-outfit)",
										background:
											"linear-gradient(135deg, #B9DDFF 0%, #409EFC 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
									}}
								>
									{stat.value}
								</Typography>
								<Typography
									sx={{
										color: "rgba(255,255,255,0.7)",
										fontSize: 14,
										fontWeight: 500,
										textTransform: "uppercase",
										letterSpacing: "0.05em",
										textWrap: "nowrap",
									}}
								>
									{stat.label}
								</Typography>
							</Stack>
						))}
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}
