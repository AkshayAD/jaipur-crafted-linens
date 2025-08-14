"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface ProductCardProps {
	href: string;
	image: string;
	title: string;
	description: string;
	price?: string;
	badge?: string;
}

export default function ProductCard({ href, image, title, description, price, badge }: ProductCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = (y - centerY) / 10;
		const rotateY = (centerX - x) / 10;

		cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
	};

	const handleMouseLeave = () => {
		if (cardRef.current) {
			cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
		}
		setIsHovered(false);
	};

	return (
		<motion.div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			className="group relative overflow-hidden rounded-xl bg-background border border-foreground/10 hover:border-foreground/20 transition-all duration-300 will-change-transform"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			{badge && (
				<div className="absolute top-3 left-3 z-10">
					<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-white">
						{badge}
					</span>
				</div>
			)}
			<div className="relative aspect-[4/5] overflow-hidden">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 768px) 50vw, 25vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			<div className="p-4">
				<h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
					{title}
				</h3>
				<p className="mt-1 text-sm text-foreground/70 line-clamp-2">
					{description}
				</p>
				{price && (
					<div className="mt-2 flex items-center justify-between">
						<span className="text-lg font-semibold text-foreground">{price}</span>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: isHovered ? 1 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<Link
								href={href}
								className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
							>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</motion.div>
					</div>
				)}
			</div>
		</motion.div>
	);
}
