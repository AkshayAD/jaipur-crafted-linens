"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StoryScroller() {
	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
	const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

	const steps = [
		{ title: "Origins", text: "Percale from pargālah and linen from flax—materials with centuries of sleep wisdom." },
		{ title: "The Weave", text: "Percale’s one-over-one for cool crispness; linen’s long fibers for durable breathability." },
		{ title: "The Finish", text: "Pre-washed for softness. Details cut and checked by hand for longevity." },
	];

	return (
		<section className="container mt-20">
			<div className="grid md:grid-cols-2 gap-8 items-start" ref={ref}>
				<motion.div style={{ y }} className="sticky top-24">
					<h2 className="h-serif text-3xl">The Craft, Unrushed</h2>
					<p className="mt-3 text-foreground/70 max-w-md">A short walk through the making of breathable, beautiful linens that age with you.</p>
				</motion.div>
				<div className="space-y-12">
					{steps.map((s, i) => (
						<motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 0.5, delay: i * 0.05 }}>
							<div className="h-serif text-xl">{s.title}</div>
							<p className="text-foreground/80 max-w-prose mt-2">{s.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}


