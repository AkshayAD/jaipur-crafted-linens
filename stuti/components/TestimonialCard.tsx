"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Testimonial {
	quote: string;
	author: string;
	role?: string;
	avatar?: string;
	rating?: number;
}

interface TestimonialCardProps {
	testimonial: Testimonial;
	index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, i) => (
			<svg
				key={i}
				className={`w-4 h-4 ${i < rating ? "text-gold fill-current" : "text-foreground/20"}`}
				viewBox="0 0 20 20"
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
			</svg>
		));
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative p-6 bg-background border border-foreground/10 rounded-xl hover:border-foreground/20 transition-all duration-300 group"
		>
			{/* Quote icon */}
			<motion.div
				className="absolute -top-3 left-6 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
			>
				<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
					<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
				</svg>
			</motion.div>

			{/* Rating */}
			{testimonial.rating && (
				<div className="flex items-center gap-1 mb-4">
					{renderStars(testimonial.rating)}
				</div>
			)}

			{/* Quote */}
			<blockquote className="text-foreground/80 leading-relaxed mb-4 italic">
				"{testimonial.quote}"
			</blockquote>

			{/* Author */}
			<div className="flex items-center gap-3">
				{testimonial.avatar && (
					<div className="w-10 h-10 rounded-full overflow-hidden">
						<img
							src={testimonial.avatar}
							alt={testimonial.author}
							className="w-full h-full object-cover"
						/>
					</div>
				)}
				<div>
					<div className="font-medium text-foreground">{testimonial.author}</div>
					{testimonial.role && (
						<div className="text-sm text-foreground/60">{testimonial.role}</div>
					)}
				</div>
			</div>

			{/* Hover effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				initial={false}
				animate={{ opacity: isHovered ? 1 : 0 }}
			/>
		</motion.div>
	);
}
