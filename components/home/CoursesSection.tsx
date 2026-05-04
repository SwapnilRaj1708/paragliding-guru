"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import {
	Alert,
	Box,
	Button,
	Chip,
	CircularProgress,
	Dialog,
	DialogContent,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	type SelectChangeEvent,
	Stack,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import coursesContent from "@/content/courses.json";
import { assets } from "./assets";

type CourseSchedule = {
	note?: string;
	sessions?: string[];
};

type Course = {
	title: string;
	primaryDescription: string;
	secondaryDescription: string;
	duration: string;
	venue: string;
	cost: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	tag: string;
	featured?: boolean;
	schedule?: CourseSchedule;
};

const levelColors = {
	Beginner: { bg: "#ceeedc", color: "#0a5b2f" },
	Intermediate: { bg: "#f5edd9", color: "#6e4f06" },
	Advanced: { bg: "#fee6e4", color: "#b3261e" },
};

const fitnessLevels = ["Low", "Moderate", "Good", "Excellent"];
const fearHandlingOptions = [
	"I stay calm under pressure",
	"I manage fear well after some time",
	"I'm cautious but willing to push through",
	"I struggle with fear — looking to improve",
];

/** Keeps the dropdown inside the Dialog so menu clicks aren’t swallowed by focus / scroll-lock. */
const dialogSelectMenuProps = {
	disablePortal: true,
	disableScrollLock: true,
} as const;

type ApplicationForm = {
	fullName: string;
	dob: string;
	email: string;
	phone: string;
	nationality: string;
	weight: string;
	batch: string;
	education: string;
	fitnessLevel: string;
	sportsHistory: string;
	coordinationActivities: string;
	fearHandling: string;
	motivation: string;
};

const emptyForm: ApplicationForm = {
	fullName: "",
	dob: "",
	email: "",
	phone: "",
	nationality: "",
	weight: "",
	batch: "",
	education: "",
	fitnessLevel: "",
	sportsHistory: "",
	coordinationActivities: "",
	fearHandling: "",
	motivation: "",
};

