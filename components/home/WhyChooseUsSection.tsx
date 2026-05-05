import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SchoolIcon from "@mui/icons-material/School";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import whyTrainWithUsContent from "@/content/why-train-with-us.json";

const iconMap: Record<string, React.ElementType> = {
	SchoolIcon,
	TrendingUpIcon,
	CardMembershipIcon,
	SecurityIcon,
};

const colorConfig = {
	iconColor: "#0D5C8F",
	color: "#acc5e7",
	bgColor: "rgba(13, 92, 143, 0.1)",
};

const reasons = [
	{
		title: "Expert Instruction",
		description: (
			<>
				Learn from a BHPA-certified instructor with 30+ years of experience. Get
				real-world skills from a top competition pilot.
			</>
		),
		icon: "SchoolIcon",
	},
	{
		title: "All Skill Levels",
		description: (
			<>
				Structured programs from beginner to advanced. Progress at your pace
				with personalized attention and flexible scheduling.
			</>
		),
		icon: "TrendingUpIcon",
	},
	{
		title: "Official Licensing",
		description: (
			<>
				The first school in India authorized to issue government-recognized
				paragliding licenses. Fly legally anywhere.
			</>
		),
		icon: "CardMembershipIcon",
	},
	{
		title: "Safety First",
		description: 
			<>
				Affiliated with{" "}
				<a
					href="https://www.atoai.org/"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "#0D5C8F",
						textDecoration: "underline",
						fontWeight: 600,
					}}
				>
					ATOI
				</a>{" "}
				&{" "}
				<a
					href="https://aeroclubofindia.com/pg-gurukul/"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "#0D5C8F",
						textDecoration: "underline",
						fontWeight: 600,
					}}
				>
					ACI
				</a>
				. We follow strict national safety standards with modern equipment and
				proven protocols.
			</>
		,
		icon: "SecurityIcon",
	},
];

export default function WhyChooseUsSection() {
	return (
		<Box
			component="section"
			id="why-us"
			sx={{
				position: "relative",
				bgcolor: "#FFFFFF",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
				overflow: "hidden",
			}}
		>
			{/* Background Pattern */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					right: 0,
					width: "50%",
					height: "100%",
					background:
						"radial-gradient(circle at 80% 20%, rgba(13, 92, 143, 0.05) 0%, transparent 50%)",
					pointerEvents: "none",
				}}
			/>

			<Stack
				spacing={8}
				alignItems="center"
				sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}
			>
				<Stack spacing={3} alignItems="center" textAlign="center">
					<Chip
						label={whyTrainWithUsContent.badge}
						sx={{
							bgcolor: "rgba(13, 92, 143, 0.1)",
							color: "#0D5C8F",
							fontWeight: 600,
							fontSize: 13,
						}}
					/>
					<Typography variant="h2" sx={{ color: "#1A1D21" }}>
						{whyTrainWithUsContent.title}
					</Typography>
					<Typography
						sx={{
							color: "#5A6370",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
						}}
					>
						{whyTrainWithUsContent.description}
					</Typography>
				</Stack>

				<Grid container spacing={3}>
					{reasons.map((reason) => {
						const Icon = iconMap[reason.icon] || SchoolIcon;
						return (
							<Grid size={{ xs: 12, sm: 6, lg: 3 }} key={reason.title}>
								<Box
									sx={{
										height: "100%",
										p: 4,
										borderRadius: 3,
										bgcolor: "#FFFFFF",
										border: "1px solid #E2E8F0",
										transition: "all 0.3s ease",
										"&:hover": {
											borderColor: colorConfig.color,
											boxShadow: `0 20px 40px -15px ${colorConfig.color}25`,
											transform: "translateY(-8px)",
											"& .icon-box": {
												transform: "scale(1.1)",
											},
										},
									}}
								>
									<Stack spacing={3}>
										<Box
											className="icon-box"
											sx={{
												width: 64,
												height: 64,
												borderRadius: 2,
												bgcolor: colorConfig.bgColor,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												transition: "transform 0.3s ease",
											}}
										>
											<Icon
												sx={{ color: colorConfig.iconColor, fontSize: 32 }}
											/>
										</Box>
										<Box>
											<Typography
												variant="h5"
												sx={{
													color: "#1A1D21",
													mb: 1,
													fontWeight: 600,
												}}
											>
												{reason.title}
											</Typography>
											<Typography
												sx={{
													color: "#5A6370",
													fontSize: 15,
													lineHeight: 1.7,
												}}
											>
												{reason.description}
											</Typography>
										</Box>
									</Stack>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Stack>
		</Box>
	);
}
