import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import {
	Box,
	Button,
	Chip,
	Grid,
	MenuItem,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import contactContent from "@/content/contact.json";
import siteContent from "@/content/site.json";
import coursesContent from "@/content/courses.json";

const iconMap: Record<string, React.ElementType> = {
	LocationOnIcon,
	PhoneIcon,
	EmailIcon,
};

const contactInfo = [
	{
		icon: LocationOnIcon,
		label: "Location",
		value: siteContent.location,
	},
	{
		icon: PhoneIcon,
		label: "Phone",
		value: siteContent.phone,
	},
	{
		icon: EmailIcon,
		label: "Email",
		value: siteContent.email,
	},
];

export default function ContactSection() {
	return (
		<Box
			component="section"
			id="contact"
			sx={{
				position: "relative",
				background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
				px: { xs: 2, md: 4 },
				py: { xs: 8, md: 12 },
			}}
		>
			<Box sx={{ maxWidth: 1200, mx: "auto" }}>
				<Stack spacing={6} alignItems="center" sx={{ mb: 6 }}>
					<Stack spacing={3} alignItems="center" textAlign="center">
						<Chip
							label={contactContent.badge}
							sx={{
								bgcolor: "rgba(13, 92, 143, 0.1)",
								color: "#0D5C8F",
								fontWeight: 600,
								fontSize: 13,
							}}
						/>
						<Typography variant="h2" sx={{ color: "#1A1D21" }}>
							{contactContent.title}
						</Typography>
						<Typography
							sx={{
								color: "#5A6370",
								maxWidth: 600,
								fontSize: { xs: 16, md: 18 },
							}}
						>
							{contactContent.description}
						</Typography>
					</Stack>
				</Stack>

				<Grid container spacing={4}>
					<Grid size={{ xs: 12, md: 5 }}>
						<Box
							sx={{
								bgcolor: "#FFFFFF",
								borderRadius: 3,
								p: { xs: 3, md: 4 },
								boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
								border: "1px solid #E2E8F0",
								height: "100%",
							}}
						>
							<Stack spacing={4}>
								<Box>
									<Typography variant="h4" sx={{ color: "#1A1D21", mb: 1 }}>
										{contactContent.formTitle}
									</Typography>
									<Typography sx={{ color: "#5A6370", fontSize: 14 }}>
										{contactContent.formDescription}
									</Typography>
								</Box>

								<Stack spacing={2.5}>
									<TextField
										label="Your Name"
										placeholder="John Doe"
										fullWidth
										sx={{
											"& .MuiOutlinedInput-root": {
												bgcolor: "#F8FAFC",
											},
										}}
									/>
									<TextField
										label="Email Address"
										placeholder="john@example.com"
										type="email"
										fullWidth
										sx={{
											"& .MuiOutlinedInput-root": {
												bgcolor: "#F8FAFC",
											},
										}}
									/>
									<TextField
										label="Phone Number"
										placeholder="+91 98765 43210"
										fullWidth
										sx={{
											"& .MuiOutlinedInput-root": {
												bgcolor: "#F8FAFC",
											},
										}}
									/>
									<TextField
										label="Interested Course"
										select
										fullWidth
										defaultValue=""
										sx={{
											"& .MuiOutlinedInput-root": {
												bgcolor: "#F8FAFC",
											},
										}}
									>
										<MenuItem value="">Select a course</MenuItem>
										{coursesContent.items.map((course) => (
											<MenuItem key={course.title} value={course.title.toLowerCase().replace(/\s+/g, '-')}>
												{course.title}
											</MenuItem>
										))}
									</TextField>
									<TextField
										label="Your Message"
										placeholder="Tell us about your flying goals..."
										multiline
										rows={4}
										fullWidth
										sx={{
											"& .MuiOutlinedInput-root": {
												bgcolor: "#F8FAFC",
											},
										}}
									/>
								</Stack>

								<Button
									variant="contained"
									size="large"
									endIcon={<SendIcon />}
								>
									{contactContent.buttonText}
								</Button>
							</Stack>
						</Box>
					</Grid>

					<Grid size={{ xs: 12, md: 7 }}>
						<Stack spacing={3} sx={{ height: "100%" }}>
							{/* Map */}
							<Box
								sx={{
									flex: 1,
									minHeight: 350,
									borderRadius: 3,
									overflow: "hidden",
									boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
									border: "1px solid #E2E8F0",
								}}
							>
								<Box
									component="iframe"
									title="PG Gurukul Location"
									src={siteContent.mapEmbedUrl}
									loading="lazy"
									allowFullScreen
									referrerPolicy="no-referrer-when-downgrade"
									sx={{
										width: "100%",
										height: "100%",
										minHeight: 350,
										border: 0,
									}}
								/>
							</Box>

							{/* Contact Info Cards */}
							<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
								{contactInfo.map((info) => {
									const Icon = info.icon;
									return (
										<Box
											key={info.label}
											sx={{
												flex: 1,
												bgcolor: "#FFFFFF",
												borderRadius: 2,
												p: 2.5,
												boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
												border: "1px solid #E2E8F0",
												transition: "all 0.3s ease",
												"&:hover": {
													borderColor: "#0D5C8F",
													transform: "translateY(-2px)",
												},
											}}
										>
											<Stack direction="row" spacing={2} alignItems="center">
												<Box
													sx={{
														width: 44,
														height: 44,
														borderRadius: 2,
														bgcolor: "rgba(13, 92, 143, 0.1)",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
													}}
												>
													<Icon sx={{ color: "#0D5C8F" }} />
												</Box>
												<Box>
													<Typography
														sx={{
															fontSize: 12,
															color: "#94A3B8",
															textTransform: "uppercase",
															letterSpacing: "0.05em",
															fontWeight: 500,
														}}
													>
														{info.label}
													</Typography>
													<Typography
														sx={{
															color: "#1A1D21",
															fontWeight: 500,
															fontSize: 14,
														}}
													>
														{info.value}
													</Typography>
												</Box>
											</Stack>
										</Box>
									);
								})}
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
