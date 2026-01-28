"use client";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

type ProvidersProps = {
	children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
