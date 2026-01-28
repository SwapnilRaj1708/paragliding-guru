import { Box, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

type LogoProps = {
	size?: "sm" | "lg";
};

const sizes = {
	sm: {
		image: 44,
		title: 20,
		subtitle: 9,
		spacing: 1.5,
	},
	lg: {
		image: 60,
		title: 28,
		subtitle: 11,
		spacing: 2,
	},
};

export default function Logo({ size = "sm" }: LogoProps) {
	const config = sizes[size];

	return (
		<Stack direction="row" spacing={config.spacing} alignItems="center">
			<Box
				sx={{
					width: config.image,
					height: config.image,
					borderRadius: 2,
					overflow: "hidden",
					boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
					border: "2px solid rgba(255,255,255,0.1)",
					flexShrink: 0,
				}}
			>
				<Box
					component="img"
					src={assets.logo.src}
					alt="PG Gurukul"
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</Box>
			<Box>
				<Typography
					sx={{
						fontFamily: "var(--font-outfit), system-ui, sans-serif",
						fontWeight: 700,
						fontSize: config.title,
						lineHeight: 1.1,
						color: "inherit",
						letterSpacing: "-0.02em",
					}}
				>
					PG Gurukul
				</Typography>
				<Typography
					sx={{
						fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
						fontSize: config.subtitle,
						letterSpacing: "0.12em",
						textTransform: "uppercase",
						color: "inherit",
						opacity: 0.7,
						fontWeight: 500,
					}}
				>
					Himalayan Paragliding
				</Typography>
			</Box>
		</Stack>
	);
}
