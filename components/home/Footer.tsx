import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Logo from "./Logo";

const aboutLinks = ["About Instructor", "About PG Gurukul", "Regulations"];
const courseLinks = [
	"Integrated P1 to thermaling",
	"P1+P2",
	"P3",
	"Paramotoring Courses",
	"Advance Training",
	"SIV Courses",
];
const accommodationLinks = ["About Bir"];

const FooterBottom = () => {
	"use client";

	const currentYear = new Date().getFullYear();

	return (
		<Box
			sx={{
				bgcolor: "#F6F6F6",
				color: "#3D3D3F",
				px: { xs: 2, md: 9 },
				py: 3,
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "space-between",
				textAlign: { xs: "center", md: "left" },
				gap: 1,
			}}
		>
			<Typography variant="body1" fontWeight={500}>
				© {currentYear} PG Gurukul Pvt. Ltd. All Rights Reserved.
			</Typography>
			<Typography variant="body2">
				Designed by:{" "}
				<a
					href="https://elnovalabs.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					EL Nova Labs
				</a>
			</Typography>
		</Box>
	);
};

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{ bgcolor: "#575759", color: "#FFFFFF", pt: 8 }}
		>
			<Box sx={{ px: { xs: 2, md: 9 }, pb: 6 }}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={{ xs: 4, md: 8 }}
					justifyContent="space-between"
				>
					<Logo size="lg" />
					<div className="flex flex-col gap-x-8 gap-y-8 justify-start flex-wrap md:flex-row">
						<Stack spacing={1}>
							<Typography variant="h6" color="#CDCDCD">
								About us
							</Typography>
							{aboutLinks.map((link) => (
								<Typography key={link} variant="body2" color="#FFFFFF">
									{link}
								</Typography>
							))}
						</Stack>
						<Stack spacing={1}>
							<Typography variant="h6" color="#CDCDCD">
								Courses
							</Typography>
							{courseLinks.map((link) => (
								<Typography key={link} variant="body2" color="#FFFFFF">
									{link}
								</Typography>
							))}
						</Stack>
						<Stack spacing={1}>
							<Typography variant="h6" color="#CDCDCD">
								Accommodation
							</Typography>
							{accommodationLinks.map((link) => (
								<Typography key={link} variant="body2" color="#FFFFFF">
									{link}
								</Typography>
							))}
						</Stack>
					</div>
					<Stack direction="row" spacing={1}>
						{[
							{ icon: FacebookIcon, label: "Facebook" },
							{ icon: InstagramIcon, label: "Instagram" },
							{ icon: LinkedInIcon, label: "LinkedIn" },
							{ icon: MailOutlineIcon, label: "Email" },
						].map(({ icon: Icon, label }) => (
							<IconButton
								key={label}
								aria-label={label}
								sx={{
									bgcolor: "#3D3D3F",
									color: "#FFFFFF",
									"&:hover": { bgcolor: "#2A2A2A" },
									aspectRatio: 1 / 1,
									height: "fit-content",
								}}
							>
								<Icon fontSize="small" />
							</IconButton>
						))}
					</Stack>
				</Stack>
			</Box>
			<FooterBottom />
		</Box>
	);
}
