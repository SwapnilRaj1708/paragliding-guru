import { Box, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

type LogoProps = {
	size?: "sm" | "lg";
};

const sizes = {
	sm: {
		image: 40,
		title: 18,
		subtitle: 8,
		spacing: 1,
	},
	lg: {
		image: 74,
		title: 36,
		subtitle: 13,
		spacing: 1.5,
	},
};

export default function Logo({ size = "sm" }: LogoProps) {
	const config = sizes[size];

	return (
		<Stack direction="row" spacing={config.spacing} alignItems="center">
			<Box
				component="img"
				src={assets.logo.src}
				alt="PG Gurukul logo"
				sx={{
					width: config.image,
					height: config.image,
					borderRadius: 1,
					objectFit: "cover",
				}}
			/>
			<Box>
				<Typography
					sx={{
						fontFamily: "var(--font-poppins), Arial, sans-serif",
						fontWeight: 600,
						fontSize: config.title,
						lineHeight: 1.1,
						color: "inherit",
					}}
				>
					PG Gurukul
				</Typography>
				<Typography
					sx={{
						fontFamily: "var(--font-inter), Arial, sans-serif",
						fontSize: config.subtitle,
						letterSpacing: "0.08em",
						textTransform: "uppercase",
						color: "inherit",
						opacity: 0.9,
					}}
				>
					Himalayan Paragliding School
				</Typography>
			</Box>
		</Stack>
	);
}
