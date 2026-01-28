import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1361AF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#3D3D3F",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2A2A2A",
      secondary: "#616161",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Arial, sans-serif",
    h1: {
      fontFamily: "var(--font-poppins), Arial, sans-serif",
      fontWeight: 500,
      fontSize: "clamp(32px, 4vw, 48px)",
      lineHeight: 1.4,
      letterSpacing: "-0.48px",
    },
    h2: {
      fontFamily: "var(--font-poppins), Arial, sans-serif",
      fontWeight: 500,
      fontSize: "clamp(28px, 3.2vw, 40px)",
      lineHeight: 1.4,
      letterSpacing: "-0.4px",
    },
    h3: {
      fontFamily: "var(--font-poppins), Arial, sans-serif",
      fontWeight: 500,
      fontSize: "clamp(24px, 2.6vw, 32px)",
      lineHeight: 1.3,
      letterSpacing: "-0.32px",
    },
    h4: {
      fontFamily: "var(--font-poppins), Arial, sans-serif",
      fontWeight: 600,
      fontSize: "clamp(20px, 2.2vw, 24px)",
      lineHeight: 1.3,
      letterSpacing: "-0.24px",
    },
    h5: {
      fontFamily: "var(--font-inter), Arial, sans-serif",
      fontWeight: 600,
      fontSize: "clamp(18px, 2vw, 20px)",
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: "var(--font-inter), Arial, sans-serif",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.3,
    },
    body2: {
      fontSize: "14px",
      lineHeight: 1.3,
    },
    caption: {
      fontSize: "12px",
      lineHeight: 1.3,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 24,
          fontSize: 12,
          fontWeight: 500,
          borderRadius: 999,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
          "&:before": {
            display: "none",
          },
        },
      },
    },
  },
});

export default theme;
