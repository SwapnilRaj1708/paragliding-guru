import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Logo from "./Logo";

const footerLinks = {
	courses: [
		"P1+P2 Foundation",
		"P3 Thermal Skills",
		"Integrated Pro",
		"SIV Safety Training",
		"Paramotor Course",
		"XC Cross-Country",
	],
	company: ["About Us", "Our Instructor", "Gallery", "Testimonials", "FAQs"],
	support: ["Contact Us", "Location", "Booking Policy", "Safety Guidelines"],
};

const socialLinks = [
	{ icon: FacebookIcon, label: "Facebook", href: "#" },
	{ icon: InstagramIcon, label: "Instagram", href: "#" },
	{ icon: YouTubeIcon, label: "YouTube", href: "#" },
	{ icon: LinkedInIcon, label: "LinkedIn", href: "#" },
];

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<Box
			component="footer"
			sx={{
				background: "linear-gradient(180deg, #0F172A 0%, #020617 100%)",
				color: "#FFFFFF",
			}}
		>
			{/* Main Footer */}
			<Box
				sx={{
					maxWidth: 1200,
					mx: "auto",
					px: { xs: 2, md: 4 },
					py: { xs: 6, md: 8 },
				}}
			>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "repeat(2, 1fr)",
							md: "2fr repeat(3, 1fr)",
						},
						gap: { xs: 4, md: 6 },
					}}
				>
					{/* Brand Column */}
					<Box>
						<Logo size="lg" />
						<Typography
							sx={{
								color: "rgba(255,255,255,0.7)",
								mt: 3,
								mb: 4,
								maxWidth: 280,
								fontSize: 14,
								lineHeight: 1.7,
							}}
						>
							India's premier paragliding school offering certified training in
							the stunning Himalayan landscapes since 1993.
						</Typography>
						<Stack direction="row" spacing={1}>
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<IconButton
										key={social.label}
										aria-label={social.label}
										href={social.href}
										sx={{
											bgcolor: "rgba(255,255,255,0.05)",
											color: "rgba(255,255,255,0.7)",
											border: "1px solid rgba(255,255,255,0.1)",
											transition: "all 0.2s ease",
											"&:hover": {
												bgcolor: "#0D5C8F",
												color: "#FFFFFF",
												borderColor: "#0D5C8F",
												transform: "translateY(-2px)",
											},
										}}
									>
										<Icon fontSize="small" />
									</IconButton>
								);
							})}
						</Stack>
					</Box>

					{/* Courses Column */}
					<Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: 14,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								color: "rgba(255,255,255,0.5)",
								mb: 2.5,
							}}
						>
							Courses
						</Typography>
						<Stack spacing={1.5}>
							{footerLinks.courses.map((link) => (
								<Typography
									key={link}
									component="a"
									href="#courses"
									sx={{
										color: "rgba(255,255,255,0.7)",
										fontSize: 14,
										textDecoration: "none",
										transition: "color 0.2s ease",
										"&:hover": {
											color: "#1A8FD1",
										},
									}}
								>
									{link}
								</Typography>
							))}
						</Stack>
					</Box>

					{/* Company Column */}
					<Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: 14,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								color: "rgba(255,255,255,0.5)",
								mb: 2.5,
							}}
						>
							Company
						</Typography>
						<Stack spacing={1.5}>
							{footerLinks.company.map((link) => (
								<Typography
									key={link}
									component="a"
									href="#"
									sx={{
										color: "rgba(255,255,255,0.7)",
										fontSize: 14,
										textDecoration: "none",
										transition: "color 0.2s ease",
										"&:hover": {
											color: "#1A8FD1",
										},
									}}
								>
									{link}
								</Typography>
							))}
						</Stack>
					</Box>

					{/* Support Column */}
					<Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: 14,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								color: "rgba(255,255,255,0.5)",
								mb: 2.5,
							}}
						>
							Support
						</Typography>
						<Stack spacing={1.5}>
							{footerLinks.support.map((link) => (
								<Typography
									key={link}
									component="a"
									href="#contact"
									sx={{
										color: "rgba(255,255,255,0.7)",
										fontSize: 14,
										textDecoration: "none",
										transition: "color 0.2s ease",
										"&:hover": {
											color: "#1A8FD1",
										},
									}}
								>
									{link}
								</Typography>
							))}
						</Stack>
					</Box>
				</Box>
			</Box>

			{/* Bottom Bar */}
			<Box
				sx={{
					borderTop: "1px solid rgba(255,255,255,0.1)",
				}}
			>
				<Box
					sx={{
						maxWidth: 1200,
						mx: "auto",
						px: { xs: 2, md: 4 },
						py: 3,
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 2,
					}}
				>
					<Typography
						sx={{
							color: "rgba(255,255,255,0.5)",
							fontSize: 14,
						}}
					>
						© {currentYear} PG Gurukul. All rights reserved.
					</Typography>
					<Typography
						sx={{
							color: "rgba(255,255,255,0.5)",
							fontSize: 14,
						}}
					>
						Designed with ♥ by{" "}
						<Box
							component="a"
							href="https://elnovalabs.com"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								color: "#1A8FD1",
								textDecoration: "none",
								fontWeight: 500,
								"&:hover": {
									textDecoration: "underline",
								},
							}}
						>
							EL Nova Labs
						</Box>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
