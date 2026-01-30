import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { assets } from "./assets";
import coursesContent from "@/content/courses.json";

type Course = {
	title: string;
	description: string;
	duration: string;
	venue: string;
	cost: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	tag: string;
	featured?: boolean;
};

const levelColors = {
	Beginner: { bg: "#ceeedc", color: "#0a5b2f" },
	Intermediate: { bg: "#f5edd9", color: "#6e4f06" },
	Advanced: { bg: "#fee6e4", color: "#b3261e" },
};

function CourseCard({ course }: { course: Course }) {
	const levelStyle = levelColors[course.level];

	return (
		<Box
			sx={{
				height: "100%",
				borderRadius: 3,
				overflow: "hidden",
				bgcolor: "#FFFFFF",
				border: course.featured ? "2px solid #4f81c3" : "1px solid #E2E8F0",
				boxShadow: course.featured
					? "0 20px 40px -15px rgba(13, 92, 143, 0.2)"
					: "0 4px 20px rgba(0,0,0,0.06)",
				transition: "all 0.3s ease",
				position: "relative",
				"&:hover": {
					transform: "translateY(-8px)",
					boxShadow: "0 25px 50px -15px rgba(0,0,0,0.15)",
				},
			}}
		>
			{/* Featured Badge */}
			{course.featured && (
				<Box
					sx={{
						position: "absolute",
						top: 16,
						right: 16,
						zIndex: 2,
					}}
				>
					<Chip
						label="Recommended"
						size="small"
						sx={{
							bgcolor: "#1361af",
							color: "#FFFFFF",
							fontWeight: 600,
							fontSize: 11,
						}}
					/>
				</Box>
			)}

			{/* Image Header */}
			<Box
				sx={{
					position: "relative",
					height: 180,
					overflow: "hidden",
				}}
			>
				<Box
					component="img"
					src={assets.gallery9.src}
					alt={course.title}
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						transition: "transform 0.3s ease",
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(180deg, transparent 30%, rgba(15, 23, 42, 0.8) 100%)",
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						bottom: 12,
						left: 12,
						right: 12,
						display: "flex",
						gap: 1,
					}}
				>
					<Chip
						label={course.level}
						size="small"
						sx={{
							bgcolor: levelStyle.bg,
							color: levelStyle.color,
							fontWeight: 600,
							fontSize: 11,
							backdropFilter: "blur(8px)",
						}}
					/>
				</Box>
			</Box>

			{/* Content */}
			<Box sx={{ p: 3 }}>
				<Stack spacing={2}>
					<Typography
						variant="h4"
						sx={{
							color: "#1A1D21",
							fontSize: 20,
						}}
					>
						{course.title}
					</Typography>

					<Typography
						sx={{
							color: "#5A6370",
							fontSize: 14,
							lineHeight: 1.6,
							minHeight: 66,
						}}
					>
						{course.description}
					</Typography>

					<Stack spacing={1}>
						<Stack direction="row" spacing={1} alignItems="center">
							<AccessTimeIcon sx={{ fontSize: 18, color: "#94A3B8" }} />
							<Typography sx={{ color: "#5A6370", fontSize: 14 }}>
								<strong style={{ color: "#1A1D21" }}>{course.duration}</strong>{" "}
								(may vary)
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1} alignItems="center">
							<LocationOnIcon sx={{ fontSize: 18, color: "#94A3B8" }} />
							<Typography sx={{ color: "#5A6370", fontSize: 14 }}>
								{course.venue}
							</Typography>
						</Stack>
					</Stack>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							pt: 2,
							borderTop: "1px solid #E2E8F0",
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: 24,
									fontWeight: 700,
									color: "#0D5C8F",
									fontFamily: "var(--font-outfit)",
								}}
							>
								{course.cost}
							</Typography>
							<Typography sx={{ fontSize: 12, color: "#94A3B8" }}>
								All inclusive
							</Typography>
						</Box>
						<Button
							variant="contained"
							endIcon={<ArrowForwardIcon />}
							href="#contact"
						>
							View Details
						</Button>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}

export default function CoursesSection() {
	return (
		<Box
			component="section"
			id="courses"
			sx={{
				position: "relative",
				bgcolor: "#F8FAFC",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
			}}
		>
			{/* Background decoration */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 400,
					background:
						"linear-gradient(180deg, rgba(13, 92, 143, 0.03) 0%, transparent 100%)",
					pointerEvents: "none",
				}}
			/>

			<Stack
				spacing={6}
				sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}
			>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={3}
					alignItems={{ xs: "flex-start", md: "flex-end" }}
					justifyContent="space-between"
				>
					<Box>
						<Chip
							label={coursesContent.badge}
							sx={{
								bgcolor: "rgba(13, 92, 143, 0.1)",
								color: "#0D5C8F",
								fontWeight: 600,
								fontSize: 13,
								mb: 2,
							}}
						/>
						<Typography variant="h2" sx={{ color: "#1A1D21", mb: 1 }}>
							{coursesContent.title}
						</Typography>
						<Typography sx={{ color: "#5A6370", maxWidth: 500 }}>
							{coursesContent.description}
						</Typography>
					</Box>
					<Button
						variant="outlined"
						sx={{
							borderColor: "#0D5C8F",
							color: "#0D5C8F",
							borderWidth: 2,
							"&:hover": {
								borderWidth: 2,
								bgcolor: "rgba(13, 92, 143, 0.05)",
							},
						}}
					>
						View All Courses
					</Button>
				</Stack>

				<Grid container spacing={3}>
					{coursesContent.items.map((course) => (
						<Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.title}>
							<CourseCard course={course as Course} />
						</Grid>
					))}
				</Grid>
			</Stack>
		</Box>
	);
}
