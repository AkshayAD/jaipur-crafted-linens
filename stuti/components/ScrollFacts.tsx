"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FACTS = [
	{
		title: "Hand-finished hems",
		desc: "Every set is inspected and finished by hand for longevity.",
	},
	{
		title: "Breathable by design",
		desc: "Percale weave promotes airflow for cooler sleep.",
	},
	{
		title: "Honest pricing",
		desc: "Direct-to-you model keeps quality high and markups low.",
	},
];

export default function ScrollFacts() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) setVisible(true);
				}
			},
			{ threshold: 0.2 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<section ref={ref} className="container mt-16">
			<motion.h2
				className="h-serif text-2xl md:text-3xl"
				initial={{ opacity: 0, y: 8 }}
				animate={visible ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				Did you know?
			</motion.h2>
			<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
				{FACTS.map((f, i) => (
					<motion.div
						key={i}
						className="rounded-lg border border-foreground/10 bg-secondary/10 p-5"
						initial={{ opacity: 0, y: 12 }}
						animate={visible ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.4, delay: i * 0.08 }}
					>
						<div className="h-serif text-lg">{f.title}</div>
						<p className="mt-2 text-sm text-foreground/75">{f.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}


