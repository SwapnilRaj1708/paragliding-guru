import { createTheme } from "@mui/material/styles";

// Adventure-inspired color palette
const theme = createTheme({
	palette: {
		primary: {
			main: "#1361AF", // Deep sky blue - represents the sky
			light: "#1A8FD1",
			dark: "#094066",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#E85D04", // Warm sunset orange - adventure energy
			light: "#FF7B29",
			dark: "#BC4B03",
			contrastText: "#FFFFFF",
		},
		background: {
			default: "#FAFBFC",
			paper: "#FFFFFF",
		},
		text: {
			primary: "#1A1D21",
			secondary: "#5A6370",
		},
		success: {
			main: "#059669",
			light: "#10B981",
			dark: "#047857",
		},
		warning: {
			main: "#F59E0B",
			light: "#FBBF24",
			dark: "#D97706",
		},
		grey: {
			50: "#F8FAFC",
			100: "#F1F5F9",
			200: "#E2E8F0",
			300: "#CBD5E1",
			400: "#94A3B8",
			500: "#64748B",
			600: "#475569",
			700: "#334155",
			800: "#1E293B",
			900: "#0F172A",
		},
	},
	typography: {
		fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
		h1: {
			fontFamily: "var(--font-outfit), system-ui, sans-serif",
			fontWeight: 700,
			fontSize: "clamp(2.5rem, 5vw, 4rem)",
			lineHeight: 1.1,
			letterSpacing: "-0.02em",
		},
		h2: {
			fontFamily: "var(--font-outfit), system-ui, sans-serif",
			fontWeight: 600,
			fontSize: "clamp(2rem, 4vw, 3rem)",
			lineHeight: 1.2,
			letterSpacing: "-0.01em",
		},
		h3: {
			fontFamily: "var(--font-outfit), system-ui, sans-serif",
			fontWeight: 600,
			fontSize: "clamp(1.5rem, 3vw, 2rem)",
			lineHeight: 1.3,
			letterSpacing: "-0.01em",
		},
		h4: {
			fontFamily: "var(--font-outfit), system-ui, sans-serif",
			fontWeight: 600,
			fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
			lineHeight: 1.3,
		},
		h5: {
			fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
			fontWeight: 600,
			fontSize: "1.125rem",
			lineHeight: 1.4,
		},
		h6: {
			fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
			fontWeight: 600,
			fontSize: "1rem",
			lineHeight: 1.4,
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.7,
			letterSpacing: "0.01em",
		},
		body2: {
			fontSize: "0.875rem",
			lineHeight: 1.6,
			letterSpacing: "0.01em",
		},
		caption: {
			fontSize: "0.75rem",
			lineHeight: 1.5,
			letterSpacing: "0.02em",
		},
		button: {
			fontWeight: 600,
			letterSpacing: "0.02em",
		},
	},
	shape: {
		borderRadius: 12,
	},
	shadows: [
		"none",
		"0 1px 2px 0 rgb(0 0 0 / 0.05)",
		"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
		"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
		"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"0 25px 50px -12px rgb(0 0 0 / 0.25)",
	],
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: 10,
					fontWeight: 600,
					padding: "10px 24px",
					transition: "all 0.2s ease-in-out",
				},
				contained: {
					boxShadow: "0 4px 14px 0 rgb(0 0 0 / 0.1)",
					"&:hover": {
						boxShadow: "0 6px 20px 0 rgb(0 0 0 / 0.15)",
						transform: "translateY(-1px)",
					},
				},
				outlined: {
					borderWidth: 2,
					"&:hover": {
						borderWidth: 2,
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 16,
					boxShadow: "0 4px 20px 0 rgb(0 0 0 / 0.08)",
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					height: 28,
					fontSize: 12,
					fontWeight: 600,
					borderRadius: 8,
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					borderRadius: "12px !important",
					border: "1px solid #E2E8F0",
					"&:before": {
						display: "none",
					},
					"&.Mui-expanded": {
						margin: 0,
					},
				},
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					minHeight: 64,
					"&.Mui-expanded": {
						minHeight: 64,
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-root": {
						borderRadius: 10,
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "#0D5C8F",
						},
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
				},
			},
		},
	},
});

export default theme;
