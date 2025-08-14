"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="relative h-[86vh] w-full overflow-hidden rounded-none">
			<div className="absolute inset-0">
				<Image
					src="/images/91RYk3muZlL.jpg"
					alt="Serene bed with soft natural light"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-transparent" />
				<motion.div
					className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.85, scale: 1 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
			/>
			<motion.div
				className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 0.75, scale: 1 }}
				transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
			/>
		</div>
		<div className="relative container h-full flex flex-col items-start justify-end pb-16">
			<motion.h1
				className="h-serif text-4xl md:text-6xl text-white max-w-3xl leading-tight drop-shadow-xl"
				initial={{ y: 16, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Stuti. Where comfort finds a home.
			</motion.h1>
			<motion.p
				className="mt-4 text-white/95 max-w-xl drop-shadow"
				initial={{ y: 16, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
			>
				Accessible luxury linens crafted in premium percale cotton and linen, designed to bring calm to modern living.
			</motion.p>
			<motion.div
				className="mt-6 flex gap-3"
				initial={{ y: 16, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
			>
				<Link href="/collections" className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm tracking-wide hover:opacity-95 soft-shadow gradient-border">Explore Collections</Link>
				<Link href="/lookbook" className="inline-flex items-center justify-center rounded-full glass text-white px-6 py-3 text-sm tracking-wide hover:bg-white/10">View Lookbook</Link>
			</motion.div>
		</div>
	</section>
	);
}


