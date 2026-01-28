"use client";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Chip,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";

const faqs = [
	{
		question: "Who can join the paragliding courses?",
		answer:
			"Anyone with a basic level of fitness and a passion for flying can join. There's no prior experience required for beginner courses. We accept students from age 16 to 60+, with medical clearance for those with health conditions. Our courses are designed to accommodate different fitness levels and learning paces.",
	},
	{
		question: "Are the courses certified and recognized?",
		answer:
			"Yes, absolutely! We are the only school in India affiliated with Aero Club of India (empowered by DGCA), ATOI, and PAI. Our certifications are recognized nationally, and we follow international safety and training standards. Graduates receive official licenses that allow them to fly legally in India.",
	},
	{
		question: "What equipment do I need to bring?",
		answer:
			"We provide all technical paragliding equipment including the glider, harness, helmet, and radio. You should bring comfortable outdoor clothing, sturdy hiking shoes, sunglasses, sunscreen, and a water bottle. During winter months, warm layers are recommended. A detailed packing list is sent upon enrollment.",
	},
	{
		question: "How long are the training programs?",
		answer:
			"Course duration varies: P1+P2 Foundation is 14 days, P3 Thermal Skills is 10 days, and our comprehensive Integrated Course is 21 days. Duration may extend based on weather conditions and individual progress. We prioritize quality learning over rushing through the curriculum.",
	},
	{
		question: "What happens if weather conditions are bad?",
		answer:
			"Safety is our priority. On non-flying days due to weather, we conduct ground school covering theory, meteorology, equipment maintenance, and video analysis. These sessions are invaluable for becoming a well-rounded pilot. Course extensions are provided at no extra cost if needed.",
	},
	{
		question: "Is accommodation included in the course fee?",
		answer:
			"Basic accommodation recommendations are provided, but lodging is typically separate from course fees. We have partnerships with local guesthouses offering student discounts. Bir is a beautiful town with options ranging from budget stays to comfortable hotels, all within walking distance of our training sites.",
	},
];

export default function FaqSection() {
	const [expanded, setExpanded] = useState<string | false>("faq-0");

	const handleChange =
		(panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<Box
			component="section"
			id="faqs"
			sx={{
				bgcolor: "#FFFFFF",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
			}}
		>
			<Stack spacing={6} alignItems="center" sx={{ maxWidth: 900, mx: "auto" }}>
				<Stack spacing={3} alignItems="center" textAlign="center">
					<Chip
						label="Have Questions?"
						sx={{
							bgcolor: "rgba(13, 92, 143, 0.1)",
							color: "#0D5C8F",
							fontWeight: 600,
							fontSize: 13,
						}}
					/>
					<Typography variant="h2" sx={{ color: "#1A1D21" }}>
						Frequently Asked Questions
					</Typography>
					<Typography
						sx={{
							color: "#5A6370",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
						}}
					>
						Everything you need to know about our courses and training programs.
					</Typography>
				</Stack>

				<Box sx={{ width: "100%" }}>
					<Stack spacing={2}>
						{faqs.map((faq, index) => (
							<Accordion
								key={`faq-${index}`}
								expanded={expanded === `faq-${index}`}
								onChange={handleChange(`faq-${index}`)}
								sx={{
									bgcolor: expanded === `faq-${index}` ? "#F8FAFC" : "#FFFFFF",
									border: "1px solid",
									borderColor:
										expanded === `faq-${index}` ? "#4f81c3" : "#E2E8F0",
									borderRadius: "12px !important",
									transition: "all 0.3s ease",
									"&:hover": {
										borderColor: "#acc5e7",
									},
									"&:before": {
										display: "none",
									},
									"&.Mui-expanded": {
										mt: 2,
									},
								}}
							>
								<AccordionSummary
									expandIcon={
										expanded === `faq-${index}` ? (
											<RemoveIcon sx={{ color: "#0D5C8F" }} />
										) : (
											<AddIcon sx={{ color: "#5A6370" }} />
										)
									}
									sx={{
										px: 3,
										py: 1,
										"& .MuiAccordionSummary-content": {
											my: 2,
										},
									}}
								>
									<Typography
										sx={{
											fontWeight: 600,
											fontSize: 16,
											color:
												expanded === `faq-${index}` ? "#0D5C8F" : "#1A1D21",
										}}
									>
										{faq.question}
									</Typography>
								</AccordionSummary>
								<AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
									<Typography
										sx={{
											color: "#5A6370",
											fontSize: 15,
											lineHeight: 1.8,
										}}
									>
										{faq.answer}
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Stack>
				</Box>

				<Box
					sx={{
						bgcolor: "#F8FAFC",
						borderRadius: 3,
						p: 4,
						textAlign: "center",
						border: "1px solid #E2E8F0",
						width: "100%",
					}}
				>
					<Typography
						sx={{
							color: "#1A1D21",
							fontWeight: 600,
							fontSize: 18,
							mb: 1,
						}}
					>
						Still have questions?
					</Typography>
					<Typography sx={{ color: "#5A6370", mb: 2 }}>
						Can&apos;t find the answer you&apos;re looking for? Reach out to us
						directly.
					</Typography>
					<Typography
						component="a"
						href="#contact"
						sx={{
							color: "#0D5C8F",
							fontWeight: 600,
							textDecoration: "none",
							"&:hover": {
								textDecoration: "underline",
							},
						}}
					>
						Contact our team →
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
}
