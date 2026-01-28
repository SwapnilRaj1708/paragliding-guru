// "use client";;

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

const galleryImages = [
	{ src: assets.gallery1, alt: "Soaring over mountain peaks", span: "large" },
	{ src: assets.gallery2, alt: "Flying through clouds", span: "small" },
	{ src: assets.gallery3, alt: "Pre-flight equipment check", span: "small" },
	{ src: assets.gallery4, alt: "Thermal riding", span: "small" },
	{ src: assets.gallery5, alt: "Panoramic valley view", span: "wide" },
	{ src: assets.gallery6, alt: "Golden hour flight", span: "small" },
	{ src: assets.gallery7, alt: "Training session", span: "small" },
	{ src: assets.gallery8, alt: "Adventure flight", span: "small" },
	{ src: assets.gallery10, alt: "Himalayan landscape", span: "wide" },
	{ src: assets.gallery9, alt: "Valley crossing", span: "large" },
];

function GalleryImage({
	src,
	alt,
}: {
	src: { src: string };
	alt: string;
	span: string;
}) {
	return (
		<Box
			sx={{
				position: "relative",
				borderRadius: 2,
				overflow: "hidden",
				cursor: "pointer",
				height: "100%",
				minHeight: { xs: 180, md: 200 },
				"&:hover": {
					"& .overlay": {
						opacity: 1,
					},
					"& img": {
						transform: "scale(1.05)",
					},
				},
			}}
		>
			<Box
				component="img"
				src={src.src}
				alt={alt}
				sx={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					transition: "transform 0.5s ease",
				}}
			/>
			<Box
				className="overlay"
				sx={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.8) 100%)",
					opacity: 0,
					transition: "opacity 0.3s ease",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					p: 2,
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="flex-end"
				>
					<Typography
						sx={{
							color: "#FFFFFF",
							fontWeight: 500,
							fontSize: 14,
						}}
					>
						{alt}
					</Typography>
					<Box
						sx={{
							width: 36,
							height: 36,
							borderRadius: "50%",
							bgcolor: "rgba(255,255,255,0.2)",
							backdropFilter: "blur(8px)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<ZoomInIcon sx={{ color: "#FFFFFF", fontSize: 20 }} />
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}

export default function GallerySection() {
	return (
		<Box
			component="section"
			id="gallery"
			sx={{
				bgcolor: "#F8FAFC",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
			}}
		>
			<Stack
				spacing={6}
				alignItems="center"
				sx={{ maxWidth: 1200, mx: "auto" }}
			>
				<Stack spacing={3} alignItems="center" textAlign="center">
					<Chip
						label="Photo Gallery"
						sx={{
							bgcolor: "rgba(13, 92, 143, 0.1)",
							color: "#0D5C8F",
							fontWeight: 600,
							fontSize: 13,
						}}
					/>
					<Typography variant="h2" sx={{ color: "#1A1D21" }}>
						Moments in the Sky
					</Typography>
					<Typography
						sx={{
							color: "#5A6370",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
						}}
					>
						Capturing the beauty and thrill of paragliding in the Himalayas.
						These could be your memories.
					</Typography>
				</Stack>

				{/* Gallery Grid */}
				<Box
					sx={{
						width: "100%",
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "repeat(2, 1fr)",
							md: "repeat(4, 1fr)",
						},
						gridTemplateRows: {
							md: "repeat(4, 200px)",
						},
						gap: 2,
					}}
				>
					{/* Row 1-2: Large image spanning 2x2 + 4 small images */}
					<Box
						sx={{
							gridColumn: { xs: "1", sm: "1 / 3", md: "1 / 3" },
							gridRow: { md: "1 / 3" },
						}}
					>
						<GalleryImage {...galleryImages[0]} />
					</Box>
					<Box sx={{ gridColumn: { md: "3" }, gridRow: { md: "1" } }}>
						<GalleryImage {...galleryImages[1]} />
					</Box>
					<Box sx={{ gridColumn: { md: "4" }, gridRow: { md: "1" } }}>
						<GalleryImage {...galleryImages[2]} />
					</Box>
					<Box sx={{ gridColumn: { md: "3" }, gridRow: { md: "2" } }}>
						<GalleryImage {...galleryImages[3]} />
					</Box>
					<Box sx={{ gridColumn: { md: "4" }, gridRow: { md: "2" } }}>
						<GalleryImage {...galleryImages[5]} />
					</Box>

					{/* Row 3: 2 small + wide panoramic spanning 2 cols */}
					<Box sx={{ gridColumn: { md: "1" }, gridRow: { md: "3" } }}>
						<GalleryImage {...galleryImages[6]} />
					</Box>
					<Box sx={{ gridColumn: { md: "2" }, gridRow: { md: "3" } }}>
						<GalleryImage {...galleryImages[7]} />
					</Box>
					<Box
						sx={{
							gridColumn: { xs: "1", sm: "1 / 3", md: "3 / 5" },
							gridRow: { md: "3" },
						}}
					>
						<GalleryImage {...galleryImages[4]} />
					</Box>

					{/* Row 4: wide panoramic spanning 2 cols + large image spanning 2x1 */}
					<Box
						sx={{
							gridColumn: { xs: "1", sm: "1 / 3", md: "1 / 3" },
							gridRow: { md: "4" },
						}}
					>
						<GalleryImage {...galleryImages[8]} />
					</Box>
					<Box
						sx={{
							gridColumn: { xs: "1", sm: "1 / 3", md: "3 / 5" },
							gridRow: { md: "4" },
						}}
					>
						<GalleryImage {...galleryImages[9]} />
					</Box>
				</Box>
			</Stack>
		</Box>
	);
}
