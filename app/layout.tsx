import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Paragliding Guru",
	description:
		"India’s trusted paragliding school for safe, certified training in Bir.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${poppins.variable}`}>
			<body>
				<AppRouterCacheProvider>
					<Providers>{children}</Providers>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
