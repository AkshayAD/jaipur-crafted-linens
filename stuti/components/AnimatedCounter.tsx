"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
	value: number;
	suffix?: string;
	prefix?: string;
	duration?: number;
	className?: string;
}

export default function AnimatedCounter({ 
	value, 
	suffix = "", 
	prefix = "", 
	duration = 2,
	className = ""
}: AnimatedCounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!isInView) return;

		let startTime: number;
		let animationFrame: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
			
			// Easing function for smooth animation
			const easeOutQuart = 1 - Math.pow(1 - progress, 4);
			const currentCount = Math.floor(easeOutQuart * value);
			
			setCount(currentCount);

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [isInView, value, duration]);

	return (
		<motion.span
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className={className}
		>
			{prefix}{count}{suffix}
		</motion.span>
	);
}
