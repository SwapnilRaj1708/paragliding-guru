import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { assets } from "./assets";

export default function AffiliatedSection() {
	return (
		<Box
			component="section"
			id="affiliations"
			sx={{
				bgcolor: "#3D3D3F",
				px: { xs: 2, md: 9 },
				py: { xs: 6, md: 9 },
				color: "#FFFFFF",
				textAlign: "center",
			}}
		>
			<Stack spacing={4} alignItems="center">
				<Stack spacing={2} alignItems="center">
					<Typography variant="h2">Trusted &amp; Affiliated By</Typography>
					<Typography
						sx={{
							color: "#F2F2F2",
							maxWidth: 520,
							"& strong": { color: "#FFFFFF", fontWeight: 600 },
						}}
					>
						Indian <strong>First</strong> and currently{" "}
						<strong>only paragliding school</strong> to be accredited by:{" "}
						<strong>
							Aero Club of India, a body empowered by DGCA to regulate aviation
							sports.
						</strong>
					</Typography>
				</Stack>
				<Stack spacing={2} alignItems="center">
					<Box
						sx={{
							bgcolor: "#FFFFFF",
							borderRadius: 1,
							px: 2,
							py: 1.5,
							width: { xs: "100%", sm: 520 },
						}}
					>
						<Box
							component="img"
							src={assets.affiliation1.src}
							alt="Aero Club of India"
							sx={{ width: "100%", height: 70, objectFit: "contain" }}
						/>
					</Box>
					<div className="flex flex-col gap-4 w-full sm:grid sm:grid-cols-2">
						<div className="bg-white px-4 py-3 w-full rounded-lg flex items-center justify-center h-25">
							<Image
								src={assets.affiliation2.src}
								alt="Adventure Tour Operators Association of India"
								width={240}
								height={76}
								className="h-full w-fit"
								objectFit="contain"
							/>
						</div>
						<div className="bg-white px-4 py-3 w-full rounded-lg flex items-center justify-center h-25">
							<Image
								src={assets.affiliation3.src}
								alt="PAI Affiliated School"
								width={240}
								height={76}
								className="h-full w-fit"
								objectFit="contain"
							/>
						</div>
					</div>
					{/* <Stack
						direction={{ xs: "column", sm: "row" }}
						sx={{
							display: { xs: "flex", sm: "grid" },
							gridTemplateColumns: { sm: "1fr 1fr" },
							width: "100%",
							gap: 2,
						}}
						spacing={2}
					>
						<Box
							sx={{
								bgcolor: "#FFFFFF",
								borderRadius: 1,
								px: 2,
								py: 1.5,
								width: "100%",
							}}
						>
							<Box
								component="img"
								src={assets.affiliation2.src}
								alt="Adventure Tour Operators Association of India"
								sx={{ width: "100%", height: 70, objectFit: "contain" }}
							/>
						</Box>
						<Box
							sx={{
								bgcolor: "#FFFFFF",
								borderRadius: 1,
								px: 2,
								py: 1.5,
								width: "100%",
							}}
						>
							<Box
								component="img"
								src={assets.affiliation3.src}
								alt="PAI Affiliated School"
								sx={{ width: "100%", height: 70, objectFit: "contain" }}
							/>
						</Box>
					</Stack> */}
				</Stack>
			</Stack>
		</Box>
	);
}
