// "use client";;

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

const mapEmbed =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.8639483114633!2d76.70906467161905!3d32.04095100485125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b8c0872e117b%3A0x5e8057e754691ebb!2sPG%20Gurukul!5e0!3m2!1sen!2sin!4v1769522595880!5m2!1sen!2sin";

const contactInfo = [
	{
		icon: LocationOnIcon,
		label: "Location",
		value: "Bir, Himachal Pradesh, India",
	},
	{
		icon: PhoneIcon,
		label: "Phone",
		value: "+91 98765 43210",
	},
	{
		icon: EmailIcon,
		label: "Email",
		value: "info@pggurukul.com",
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
							label="Get in Touch"
							sx={{
								bgcolor: "rgba(13, 92, 143, 0.1)",
								color: "#0D5C8F",
								fontWeight: 600,
								fontSize: 13,
							}}
						/>
						<Typography variant="h2" sx={{ color: "#1A1D21" }}>
							Ready to Fly?
						</Typography>
						<Typography
							sx={{
								color: "#5A6370",
								maxWidth: 600,
								fontSize: { xs: 16, md: 18 },
							}}
						>
							Have questions or ready to start your paragliding journey? Reach
							out to us and we'll help you take the first step.
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
										Send us a message
									</Typography>
									<Typography sx={{ color: "#5A6370", fontSize: 14 }}>
										Fill out the form and we'll get back to you within 24 hours.
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
										<MenuItem value="p1p2">P1+P2 Foundation</MenuItem>
										<MenuItem value="p3">P3 Thermal Skills</MenuItem>
										<MenuItem value="integrated">Integrated Pro</MenuItem>
										<MenuItem value="siv">SIV Safety Training</MenuItem>
										<MenuItem value="paramotor">Paramotor Course</MenuItem>
										<MenuItem value="xc">XC Cross-Country</MenuItem>
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
									// sx={{
									// 	py: 1.5,
									// 	background:
									// 		"linear-gradient(135deg, #E85D04 0%, #FF7B29 100%)",
									// 	boxShadow: "0 8px 25px rgba(232, 93, 4, 0.3)",
									// 	"&:hover": {
									// 		background:
									// 			"linear-gradient(135deg, #FF7B29 0%, #E85D04 100%)",
									// 		boxShadow: "0 12px 35px rgba(232, 93, 4, 0.4)",
									// 	},
									// }}
								>
									Send Message
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
									src={mapEmbed}
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
