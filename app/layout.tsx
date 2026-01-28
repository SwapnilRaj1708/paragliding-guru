import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-dm-sans",
});

const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});

export const metadata: Metadata = {
	title: "PG Gurukul | India's Premier Paragliding School",
	description:
		"Learn to fly with India's most trusted paragliding school. BHPA-certified instruction, stunning Himalayan locations, and courses for all skill levels.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
			<body>
				<AppRouterCacheProvider>
					<Providers>{children}</Providers>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
