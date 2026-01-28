import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Stack,
	Typography,
} from "@mui/material";

const faqs = [
	{
		question: "Who can join the paragliding courses?",
		answer:
			"Anyone with a basic level of fitness and a passion for flying can join. Our courses are designed for beginners as well as experienced pilots looking to progress.",
	},
	{
		question: "Are the courses certified?",
		answer:
			"Yes. We are affiliated with Aero Club of India and ATOI, and the courses follow recognized safety and training standards.",
	},
	{
		question: "What should I bring for the course?",
		answer:
			"Comfortable outdoor clothing, sturdy shoes, sunglasses, and a water bottle are recommended. We provide all technical equipment.",
	},
	{
		question: "How long are the training programs?",
		answer:
			"Most courses run for 10-14 days depending on weather conditions and progression.",
	},
	{
		question: "Can I get a license after completing the course?",
		answer:
			"Yes, eligible students can receive government-recognized paragliding licenses after completing required training and assessments.",
	},
];

export default function FaqSection() {
	return (
		<Box
			component="section"
			id="faqs"
			sx={{ px: { xs: 2, md: 9 }, py: { xs: 6, md: 9 } }}
		>
			<Stack spacing={4} alignItems="center">
				<Typography variant="h2" color="#353535">
					FAQs
				</Typography>
				<Box sx={{ width: "100%", maxWidth: 1090 }}>
					{faqs.map((faq, index) => (
						<Accordion
							key={faq.question}
							defaultExpanded={index === 0}
							sx={{
								boxShadow: "0px 1px 6px rgba(0,0,0,0.2)",
							}}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`faq-${index}-content`}
								id={`faq-${index}-header`}
							>
								<Typography variant="body1" color="#353535">
									{faq.question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography variant="body2" color="#616161">
									{faq.answer}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>
			</Stack>
		</Box>
	);
}
