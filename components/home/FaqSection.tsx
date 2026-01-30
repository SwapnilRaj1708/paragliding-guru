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
import faqsContent from "@/content/faqs.json";

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
						label={faqsContent.badge}
						sx={{
							bgcolor: "rgba(13, 92, 143, 0.1)",
							color: "#0D5C8F",
							fontWeight: 600,
							fontSize: 13,
						}}
					/>
					<Typography variant="h2" sx={{ color: "#1A1D21" }}>
						{faqsContent.title}
					</Typography>
					<Typography
						sx={{
							color: "#5A6370",
							maxWidth: 600,
							fontSize: { xs: 16, md: 18 },
						}}
					>
						{faqsContent.description}
					</Typography>
				</Stack>

				<Box sx={{ width: "100%" }}>
					<Stack spacing={2}>
						{faqsContent.items.map((faq, index) => (
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
						{faqsContent.ctaTitle}
					</Typography>
					<Typography sx={{ color: "#5A6370", mb: 2 }}>
						{faqsContent.ctaDescription}
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
						{faqsContent.ctaLinkText}
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
}