type FormErrors = Partial<Record<keyof ApplicationForm, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateApplicationForm(form: ApplicationForm): FormErrors {
	const errors: FormErrors = {};

	const fullName = form.fullName.trim();
	if (!fullName) {
		errors.fullName = "Full name is required.";
	} else if (fullName.length < 2) {
		errors.fullName = "Please enter at least 2 characters.";
	} else if (fullName.length > 200) {
		errors.fullName = "Name must be at most 200 characters.";
	}

	if (!form.dob) {
		errors.dob = "Date of birth is required.";
	} else {
		const dob = new Date(`${form.dob}T12:00:00`);
		if (Number.isNaN(dob.getTime())) {
			errors.dob = "Please enter a valid date.";
		} else {
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			const compare = new Date(dob);
			compare.setHours(0, 0, 0, 0);
			if (compare > today) {
				errors.dob = "Date of birth cannot be in the future.";
			} else {
				let age = today.getFullYear() - dob.getFullYear();
				const monthDiff = today.getMonth() - dob.getMonth();
				if (
					monthDiff < 0 ||
					(monthDiff === 0 && today.getDate() < dob.getDate())
				) {
					age--;
				}
				if (age < 10) {
					errors.dob = "Applicants must be at least 10 years old.";
				}
				if (age > 100) {
					errors.dob = "Please verify your date of birth.";
				}
			}
		}
	}

	const email = form.email.trim();
	if (!email) {
		errors.email = "Email is required.";
	} else if (!EMAIL_REGEX.test(email)) {
		errors.email = "Please enter a valid email address.";
	} else if (email.length > 200) {
		errors.email = "Email is too long.";
	}

	const phoneDigits = form.phone.replace(/\D/g, "");
	if (!form.phone.trim()) {
		errors.phone = "Phone number is required.";
	} else if (phoneDigits.length < 10) {
		errors.phone = "Enter a valid number with at least 10 digits.";
	} else if (phoneDigits.length > 15) {
		errors.phone = "Phone number has too many digits (max 15).";
	}

	const nationality = form.nationality.trim();
	if (!nationality) {
		errors.nationality = "Nationality is required.";
	} else if (nationality.length < 2) {
		errors.nationality = "Please enter at least 2 characters.";
	}

	const weightStr = form.weight.trim().replace(",", ".");
	if (!weightStr) {
		errors.weight = "Weight is required.";
	} else {
		const w = Number.parseFloat(weightStr);
		if (Number.isNaN(w)) {
			errors.weight = "Please enter a valid weight in kg.";
		} else if (w < 25 || w > 250) {
			errors.weight = "Enter a weight between 25 and 250 kg.";
		}
	}

	if (!form.batch.trim()) {
		errors.batch = "Please select which batch you are applying for.";
	}

	const education = form.education.trim();
	if (!education) {
		errors.education = "Education is required.";
	} else if (education.length < 2) {
		errors.education = "Please enter your education (at least 2 characters).";
	}

	if (!form.fitnessLevel) {
		errors.fitnessLevel = "Please select your fitness level.";
	} else if (!fitnessLevels.includes(form.fitnessLevel)) {
		errors.fitnessLevel = "Please select a valid fitness level.";
	}

	const sportsHistory = form.sportsHistory.trim();
	if (!sportsHistory) {
		errors.sportsHistory =
			'This field is required. Write "None" if you have no prior experience.';
	} else if (sportsHistory.length < 4) {
		errors.sportsHistory =
			'Please enter at least 4 characters (e.g. "Football).';
	}

	const coordinationActivities = form.coordinationActivities.trim();
	if (!coordinationActivities) {
		errors.coordinationActivities =
			'This field is required. Write "None" if not applicable.';
	} else if (coordinationActivities.length < 4) {
		errors.coordinationActivities =
			'Please enter at least 4 characters (e.g. "Football).';
	}

	if (!form.fearHandling) {
		errors.fearHandling = "Please select how you handle fear.";
	} else if (!fearHandlingOptions.includes(form.fearHandling)) {
		errors.fearHandling = "Please select a valid option.";
	}

	const motivation = form.motivation.trim();
	if (!motivation) {
		errors.motivation = "Motivation is required.";
	} else if (motivation.length < 15) {
		errors.motivation =
			"Please write at least 15 characters about your motivation.";
	}

	return errors;
}

function CourseCard({
	course,
	onViewDetails,
}: {
	course: Course;
	onViewDetails: (course: Course) => void;
}) {
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
						{course.primaryDescription}
					</Typography>

					<Stack spacing={1}>
						<Stack direction="row" spacing={1} alignItems="center">
							<AccessTimeIcon sx={{ fontSize: 18, color: "#94A3B8" }} />
							<Typography sx={{ color: "#5A6370", fontSize: 14 }}>
								<strong style={{ color: "#1A1D21" }}>
									{course.duration}
								</strong>{" "}
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
								Course Fee
							</Typography>
						</Box>
						<Button
							variant="contained"
							endIcon={<ArrowForwardIcon />}
							onClick={() => onViewDetails(course)}
						>
							View Details
						</Button>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}

