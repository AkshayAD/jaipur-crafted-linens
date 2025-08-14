"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const InstagramIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
	</svg>
);

const WhatsAppIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M20.52 3.49A11.78 11.78 0 0 0 12 .74 11.79 11.79 0 0 0 .23 12.61 11.67 11.67 0 0 0 2.8 19.1L2 24l4.98-1.72a11.83 11.83 0 0 0 5.02 1.1h.01A11.8 11.8 0 0 0 24 11.57a11.64 11.64 0 0 0-3.48-8.08Z" stroke="currentColor" strokeWidth="1.2"/>
		<path d="M7.9 9.87c.16-.36.35-.37.57-.38.15 0 .32 0 .49.01.16 0 .38-.06.6.46.22.52.76 1.8.83 1.94.07.15.12.32 0 .52-.11.2-.17.33-.34.51-.17.18-.36.4-.52.54-.17.15-.34.31-.15.61.19.31.85 1.4 1.83 2.27 1.26 1.09 2.32 1.43 2.65 1.59.33.16.52.14.72-.08.2-.22.83-.96 1.05-1.29.22-.33.44-.27.74-.16.3.11 1.9.89 2.22 1.05.33.16.55.24.63.36.08.12.08.68-.16 1.33-.24.65-1.4 1.28-1.94 1.34-.54.06-1.03.29-3.52-.73-2.48-1.02-4.08-3.54-4.2-3.71-.12-.17-1-1.32-1-2.52 0-1.2.38-1.79.54-2.07Z" fill="currentColor"/>
	</svg>
);

function classNames(...classes: Array<string | false | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const [showShadow, setShowShadow] = useState(false);

	useEffect(() => {
		const onScroll = () => setShowShadow(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={classNames(
			"sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/65",
			showShadow && "shadow-sm"
		)}>
			<div className="container flex items-center justify-between py-3">
				<Link href="/" className="flex items-center gap-2" aria-label="Stuti home">
					<Image src="/stuti-logo.svg" alt="Stuti" width={96} height={32} priority />
				</Link>
				<nav className="hidden md:flex items-center gap-8 text-sm">
					<Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
					<Link href="/our-story" className="hover:text-primary transition-colors">Our Story</Link>
					<Link href="/lookbook" className="hover:text-primary transition-colors">Lookbook</Link>
				</nav>
				<div className="flex items-center gap-4">
					<Link
						href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9657546747"}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-foreground/15 hover:bg-primary hover:text-white transition-colors"
						aria-label="Order on WhatsApp"
					>
						<WhatsAppIcon /> <span className="hidden sm:inline">WhatsApp</span>
					</Link>
					<Link
						href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/chachad_divyanka/"}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-foreground/15 hover:bg-foreground hover:text-background transition-colors"
						aria-label="Instagram"
					>
						<InstagramIcon /> <span className="hidden sm:inline">Instagram</span>
					</Link>
				</div>
			</div>
		</header>
	);
}