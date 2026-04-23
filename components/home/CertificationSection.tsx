"use client";

import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import certificationsContent from "@/content/certifications.json";

export default function CertificationSection() {
	return (
		<Box
			component="section"
			id="certifications"
			sx={{
				position: "relative",
				background: "linear-gradient(180deg, #1c1c1c 0%, #3d3d3f 100%)",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
				overflow: "hidden",
			}}
		>
			{/* Decorative background */}
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "150%",
					height: "100%",
					background:
						"radial-gradient(ellipse at center, rgba(13, 92, 143, 0.15) 0%, transparent 50%)",
					pointerEvents: "none",
				}}
			/>

			<Stack
				spacing={6}
				alignItems="center"
				sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}
			>
				<Stack spacing={3} alignItems="center" textAlign="center">
					<Chip
						icon={<VerifiedIcon sx={{ fontSize: 16 }} />}
						label={certificationsContent.badge}
						sx={{
							bgcolor: "#152b42",
							color: "#b9ddff",
							fontWeight: 600,
							fontSize: 13,
							height: 32,
							"& .MuiChip-icon": {
								color: "#b9ddff",
							},
						}}
					/>
					<Typography
						variant="h2"
						sx={{
							color: "#FFFFFF",
							textAlign: "center",
						}}
					>
						{certificationsContent.title}
					</Typography>
					<Typography
						sx={{
							color: "rgba(255,255,255,0.7)",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
							lineHeight: 1.7,
							"& strong": {
								color: "#FFFFFF",
							},
						}}
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <this is required as the content is in HTML format>
						dangerouslySetInnerHTML={{ __html: certificationsContent.description }}
					/>
				</Stack>

				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={3}
					sx={{ width: "100%" }}
					justifyContent="center"
				>
					{certificationsContent.items.map((certification) => (
						<Box
							key={certification.name}
							sx={{
								flex: { md: "1 1 0" },
								maxWidth: { md: 320 },
								bgcolor: "rgba(255,255,255,0.03)",
								border: "1px solid rgba(255,255,255,0.1)",
								borderRadius: 3,
								p: 1.5,
								transition: "all 0.3s ease",
								"&:hover": {
									bgcolor: "rgba(255,255,255,0.05)",
									borderColor: "rgba(255,255,255,0.2)",
									transform: "translateY(-4px)",
								},
							}}
						>
							<Stack spacing={2} alignItems="center" textAlign="center">
								<Box
									sx={{
										bgcolor: "#FFFFFF",
										borderRadius: 2,
										p: certification.name === "Award" ? 0 : 2,
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: 100,
									}}
								>
									<Image
										src={certification.image}
										alt={certification.name}
										width={200}
										height={70}
										style={{
											objectFit:
												certification.name === "Award" ? "contain" : "contain",
											maxHeight: "100%",
											width: certification.name === "Award" ? "100%" : "auto",
										}}
									/>
								</Box>
								<Typography
									sx={{
										color: "rgba(255,255,255,0.6)",
										fontSize: 14,
									}}
								>
									{certification.description}
								</Typography>
							</Stack>
						</Box>
					))}
				</Stack>
			</Stack>
		</Box>
	);
}