function CourseDetailsDialog({
	course,
	open,
	onClose,
	onApply,
}: {
	course: Course | null;
	open: boolean;
	onClose: () => void;
	onApply: () => void;
}) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	if (!course) return null;
	const levelStyle = levelColors[course.level];
	const sessions = course.schedule?.sessions ?? [];
	const scheduleNote = course.schedule?.note ?? "";

	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth="md"
			fullWidth
			fullScreen={fullScreen}
			scroll="paper"
			slotProps={{
				paper: {
					sx: {
						borderRadius: { xs: 0, sm: 3 },
						overflow: "hidden",
						display: "flex",
						flexDirection: "column",
					},
				},
			}}
		>
			<Box
				sx={{
					position: "relative",
					height: { xs: 180, md: 220 },
					overflow: "hidden",
					flexShrink: 0,
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
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.85) 100%)",
					}}
				/>
				<IconButton
					onClick={onClose}
					aria-label="Close"
					sx={{
						position: "absolute",
						top: 12,
						right: 12,
						bgcolor: "rgba(255,255,255,0.95)",
						color: "#1A1D21",
						"&:hover": { bgcolor: "#FFFFFF" },
					}}
				>
					<CloseIcon />
				</IconButton>
				<Box
					sx={{
						position: "absolute",
						bottom: 20,
						left: 24,
						right: 24,
					}}
				>
					<Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
						<Chip
							label={course.level}
							size="small"
							sx={{
								bgcolor: levelStyle.bg,
								color: levelStyle.color,
								fontWeight: 600,
								fontSize: 11,
							}}
						/>
						{course.tag && (
							<Chip
								label={course.tag}
								size="small"
								sx={{
									bgcolor: "rgba(255,255,255,0.2)",
									color: "#FFFFFF",
									fontWeight: 600,
									fontSize: 11,
									backdropFilter: "blur(8px)",
								}}
							/>
						)}
					</Stack>
					<Typography
						variant="h3"
						sx={{
							color: "#FFFFFF",
							fontSize: { xs: 24, md: 32 },
							fontWeight: 700,
							fontFamily: "var(--font-outfit)",
						}}
					>
						{course.title}
					</Typography>
				</Box>
			</Box>

			<DialogContent sx={{ p: { xs: 3, md: 4 }, flex: 1, overflowY: "auto" }}>
				<Stack spacing={3}>
					<Typography
						sx={{
							color: "#5A6370",
							fontSize: 16,
							lineHeight: 1.7,
						}}
					>
						{course.primaryDescription}
						<br />
						{course.secondaryDescription}
						<br />
						<br />
						<span>*individual learning for each student might vary.</span>
						<br />
						<span>*prices based on number of days mentioned</span>
						<br />
						<span>*days may vary according to weather conditions</span>
					</Typography>

					<Grid container spacing={2}>
						<Grid size={{ xs: 12, sm: 4 }}>
							<Stack
								direction="row"
								spacing={1.5}
								alignItems="center"
								sx={{
									p: 2,
									bgcolor: "#F8FAFC",
									borderRadius: 2,
									border: "1px solid #E2E8F0",
								}}
							>
								<AccessTimeIcon sx={{ color: "#0D5C8F" }} />
								<Box>
									<Typography
										sx={{
											fontSize: 11,
											color: "#94A3B8",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											fontWeight: 600,
										}}
									>
										Duration
									</Typography>
									<Typography
										sx={{ fontSize: 15, fontWeight: 600, color: "#1A1D21" }}
									>
										{course.duration}
									</Typography>
								</Box>
							</Stack>
						</Grid>
						<Grid size={{ xs: 12, sm: 4 }}>
							<Stack
								direction="row"
								spacing={1.5}
								alignItems="center"
								sx={{
									p: 2,
									bgcolor: "#F8FAFC",
									borderRadius: 2,
									border: "1px solid #E2E8F0",
								}}
							>
								<LocationOnIcon sx={{ color: "#0D5C8F" }} />
								<Box>
									<Typography
										sx={{
											fontSize: 11,
											color: "#94A3B8",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											fontWeight: 600,
										}}
									>
										Location
									</Typography>
									<Typography
										sx={{ fontSize: 15, fontWeight: 600, color: "#1A1D21" }}
									>
										{course.venue}
									</Typography>
								</Box>
							</Stack>
						</Grid>
						<Grid size={{ xs: 12, sm: 4 }}>
							<Stack
								direction="row"
								spacing={1.5}
								alignItems="center"
								sx={{
									p: 2,
									bgcolor: "rgba(13, 92, 143, 0.06)",
									borderRadius: 2,
									border: "1px solid rgba(13, 92, 143, 0.15)",
								}}
							>
								<Box>
									<Typography
										sx={{
											fontSize: 11,
											color: "#94A3B8",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											fontWeight: 600,
										}}
									>
										Cost
									</Typography>
									<Typography
										sx={{
											fontSize: 18,
											fontWeight: 700,
											color: "#0D5C8F",
											fontFamily: "var(--font-outfit)",
										}}
									>
										{course.cost}
									</Typography>
								</Box>
							</Stack>
						</Grid>
					</Grid>

					<Box>
						<Stack
							direction="row"
							spacing={1}
							alignItems="center"
							sx={{ mb: 1.5 }}
						>
							<EventIcon sx={{ color: "#0D5C8F", fontSize: 22 }} />
							<Typography
								variant="h5"
								sx={{
									color: "#1A1D21",
									fontSize: 18,
									fontWeight: 700,
								}}
							>
								Upcoming Dates
							</Typography>
						</Stack>
						{scheduleNote && (
							<Typography
								sx={{
									color: "#5A6370",
									fontSize: 14,
									mb: sessions.length > 0 ? 1.5 : 0,
									fontStyle: "italic",
								}}
							>
								{scheduleNote}
							</Typography>
						)}
						{sessions.length > 0 && (
							<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
								{sessions.map((session) => (
									<Chip
										key={session}
										label={session}
										sx={{
											bgcolor: "#FFFFFF",
											border: "1px solid #E2E8F0",
											color: "#1A1D21",
											fontWeight: 500,
											fontSize: 13,
										}}
									/>
								))}
							</Stack>
						)}
						{sessions.length === 0 && (
							<Typography sx={{ color: "#5A6370", fontSize: 14 }}>
								Contact us to know more about the upcoming dates.
							</Typography>
						)}
					</Box>

					<Box
						sx={{
							pt: 2,
							borderTop: "1px solid #E2E8F0",
							display: "flex",
							justifyContent: "flex-end",
							gap: 2,
						}}
					>
						<Button
							variant="text"
							onClick={onClose}
							sx={{ color: "#5A6370", textTransform: "none" }}
						>
							Close
						</Button>
						<Button
							variant="contained"
							size="large"
							onClick={onApply}
							sx={{
								px: 4,
								py: 1.25,
								textTransform: "none",
								fontWeight: 600,
							}}
						>
							Apply Now
						</Button>
					</Box>
				</Stack>
			</DialogContent>
		</Dialog>
	);
}

