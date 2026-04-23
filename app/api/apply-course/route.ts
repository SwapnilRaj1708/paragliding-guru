import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CoursePayload = {
	title?: string;
	duration?: string;
	venue?: string;
	cost?: string;
};

type ApplicationPayload = {
	fullName?: string;
	dob?: string;
	email?: string;
	phone?: string;
	nationality?: string;
	weight?: string;
	batch?: string;
	education?: string;
	fitnessLevel?: string;
	sportsHistory?: string;
	coordinationActivities?: string;
	fearHandling?: string;
	motivation?: string;
};

type RequestBody = {
	course?: CoursePayload;
	application?: ApplicationPayload;
};

const MAX_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown, maxLength = MAX_LENGTH): string {
	if (typeof value !== "string") return "";
	return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
	const display = value || "—";
	return `
		<tr>
			<td style="padding: 8px 12px; font-weight: 600; background: #F8FAFC; width: 220px; vertical-align: top;">${escapeHtml(label)}</td>
			<td style="padding: 8px 12px; vertical-align: top; white-space: pre-wrap;">${escapeHtml(display)}</td>
		</tr>
	`;
}

export async function POST(request: Request) {
	let body: RequestBody;
	try {
		body = (await request.json()) as RequestBody;
	} catch {
		return NextResponse.json(
			{ ok: false, error: "Invalid JSON payload" },
			{ status: 400 },
		);
	}

	const course = {
		title: sanitize(body.course?.title, 200),
		duration: sanitize(body.course?.duration, 100),
		venue: sanitize(body.course?.venue, 200),
		cost: sanitize(body.course?.cost, 100),
	};

	const app = {
		fullName: sanitize(body.application?.fullName, 200),
		dob: sanitize(body.application?.dob, 50),
		email: sanitize(body.application?.email, 200),
		phone: sanitize(body.application?.phone, 50),
		nationality: sanitize(body.application?.nationality, 100),
		weight: sanitize(body.application?.weight, 20),
		batch: sanitize(body.application?.batch, 200),
		education: sanitize(body.application?.education, 300),
		fitnessLevel: sanitize(body.application?.fitnessLevel, 100),
		sportsHistory: sanitize(body.application?.sportsHistory),
		coordinationActivities: sanitize(body.application?.coordinationActivities),
		fearHandling: sanitize(body.application?.fearHandling, 300),
		motivation: sanitize(body.application?.motivation),
	};

	if (!course.title) {
		return NextResponse.json(
			{ ok: false, error: "Course details are missing." },
			{ status: 400 },
		);
	}

	if (
		!app.fullName ||
		!app.dob ||
		!app.email ||
		!app.phone ||
		!app.nationality ||
		!app.weight ||
		!app.batch ||
		!app.education ||
		!app.fitnessLevel ||
		!app.fearHandling ||
		!app.motivation
	) {
		return NextResponse.json(
			{ ok: false, error: "Please fill in all required fields." },
			{ status: 400 },
		);
	}

	if (!EMAIL_REGEX.test(app.email)) {
		return NextResponse.json(
			{ ok: false, error: "Please provide a valid email address." },
			{ status: 400 },
		);
	}

	const subject = `Course Application — ${course.title} — ${app.fullName}`;

	const textLines = [
		`Course: ${course.title}`,
		`Duration: ${course.duration || "—"}`,
		`Venue: ${course.venue || "—"}`,
		`Cost: ${course.cost || "—"}`,
		"",
		"— Applicant Details —",
		`Full Name: ${app.fullName}`,
		`Date of Birth: ${app.dob}`,
		`Email: ${app.email}`,
		`Phone: ${app.phone}`,
		`Nationality: ${app.nationality}`,
		`Weight (kg): ${app.weight}`,
		`Batch Applying For: ${app.batch}`,
		`Education: ${app.education}`,
		`Fitness Level: ${app.fitnessLevel}`,
		"",
		"Sports / Adventure Sports History:",
		app.sportsHistory || "—",
		"",
		"Coordination Activities (Dance / Yoga / Pilates / etc.):",
		app.coordinationActivities || "—",
		"",
		"How They Handle Fear:",
		app.fearHandling,
		"",
		"Motivation for Paragliding:",
		app.motivation,
	];
	const text = textLines.join("\n");

	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 640px;">
			<h2 style="color: #0D5C8F; margin-bottom: 8px;">New course application</h2>
			<p style="color: #5A6370; margin-top: 0;">Submitted via the PG Gurukul website course application form.</p>

			<h3 style="color: #1A1D21; margin-top: 24px; margin-bottom: 8px;">Course</h3>
			<table style="border-collapse: collapse; width: 100%;">
				${row("Course", course.title)}
				${row("Duration", course.duration)}
				${row("Venue", course.venue)}
				${row("Cost", course.cost)}
			</table>

			<h3 style="color: #1A1D21; margin-top: 24px; margin-bottom: 8px;">Applicant</h3>
			<table style="border-collapse: collapse; width: 100%;">
				${row("Full Name", app.fullName)}
				${row("Date of Birth", app.dob)}
				${row("Email", app.email)}
				${row("Phone", app.phone)}
				${row("Nationality", app.nationality)}
				${row("Weight (kg)", app.weight)}
				${row("Batch Applying For", app.batch)}
				${row("Education", app.education)}
				${row("Fitness Level", app.fitnessLevel)}
			</table>

			<h3 style="color: #1A1D21; margin-top: 24px; margin-bottom: 8px;">Responses</h3>
			<table style="border-collapse: collapse; width: 100%;">
				${row("Sports / Adventure Sports History", app.sportsHistory)}
				${row("Coordination Activities", app.coordinationActivities)}
				${row("How They Handle Fear", app.fearHandling)}
				${row("Motivation for Paragliding", app.motivation)}
			</table>
		</div>
	`;

	try {
		await sendMail({ subject, text, html, replyTo: app.email });
		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("[api/apply-course] Failed to send email:", error);
		const configError =
			error instanceof Error && error.message.startsWith("Missing required");
		return NextResponse.json(
			{
				ok: false,
				error: configError
					? "Email service is not configured. Please contact the administrator."
					: "Failed to submit your application. Please try again later.",
			},
			{ status: 500 },
		);
	}
}
