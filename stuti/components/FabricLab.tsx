"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function FabricLab() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [x, setX] = useState(50); // percentage

	function onMove(e: React.MouseEvent<HTMLDivElement>) {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return;
		const pct = ((e.clientX - rect.left) / rect.width) * 100;
		setX(Math.min(100, Math.max(0, pct)));
	}

	return (
		<section className="container mt-16">
			<h2 className="h-serif text-2xl md:text-3xl">Fabric Lab</h2>
			<p className="text-sm text-foreground/70 mt-2">Slide to compare percale coolness with linen texture.</p>
			<div ref={containerRef} onMouseMove={onMove} className="relative mt-5 h-72 rounded-2xl overflow-hidden soft-shadow cursor-ew-resize">
				<Image src="/images/images.jpeg" alt="Percale" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
				<div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}>
					<Image src="/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg" alt="Linen" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
				</div>
				<div className="absolute inset-y-0" style={{ left: `${x}%` }}>
					<div className="w-0.5 h-full bg-white/80" />
					<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 border border-foreground/20" />
				</div>
			</div>
		</section>
	);
}