function ApplyCourseDialog({
	course,
	open,
	onClose,
	onBack,
}: {
	course: Course | null;
	open: boolean;
	onClose: () => void;
	onBack: () => void;
}) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const { control, handleSubmit, reset, setError, clearErrors } =
		useForm<ApplicationForm>({
			defaultValues: emptyForm,
		});
	const [submitted, setSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	if (!course) return null;

	const batchOptions = course.schedule?.sessions ?? [];

	const onSubmit: SubmitHandler<ApplicationForm> = async (data) => {
		if (submitting) return;

		const validationErrors = validateApplicationForm(data);
		const invalidKeys = Object.keys(
			validationErrors,
		) as (keyof ApplicationForm)[];
		if (invalidKeys.length > 0) {
			for (const key of invalidKeys) {
				const msg = validationErrors[key];
				if (msg) {
					setError(key, { type: "manual", message: msg });
				}
			}
			return;
		}

		setSubmitting(true);
		setErrorMessage(null);

		try {
			const response = await fetch("/api/apply-course", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					course: {
						title: course.title,
						duration: course.duration,
						venue: course.venue,
						cost: course.cost,
					},
					application: data,
				}),
			});

			const parsed = (await response.json().catch(() => ({}))) as {
				ok?: boolean;
				error?: string;
			};

			if (!response.ok || !parsed.ok) {
				throw new Error(
					parsed.error ?? "Something went wrong. Please try again.",
				);
			}

			setSubmitted(true);
		} catch (error) {
			setErrorMessage(
				error instanceof Error
					? error.message
					: "Something went wrong. Please try again.",
			);
		} finally {
			setSubmitting(false);
		}
	};

	const handleClose = () => {
		reset(emptyForm);
		setSubmitted(false);
		setSubmitting(false);
		setErrorMessage(null);
		onClose();
	};

	const handleBack = () => {
		reset(emptyForm);
		setSubmitted(false);
		setSubmitting(false);
		setErrorMessage(null);
		onBack();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth="md"
			fullWidth
			fullScreen={fullScreen}
			scroll="paper"
			slotProps={{
				paper: {
					sx: {
						borderRadius: { xs: 0, sm: 3 },
						display: "flex",
						flexDirection: "column",
					},
				},
			}}
		>
			<Box
				sx={{
					position: "relative",
					px: { xs: 3, md: 4 },
					pt: { xs: 3, md: 4 },
					pb: 2,
					background:
						"linear-gradient(135deg, rgba(13, 92, 143, 0.06) 0%, rgba(19, 97, 175, 0.06) 100%)",
					borderBottom: "1px solid #E2E8F0",
					flexShrink: 0,
				}}
			>
				<IconButton
					onClick={handleClose}
					aria-label="Close"
					sx={{
						position: "absolute",
						top: 12,
						right: 12,
						color: "#5A6370",
					}}
				>
					<CloseIcon />
				</IconButton>
				<Typography
					sx={{
						fontSize: 12,
						color: "#0D5C8F",
						textTransform: "uppercase",
						letterSpacing: "0.08em",
						fontWeight: 700,
						mb: 0.5,
					}}
				>
					Apply for
				</Typography>
				<Typography
					variant="h4"
					sx={{
						color: "#1A1D21",
						fontSize: { xs: 22, md: 26 },
						fontWeight: 700,
						fontFamily: "var(--font-outfit)",
					}}
				>
					{course.title}
				</Typography>
			</Box>

			<DialogContent sx={{ p: { xs: 3, md: 4 }, flex: 1, overflowY: "auto" }}>
				{submitted ? (
					<Stack
						spacing={2}
						alignItems="center"
						sx={{ py: 4, textAlign: "center" }}
					>
						<Typography variant="h5" sx={{ color: "#0a5b2f", fontWeight: 700 }}>
							Application received!
						</Typography>
						<Typography sx={{ color: "#5A6370", maxWidth: 420 }}>
							Thanks for applying to {course.title}. We&apos;ve received your
							details and will get back to you within 24 hours to confirm the
							next steps.
						</Typography>
						<Button
							variant="contained"
							onClick={handleClose}
							sx={{ mt: 2, textTransform: "none" }}
						>
							Close
						</Button>
					</Stack>
				) : (
					<Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
						<Stack spacing={2.5}>
							<Grid container spacing={2}>
								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="fullName"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Full Name"
												fullWidth
												required
												autoComplete="name"
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("fullName");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={fieldState.error?.message}
											/>
										)}
									/>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="dob"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Date of Birth"
												type="date"
												fullWidth
												required
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("dob");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={fieldState.error?.message}
												slotProps={{ inputLabel: { shrink: true } }}
											/>
										)}
									/>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="email"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Email Address"
												type="email"
												placeholder="you@example.com"
												fullWidth
												required
												autoComplete="email"
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("email");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={fieldState.error?.message}
											/>
										)}
									/>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="phone"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Phone Number"
												placeholder="+91 98765 43210"
												fullWidth
												required
												type="tel"
												autoComplete="tel"
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("phone");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={fieldState.error?.message}
											/>
										)}
									/>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="nationality"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Nationality"
												fullWidth
												required
												autoComplete="country"
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("nationality");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={fieldState.error?.message}
											/>
										)}
									/>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="weight"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Weight (kg)"
												type="number"
												fullWidth
												required
												inputProps={{ min: 25, max: 250, step: "any" }}
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("weight");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={fieldState.error?.message}
											/>
										)}
									/>
								</Grid>

								<Grid size={{ xs: 12 }}>
									<Controller
										name="batch"
										control={control}
										render={({ field, fieldState }) => (
											<FormControl
												fullWidth
												required
												error={Boolean(fieldState.error)}
												variant="outlined"
											>
												<InputLabel id="apply-course-batch-label" shrink>
													Which batch are you applying for?
												</InputLabel>
												<Select
													labelId="apply-course-batch-label"
													id="apply-course-batch"
													label="Which batch are you applying for?"
													value={field.value}
													onChange={(e: SelectChangeEvent<string>) => {
														field.onChange(e.target.value);
														clearErrors("batch");
													}}
													onBlur={field.onBlur}
													name={field.name}
													inputRef={field.ref}
													displayEmpty
													renderValue={(selected) => {
														if (!selected) {
															return (
																<Typography
																	component="span"
																	sx={{ color: "text.secondary" }}
																>
																	Select a batch
																</Typography>
															);
														}
														return selected;
													}}
													MenuProps={{ ...dialogSelectMenuProps }}
												>
													{batchOptions.length === 0 ? (
														<MenuItem value="Flexible / TBD">
															Flexible / TBD
														</MenuItem>
													) : (
														[
															...batchOptions.map((batch) => (
																<MenuItem key={batch} value={batch}>
																	{batch}
																</MenuItem>
															)),
															<MenuItem key="not-sure" value="Not sure yet">
																Not sure yet
															</MenuItem>,
														]
													)}
												</Select>
												{(fieldState.error != null ||
													batchOptions.length === 0) && (
													<FormHelperText error={Boolean(fieldState.error)}>
														{fieldState.error?.message ??
															"Dates TBD — we'll confirm available batches with you"}
													</FormHelperText>
												)}
											</FormControl>
										)}
									/>
								</Grid>

								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="education"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Education"
												placeholder="e.g. B.Tech (CSE), BA, etc."
												fullWidth
												required
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("education");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={fieldState.error?.message}
											/>
										)}
									/>
								</Grid>
								<Grid size={{ xs: 12, sm: 6 }}>
									<Controller
										name="fitnessLevel"
										control={control}
										render={({ field, fieldState }) => (
											<FormControl
												fullWidth
												required
												error={Boolean(fieldState.error)}
												variant="outlined"
											>
												<InputLabel id="apply-course-fitness-label" shrink>
													Fitness Level
												</InputLabel>
												<Select
													labelId="apply-course-fitness-label"
													id="apply-course-fitness"
													label="Fitness Level"
													value={field.value}
													onChange={(e: SelectChangeEvent<string>) => {
														field.onChange(e.target.value);
														clearErrors("fitnessLevel");
													}}
													onBlur={field.onBlur}
													name={field.name}
													inputRef={field.ref}
													displayEmpty
													renderValue={(selected) => {
														if (!selected) {
															return (
																<Typography
																	component="span"
																	sx={{ color: "text.secondary" }}
																>
																	Select fitness level
																</Typography>
															);
														}
														return selected;
													}}
													MenuProps={{ ...dialogSelectMenuProps }}
												>
													{fitnessLevels.map((level) => (
														<MenuItem key={level} value={level}>
															{level}
														</MenuItem>
													))}
												</Select>
												{fieldState.error && (
													<FormHelperText>
														{fieldState.error.message}
													</FormHelperText>
												)}
											</FormControl>
										)}
									/>
								</Grid>

								<Grid size={{ xs: 12 }}>
									<Controller
										name="sportsHistory"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Sports or adventure sports played in the past"
												fullWidth
												required
												multiline
												rows={2}
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("sportsHistory");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={
													fieldState.error?.message ??
													'Use at least 5 characters; use "None" if applicable.'
												}
											/>
										)}
									/>
								</Grid>
								<Grid size={{ xs: 12 }}>
									<Controller
										name="coordinationActivities"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Activities that include coordination (Dance, Yoga, Pilates, etc.)"
												fullWidth
												required
												multiline
												rows={2}
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("coordinationActivities");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={
													fieldState.error?.message ??
													'Use at least 5 characters; use "None" if not applicable.'
												}
											/>
										)}
									/>
								</Grid>

								<Grid size={{ xs: 12 }}>
									<Controller
										name="fearHandling"
										control={control}
										render={({ field, fieldState }) => (
											<FormControl
												fullWidth
												required
												error={Boolean(fieldState.error)}
												variant="outlined"
											>
												<InputLabel id="apply-course-fear-label" shrink>
													How well do you think you handle fear?
												</InputLabel>
												<Select
													labelId="apply-course-fear-label"
													id="apply-course-fear"
													label="How well do you think you handle fear?"
													value={field.value}
													onChange={(e: SelectChangeEvent<string>) => {
														field.onChange(e.target.value);
														clearErrors("fearHandling");
													}}
													onBlur={field.onBlur}
													name={field.name}
													inputRef={field.ref}
													displayEmpty
													renderValue={(selected) => {
														if (!selected) {
															return (
																<Typography
																	component="span"
																	sx={{ color: "text.secondary" }}
																>
																	Select an option
																</Typography>
															);
														}
														return selected;
													}}
													MenuProps={{ ...dialogSelectMenuProps }}
												>
													{fearHandlingOptions.map((option) => (
														<MenuItem key={option} value={option}>
															{option}
														</MenuItem>
													))}
												</Select>
												{fieldState.error && (
													<FormHelperText>
														{fieldState.error.message}
													</FormHelperText>
												)}
											</FormControl>
										)}
									/>
								</Grid>

								<Grid size={{ xs: 12 }}>
									<Controller
										name="motivation"
										control={control}
										render={({ field, fieldState }) => (
											<TextField
												label="Motivation for getting into paragliding"
												fullWidth
												multiline
												rows={3}
												required
												value={field.value}
												onChange={(e) => {
													field.onChange(e);
													clearErrors("motivation");
												}}
												onBlur={field.onBlur}
												name={field.name}
												inputRef={field.ref}
												error={Boolean(fieldState.error)}
												helperText={
													fieldState.error?.message ??
													"Please write at least 15 characters."
												}
											/>
										)}
									/>
								</Grid>
							</Grid>

							{errorMessage && (
								<Alert severity="error" onClose={() => setErrorMessage(null)}>
									{errorMessage}
								</Alert>
							)}

							<Box
								sx={{
									pt: 2,
									borderTop: "1px solid #E2E8F0",
									display: "flex",
									flexDirection: { xs: "column", sm: "row" },
									justifyContent: "space-between",
									alignItems: { xs: "stretch", sm: "center" },
									gap: 2,
								}}
							>
								<Button
									variant="text"
									onClick={handleBack}
									disabled={submitting}
									sx={{ color: "#5A6370", textTransform: "none" }}
								>
									← Back to course details
								</Button>
								<Button
									type="submit"
									variant="contained"
									size="large"
									disabled={submitting}
									endIcon={
										submitting ? (
											<CircularProgress size={18} sx={{ color: "inherit" }} />
										) : (
											<SendIcon />
										)
									}
									sx={{
										px: 4,
										py: 1.25,
										textTransform: "none",
										fontWeight: 600,
									}}
								>
									{submitting ? "Submitting…" : "Submit Application"}
								</Button>
							</Box>
						</Stack>
					</Box>
				)}
			</DialogContent>
		</Dialog>
	);
}

export default function CoursesSection() {
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
	const [detailsOpen, setDetailsOpen] = useState(false);
	const [applyOpen, setApplyOpen] = useState(false);

	const handleViewDetails = (course: Course) => {
		setSelectedCourse(course);
		setDetailsOpen(true);
	};

	const handleApply = () => {
		setDetailsOpen(false);
		setApplyOpen(true);
	};

	const handleBackToDetails = () => {
		setApplyOpen(false);
		setDetailsOpen(true);
	};

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
					{/* <Button
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
					</Button> */}
				</Stack>

				<Grid container spacing={3}>
					{coursesContent.items.map((course) => (
						<Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.title}>
							<CourseCard
								course={course as Course}
								onViewDetails={handleViewDetails}
							/>
						</Grid>
					))}
				</Grid>
			</Stack>

			<CourseDetailsDialog
				course={selectedCourse}
				open={detailsOpen}
				onClose={() => setDetailsOpen(false)}
				onApply={handleApply}
			/>
			<ApplyCourseDialog
				course={selectedCourse}
				open={applyOpen}
				onClose={() => setApplyOpen(false)}
				onBack={handleBackToDetails}
			/>
		</Box>
	);
}
