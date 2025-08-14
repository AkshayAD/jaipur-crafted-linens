"use client";

import { useRef } from "react";

export default function Magnetic({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement | null>(null);
	function onMove(e: React.MouseEvent<HTMLDivElement>) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const dx = e.clientX - (r.left + r.width / 2);
		const dy = e.clientY - (r.top + r.height / 2);
		el.style.transform = `translate(${dx * 0.06}px, ${dy * 0.06}px)`;
	}
	function onLeave() {
		const el = ref.current;
		if (el) el.style.transform = `translate(0, 0)`;
	}
	return (
		<div onMouseMove={onMove} onMouseLeave={onLeave} className="will-change-transform inline-block">
			<div ref={ref} className="transition-transform duration-200 ease-out">{children}</div>
		</div>
	);
}


