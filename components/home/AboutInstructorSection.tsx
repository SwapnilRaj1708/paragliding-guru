import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

export default function AboutInstructorSection() {
	return (
		<Box
			component="section"
			id="about"
			sx={{
				bgcolor: "#F6F6F6",
				px: { xs: 2, md: 9 },
				py: { xs: 6, md: 9 },
			}}
		>
			<Stack spacing={6} alignItems="center">
				<Typography variant="h2" color="#353535" textAlign="center">
					More About Our Instructor
				</Typography>
				<Grid container spacing={4} alignItems="center">
					<Grid size={{ xs: 12, md: 6 }}>
						<Box
							component="img"
							src={assets.instructorPhoto.src}
							alt="Gurpreet, paragliding instructor"
							sx={{
								width: "100%",
								maxWidth: 480,
								borderRadius: 2,
								objectFit: "cover",
								mx: { xs: "auto", md: 0 },
							}}
						/>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<Stack spacing={3}>
							<Typography variant="h3" color="#2A2A2A">
								Meet Gurpreet
							</Typography>
							<Typography
								color="#616161"
								sx={{ "& strong": { color: "#353535", fontWeight: 600 } }}
							>
								Gurpreet is <strong>one of India’s most active</strong> and{" "}
								<strong>accomplished paragliding competition pilots</strong>,
								flying since <strong>1993</strong> and competing{" "}
								<strong>internationally since 2002</strong>. With multiple
								podium finishes in <strong>India and Europe</strong>, he is
								highly respected for his expertise and knowledge. He is also a{" "}
								<strong>BHPA-certified</strong> paragliding instructor, likely
								the <strong>only one in India</strong> certified by a{" "}
								<strong>globally accredited body</strong>.
							</Typography>
							<Button
								variant="outlined"
								sx={{
									alignSelf: "flex-start",
									borderColor: "rgba(25,118,210,0.5)",
									color: "#1976d2",
								}}
							>
								View More Details
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Stack>
		</Box>
	);
}
