import { Box, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

export default function GallerySection() {
	return (
		<Box
			component="section"
			id="gallery"
			sx={{ px: { xs: 2, md: 9 }, py: { xs: 6, md: 9 } }}
		>
			<Stack spacing={4} alignItems="center">
				<Typography variant="h2" color="#353535">
					Gallery
				</Typography>
				<Stack spacing={2} sx={{ width: "100%" }}>
					<Box
						sx={{
							display: { xs: "flex", md: "grid" },
							flexDirection: "column",
							gridTemplateColumns: { md: "520px 1fr" },
							gap: 2,
						}}
					>
						<Box
							sx={{
								position: "relative",
								width: "100%",
								height: { xs: 240, md: 358 },
								borderRadius: 2,
								overflow: "hidden",
								"&:hover .overlay": {
									opacity: 1,
								},
								"&:hover img": {
									transform: "scale(1.05)",
								},
							}}
						>
							<Box
								component="img"
								src={assets.gallery1.src}
								alt="Paragliding over mountains"
								sx={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									transition: "transform 0.3s ease-in-out",
								}}
							/>
							<Box
								className="overlay"
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									backgroundColor: "rgba(0, 0, 0, 0.5)",
									display: "flex",
									alignItems: "flex-end",
									justifyContent: "flex-end",
									opacity: 0,
									transition: "opacity 0.3s ease-in-out",
								}}
							>
								<Typography
									variant="h6"
									sx={{
										color: "#FFFFFF",
										textAlign: "center",
										px: 2,
									}}
								>
									Paragliding over mountains
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								display: "grid",
								gap: 2,
								gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
							}}
						>
							<Box
								component="img"
								src={assets.gallery2.src}
								alt="Paragliding in clouds"
								sx={{
									width: "100%",
									height: { xs: 180, md: 136 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
							<Box
								component="img"
								src={assets.gallery3.src}
								alt="Preparing paragliding equipment"
								sx={{
									width: "100%",
									height: { xs: 180, md: 136 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
							<Box
								component="img"
								src={assets.gallery4.src}
								alt="Paragliding in the sky"
								sx={{
									width: "100%",
									height: { xs: 180, md: 136 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
							<Box
								component="img"
								src={assets.gallery5.src}
								alt="Paraglider above the clouds"
								sx={{
									gridColumn: { md: "1 / -1" },
									width: "100%",
									height: { xs: 200, md: 198 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
						</Box>
					</Box>

					<Box
						sx={{
							display: { xs: "flex", md: "grid" },
							flexDirection: "column",
							gridTemplateColumns: { md: "1fr 520px" },
							gap: 2,
						}}
					>
						<Box
							sx={{
								display: "grid",
								gap: 2,
								gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
							}}
						>
							<Box
								component="img"
								src={assets.gallery6.src}
								alt="Paragliding at sunset"
								sx={{
									width: "100%",
									height: { xs: 180, md: 136 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
							<Box
								component="img"
								src={assets.gallery7.src}
								alt="Paragliding training flight"
								sx={{
									width: "100%",
									height: { xs: 180, md: 136 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
							<Box
								component="img"
								src={assets.gallery8.src}
								alt="Paragliding adventure"
								sx={{
									width: "100%",
									height: { xs: 180, md: 136 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
							<Box
								component="img"
								src={assets.gallery10.src}
								alt="Paragliding over the Himalayas"
								sx={{
									gridColumn: { md: "1 / -1" },
									width: "100%",
									height: { xs: 200, md: 198 },
									objectFit: "cover",
									borderRadius: 2,
								}}
							/>
						</Box>
						<Box
							component="img"
							src={assets.gallery9.src}
							alt="Paragliding over a valley"
							sx={{
								width: "100%",
								height: { xs: 240, md: 358 },
								objectFit: "cover",
								borderRadius: 2,
							}}
						/>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
}
