"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

interface StickyNavProps {
	sections: Array<{
		id: string;
		label: string;
		href: string;
	}>;
}

export default function StickyNav({ sections }: StickyNavProps) {
	const [activeSection, setActiveSection] = useState<string>("");
	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section.id);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section.id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [sections]);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<motion.nav
			style={{ opacity, y }}
			className="fixed top-20 left-1/2 -translate-x-1/2 z-30 hidden lg:block"
		>
			<div className="flex items-center gap-1 bg-background/80 backdrop-blur-md border border-foreground/10 rounded-full px-4 py-2 shadow-lg">
				{sections.map((section) => (
					<button
						key={section.id}
						onClick={() => scrollToSection(section.href)}
						className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
							activeSection === section.id
								? "text-primary bg-primary/10"
								: "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
						}`}
					>
						{section.label}
						{activeSection === section.id && (
							<motion.div
								layoutId="activeSection"
								className="absolute inset-0 bg-primary/10 rounded-full"
								initial={false}
								transition={{ type: "spring", stiffness: 500, damping: 30 }}
							/>
						)}
					</button>
				))}
			</div>
		</motion.nav>
	);
}
