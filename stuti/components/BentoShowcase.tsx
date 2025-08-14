"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BentoShowcase() {
	const items = [
		{ title: "Percale Cool", img: "/images/images.jpeg", desc: "Crisp, breathable, made for summer nights" },
		{ title: "Linen Texture", img: "/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg", desc: "Natural slub, easy elegance" },
		{ title: "Honest Craft", img: "/images/91RYk3muZlL.jpg", desc: "Thoughtful details, lasting quality" },
	];

	return (
		<section className="container mt-16">
			<h2 className="h-serif text-2xl md:text-3xl">The Edit</h2>
			<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
				{items.map((it, i) => (
					<motion.div
						key={it.title}
						className="relative overflow-hidden rounded-2xl soft-shadow"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-20%" }}
						transition={{ duration: 0.5, delay: i * 0.06 }}
					>
						<div className="relative h-64">
							<Image src={it.img} alt={it.title} fill className="object-cover" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						</div>
						<div className="absolute bottom-4 left-4 text-white drop-shadow">
							<div className="h-serif text-xl">{it.title}</div>
							<p className="text-sm text-white/95">{it.desc}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}


