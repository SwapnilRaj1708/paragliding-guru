import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { assets } from "./assets";

const testimonials = [
	{
		name: "Shon Fulzele",
		role: "Fellow Graduate",
		text: "Dream bigger. Do bigger. It taught me how to face my fear for face each of that moment in which adrenaline gushed throughout my circulatory system in a calm state of mind. It made me more subtle in any given situation and gave me the courage to face it.",
		withPhoto: true,
	},
	{
		name: "Shon Fulzele",
		role: "Fellow Graduate",
		text: "Dream bigger. Do bigger. It taught me how to face my fear for face each of that moment in which adrenaline gushed throughout my circulatory system in a calm state of mind. It made me more subtle in any given situation and gave me the courage to face it.",
		withPhoto: true,
	},
	{
		name: "Shon Fulzele",
		role: "Fellow Graduate",
		text: "Dream bigger. Do bigger. It taught me how to face my fear for face each of that moment in which adrenaline gushed throughout my circulatory system in a calm state of mind. It made me more subtle in any given situation and gave me the courage to face it.",
		withPhoto: false,
	},
	{
		name: "Shon Fulzele",
		role: "Fellow Graduate",
		text: "Dream bigger. Do bigger. It taught me how to face my fear for face each of that moment in which adrenaline gushed throughout my circulatory system in a calm state of mind. It made me more subtle in any given situation and gave me the courage to face it.",
		withPhoto: false,
	},
	{
		name: "Shon Fulzele",
		role: "Fellow Graduate",
		text: "Dream bigger. Do bigger. It taught me how to face my fear for face each of that moment in which adrenaline gushed throughout my circulatory system in a calm state of mind. It made me more subtle in any given situation and gave me the courage to face it.",
		withPhoto: true,
	},
];

function TestimonialCard({
	name,
	role,
	text,
	withPhoto,
}: (typeof testimonials)[number]) {
	return (
		<Paper
			elevation={0}
			sx={{
				border: "1px solid #CDCDCD",
				borderRadius: 3,
				p: 1.5,
				backgroundColor: "#FCFCFC",
				boxShadow: "0px 1px 6px rgba(0,0,0,0.2)",
				height: "100%",
			}}
		>
			<Stack direction="row" spacing={1.5} alignItems="center">
				<Box
					sx={{
						bgcolor: "#F2F2F2",
						borderRadius: 2,
						px: 2,
						py: 1,
						minWidth: 180,
						position: "relative",
					}}
				>
					<Stack spacing={1}>
						{withPhoto ? (
							<Avatar src={assets.testimonial1.src} alt={name} />
						) : (
							<Avatar>
								<PersonIcon />
							</Avatar>
						)}
						<Box>
							<Typography variant="body1" color="#353535" fontWeight={500}>
								{name}
							</Typography>
							<Typography variant="caption" color="#616161">
								{role}
							</Typography>
						</Box>
					</Stack>
					<FormatQuoteIcon
						sx={{
							position: "absolute",
							top: 8,
							right: 8,
							color: "#1361AF",
							transform: "rotate(180deg)",
						}}
					/>
				</Box>
				<Typography variant="body2" color="#353535">
					{text}
				</Typography>
			</Stack>
		</Paper>
	);
}

export default function TestimonialsSection() {
	return (
		<Box
			component="section"
			id="testimonials"
			sx={{
				bgcolor: "#3D3D3F",
				px: { xs: 2, md: 9 },
				py: { xs: 6, md: 9 },
				color: "#FFFFFF",
			}}
		>
			<Stack spacing={6} alignItems="center">
				<Typography variant="h2" color="#FFFFFF">
					Hear From Our Graduates
				</Typography>
				<Grid container spacing={3} justifyContent="center">
					{testimonials.map((testimonial, index) => (
						<Grid size={{ xs: 12, md: 6 }} key={`${testimonial.name}-${index}`}>
							<TestimonialCard {...testimonial} />
						</Grid>
					))}
				</Grid>
			</Stack>
		</Box>
	);
}
