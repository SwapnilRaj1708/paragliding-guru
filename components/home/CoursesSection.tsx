import { Box, Button, Grid, Stack, Typography } from "@mui/material";

type Course = {
	title: string;
	description: string;
	duration: string;
	durationNote: string;
	venue: string;
	venueNote: string;
	cost: string;
	costNote: string;
	tags: string[];
};

const courses: Course[] = [
	{
		title: "P1+P2 Training",
		description:
			"This 14-day course aims for the student to achieve fair thermal soaring skills. It approximately covers P1, P2, P3, and 4 days of thermal soaring training.",
		duration: "14 Days",
		durationNote: "may vary",
		venue: "Bir & Narvana",
		venueNote: "",
		cost: "₹50,000",
		costNote: "may vary",
		tags: ["Beginner Level", "Advance Level"],
	},
	{
		title: "P3 Training",
		description:
			"This 14-day course aims for the student to achieve fair thermal soaring skills. It approximately covers P1, P2, P3, and 4 days of thermal soaring training.",
		duration: "14 Days",
		durationNote: "may vary",
		venue: "Bir & Narvana",
		venueNote: "",
		cost: "₹50,000",
		costNote: "may vary",
		tags: ["Beginner Level", "Advance Level"],
	},
	{
		title: "Integrated Course",
		description:
			"This 14-day course aims for the student to achieve fair thermal soaring skills. It approximately covers P1, P2, P3, and 4 days of thermal soaring training.",
		duration: "14 Days",
		durationNote: "may vary",
		venue: "Bir & Narvana",
		venueNote: "",
		cost: "₹50,000",
		costNote: "may vary",
		tags: ["Beginner Level", "Advance Level"],
	},
	{
		title: "SIV Training",
		description:
			"This 14-day course aims for the student to achieve fair thermal soaring skills. It approximately covers P1, P2, P3, and 4 days of thermal soaring training.",
		duration: "14 Days",
		durationNote: "may vary",
		venue: "Bir & Narvana",
		venueNote: "",
		cost: "₹50,000",
		costNote: "may vary",
		tags: ["Beginner Level", "Advance Level"],
	},
	{
		title: "Paramotoring Training",
		description:
			"This 14-day course aims for the student to achieve fair thermal soaring skills. It approximately covers P1, P2, P3, and 4 days of thermal soaring training.",
		duration: "14 Days",
		durationNote: "may vary",
		venue: "Bir & Narvana",
		venueNote: "",
		cost: "₹50,000",
		costNote: "may vary",
		tags: ["Beginner Level", "Advance Level"],
	},
	{
		title: "Cross-Country Training",
		description:
			"This 14-day course aims for the student to achieve fair thermal soaring skills. It approximately covers P1, P2, P3, and 4 days of thermal soaring training.",
		duration: "14 Days",
		durationNote: "may vary",
		venue: "Bir & Narvana",
		venueNote: "",
		cost: "₹50,000",
		costNote: "may vary",
		tags: ["Beginner Level", "Advance Level"],
	},
];

function CourseCard({ course }: { course: Course }) {
	return (
		<article className="w-full p-6 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.15),0px_2px_12px_0px_rgba(0,0,0,0.10)] outline outline-stone-300 inline-flex flex-col justify-start items-start overflow-hidden">
			<div className="flex gap-1 mb-4">
				<p className="px-[14px] py-1.5 outline-1 -outline-offset-1 outline-sky-700 rounded-full text-sky-700 text-xs font-normal">
					Beginner level
				</p>
				<p className="px-[14px] py-1.5 outline-1 -outline-offset-1 outline-sky-700 rounded-full text-sky-700 text-xs font-normal">
					Advance level
				</p>
			</div>
			<p className="text-neutral-700 text-2xl font-semibold mb-2">
				P1+P2 Training
			</p>
			<p className="self-stretch justify-start text-zinc-600 text-xs font-normal mb-4">
				This 14-day course aims for the student to achieve fair thermal soaring
			</p>
			<p className="justify-start text-neutral-700 text-base font-normal mb-3">
				Duration: <strong>{course.duration}</strong>
				{course.durationNote && (
					<span className="text-zinc-600 text-xs"> (may vary)</span>
				)}
			</p>
			<p className="justify-start text-neutral-700 text-base font-normal mb-3">
				Venue: <strong>{course.venue}</strong>
				{course.venueNote && (
					<span className="text-zinc-600 text-xs"> (may vary)</span>
				)}
			</p>
			<p className="justify-start text-neutral-700 text-base font-normal mb-4">
				Cost: <strong>{course.cost}</strong>
				{course.costNote && (
					<span className="text-zinc-600 text-xs"> (may vary)</span>
				)}
			</p>
			<Button variant="outlined" color="secondary" fullWidth>
				View More
			</Button>
		</article>
	);
}

export default function CoursesSection() {
	return (
		<Box
			component="section"
			id="courses"
			sx={{ px: { xs: 2, md: 9 }, py: { xs: 6, md: 9 } }}
		>
			<Stack spacing={4}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={2}
					alignItems={{ xs: "flex-start", md: "center" }}
					justifyContent="space-between"
				>
					<Typography variant="h2" color="#353535">
						Find Courses Best Suited for You
					</Typography>
					<Button variant="contained" color="primary">
						View All Courses
					</Button>
				</Stack>

				<Stack spacing={2}>
					<Typography variant="h5" color="#353535">
						Hover to see courses suitable for you
					</Typography>
					<Box
						sx={{
							height: 16,
							borderRadius: 999,
							bgcolor: "#FEE6E4",
							position: "relative",
							overflow: "hidden",
						}}
					>
						<Box
							sx={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								width: "33%",
								bgcolor: "#CEEEDC",
							}}
						/>
						<Box
							sx={{
								position: "absolute",
								left: "33%",
								top: 0,
								bottom: 0,
								width: "33%",
								bgcolor: "#F5EDD9",
							}}
						/>
					</Box>
				</Stack>

				<Grid container spacing={3}>
					{courses.map((course) => (
						<Grid size={{ xs: 12, md: 4 }} key={course.title}>
							<CourseCard course={course} />
						</Grid>
					))}
				</Grid>
			</Stack>
		</Box>
	);
}
