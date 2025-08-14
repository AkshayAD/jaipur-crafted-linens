"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollProgress() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

	return (
		<motion.div
			ref={containerRef}
			style={{ opacity }}
			className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-primary via-accent to-secondary origin-left"
		>
			<motion.div
				style={{ width }}
				className="h-full bg-gradient-to-r from-primary to-accent"
			/>
		</motion.div>
	);
}
