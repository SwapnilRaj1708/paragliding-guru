import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Box, Grid, Stack, Typography } from "@mui/material";

const reasons = [
	{
		title: "Learn from an Expert",
		reasons: [
			"With 30+ years of flying experience.",
			"BHPA-certified paragliding instructor.",
			"Top competition pilot with real cross country expertise.",
		],
		icon: SchoolIcon,
	},
	{
		title: "Courses for Every Level",
		reasons: [
			"Beginner to advanced training programs.",
			"Learn at your own pace with flexible options.",
			"Structured lessons for safe, steady progress.",
		],
		icon: TrendingUpIcon,
	},
	{
		title: "Get Authorized License",
		reasons: [
			"Obtain a government-recognized license in India.",
			"This is the only school in the country authorized to issue such licenses.",
		],
		icon: WorkspacePremiumIcon,
	},
	{
		title: "Trusted School",
		reasons: [
			"Affiliated with ATOI, ACI & Paragliding School of India.",
			"Follows national safety and training standards.",
			"Recognized as a trusted, professional institute.",
		],
		icon: VerifiedIcon,
	},
];

export default function WhyChooseUsSection() {
	return (
		<Box
			component="section"
			id="why-us"
			sx={{ px: { xs: 2, md: 9 }, py: { xs: 6, md: 9 } }}
		>
			<Stack spacing={6} alignItems="center">
				<Typography variant="h2" color="#353535">
					Why Choose Us
				</Typography>
				<Grid container spacing={4}>
					{reasons.map((reason) => {
						const Icon = reason.icon;
						return (
							<Grid size={{ xs: 12, md: 6 }} key={reason.title}>
								<Stack direction="row" spacing={2} alignItems="flex-start">
									<Box
										sx={{
											width: { xs: 48, sm: 86 },
											height: { xs: 48, sm: 86 },
											borderRadius: "8px",
											bgcolor: "#F2F2F2",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
										}}
									>
										<Icon sx={{ color: "#1361AF" }} />
									</Box>
									<Stack spacing={1}>
										<Typography variant="h5" color="#353535">
											{reason.title}
										</Typography>
										<ul className="list-disc list-inside">
											{reason.reasons.map((reason) => (
												<li className="text-[#616161] text-sm" key={reason}>
													{reason}
												</li>
											))}
										</ul>
									</Stack>
								</Stack>
							</Grid>
						);
					})}
				</Grid>
			</Stack>
		</Box>
	);
}
