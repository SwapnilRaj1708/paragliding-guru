import { Box, Button, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

export default function HeroSection() {
	return (
		<Box
			component="section"
			id="home"
			sx={{
				position: "relative",
				minHeight: { xs: 520, md: 695 },
				px: { xs: 2, md: 9 },
				py: { xs: 6, md: 12 },
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundImage: `url(${assets.bgImage.src})`,
				backgroundSize: "cover",
				backgroundPosition: "top",
				overflow: "hidden",
			}}
		>
			<Box
				sx={{
					maxWidth: { xs: "100%", md: 720 },
					backgroundColor: "rgba(183, 209, 235, 0.4)",
					backdropFilter: "blur(4px)",
					borderRadius: 2,
					p: { xs: 3, md: 4 },
					color: "#FFFFFF",
				}}
			>
				<Stack spacing={2}>
					<Typography variant="h1">
						India’s Trusted Paragliding School for Safe & Certified Training
					</Typography>
					<Typography sx={{ color: "#F2F2F2" }}>
						Learn to fly safely with Aero Club of India & ATOI–affiliated
						paragliding courses designed for beginners to advanced pilots.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						href="#courses"
						sx={{
							alignSelf: "flex-start",
							px: 2,
							py: 0.75,
							fontSize: 14,
							boxShadow:
								"0px 1px 5px rgba(0,0,0,0.12), 0px 2px 2px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2)",
						}}
					>
						View Courses
					</Button>
				</Stack>
			</Box>
		</Box>
	);
}
