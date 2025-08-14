"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ShimmerButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
}

export default function ShimmerButton({ 
	children, 
	onClick, 
	className = "", 
	variant = "primary",
	size = "md"
}: ShimmerButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden";
	
	const sizeClasses = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-sm",
		lg: "px-8 py-4 text-base"
	};

	const variantClasses = {
		primary: "bg-primary text-white hover:shadow-lg hover:shadow-primary/25",
		secondary: "bg-secondary text-foreground hover:shadow-lg hover:shadow-secondary/25",
		outline: "border border-foreground/20 text-foreground hover:bg-foreground/5"
	};

	return (
		<motion.button
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
		>
			{/* Shimmer effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
				initial={{ x: "-100%" }}
				animate={{ x: isHovered ? "100%" : "-100%" }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
			/>
			
			{/* Content */}
			<span className="relative z-10">{children}</span>
			
			{/* Ripple effect */}
			<motion.div
				className="absolute inset-0 rounded-full bg-white/20"
				initial={{ scale: 0, opacity: 0 }}
				animate={{ 
					scale: isHovered ? 1 : 0, 
					opacity: isHovered ? 1 : 0 
				}}
				transition={{ duration: 0.3 }}
			/>
		</motion.button>
	);
}
