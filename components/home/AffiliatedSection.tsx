import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { assets } from "./assets";

const affiliations = [
	{
		name: "Aero Club of India",
		image: assets.affiliation1,
		description: "Government-authorized aviation sports regulator",
	},
	{
		name: "ATOI",
		image: assets.affiliation2,
		description: "Adventure Tour Operators Association",
	},
	{
		name: "PAI",
		image: assets.affiliation3,
		description: "Paragliding Association of India",
	},
	{
		name: "Award",
		image: assets.affiliation4,
		description: "Winners of “Excellence in Adventure tourism” award by ATOAI",
	},
];

export default function AffiliatedSection() {
	return (
		<Box
			component="section"
			id="affiliations"
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
						label="Officially Recognized"
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
						Trusted & Accredited
					</Typography>
					<Typography
						sx={{
							color: "rgba(255,255,255,0.7)",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
							lineHeight: 1.7,
						}}
					>
						India&apos;s{" "}
						<strong style={{ color: "#FFFFFF" }}>first and only</strong>{" "}
						paragliding school accredited by the{" "}
						<strong style={{ color: "#b9ddff" }}>Aero Club of India</strong>,
						empowered by DGCA to regulate aviation sports.
					</Typography>
				</Stack>

				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={3}
					sx={{ width: "100%" }}
					justifyContent="center"
				>
					{affiliations.map((affiliation) => (
						<Box
							key={affiliation.name}
							sx={{
								flex: { md: "1 1 0" },
								maxWidth: { md: 320 },
								bgcolor: "rgba(255,255,255,0.03)",
								border: "1px solid rgba(255,255,255,0.1)",
								borderRadius: 3,
								p: 3,
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
										p: affiliation.name === "Award" ? 0 : 2,
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: 100,
									}}
								>
									<Image
										src={affiliation.image.src}
										alt={affiliation.name}
										width={200}
										height={70}
										style={{
											objectFit:
												affiliation.name === "Award" ? "contain" : "contain",
											maxHeight: "100%",
											width: affiliation.name === "Award" ? "100%" : "auto",
										}}
									/>
								</Box>
								<Typography
									sx={{
										color: "rgba(255,255,255,0.6)",
										fontSize: 14,
									}}
								>
									{affiliation.description}
								</Typography>
							</Stack>
						</Box>
					))}
				</Stack>
			</Stack>
		</Box>
	);
}
