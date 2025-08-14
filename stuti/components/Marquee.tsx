"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		let offset = 0;
		let raf = 0;
		const step = () => {
			offset -= 0.5;
			el.style.transform = `translateX(${offset}px)`;
			if (Math.abs(offset) > el.scrollWidth / 2) offset = 0;
			raf = requestAnimationFrame(step);
		};
		run();
		function run(){ cancelAnimationFrame(raf); raf = requestAnimationFrame(step); }
		return () => cancelAnimationFrame(raf);
	}, []);

	return (
		<div className="mt-12 overflow-hidden border-y border-foreground/10 py-4">
			<div className="whitespace-nowrap will-change-transform" ref={ref} aria-hidden>
				<span className="mx-6 text-sm tracking-widest text-foreground/70">SOFT. BREATHABLE. HONESTLY PRICED.</span>
				<span className="mx-6 text-sm tracking-widest text-foreground/70">LINEN • PERCALE • SATEEN</span>
				<span className="mx-6 text-sm tracking-widest text-foreground/70">STUTI – THE ART OF REST</span>
				<span className="mx-6 text-sm tracking-widest text-foreground/70">SOFT. BREATHABLE. HONESTLY PRICED.</span>
				<span className="mx-6 text-sm tracking-widest text-foreground/70">LINEN • PERCALE • SATEEN</span>
				<span className="mx-6 text-sm tracking-widest text-foreground/70">STUTI – THE ART OF REST</span>
			</div>
		</div>
	);
}


