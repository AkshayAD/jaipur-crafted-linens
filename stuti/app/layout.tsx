import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Stuti – The Art of Rest",
	description: "Accessible luxury bedsheets and linens crafted for comfort, tranquility, and refined taste.",
	metadataBase: new URL("https://stuti.local"),
	openGraph: {
		title: "Stuti – The Art of Rest",
		description:
			"Accessible luxury bedsheets and linens crafted for comfort, tranquility, and refined taste.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${lora.variable} ${montserrat.variable}`}>
			<body className="font-sans antialiased bg-background text-foreground">
				<a href="#main" className="a11y-skip-link">Skip to content</a>
				<Header />
				<main id="main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
