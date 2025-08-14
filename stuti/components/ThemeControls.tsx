"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "sepia";

export default function ThemeControls() {
	const [theme, setTheme] = useState<Theme>((() => (typeof window !== "undefined" && (localStorage.getItem("theme") as Theme)) || "light")());
	const [contrast, setContrast] = useState<boolean>(() => (typeof window !== "undefined" && localStorage.getItem("contrast") === "high") || false);
	const [reducedMotion, setReducedMotion] = useState<boolean>(() => (typeof window !== "undefined" && localStorage.getItem("motion") === "reduced") || false);

	useEffect(() => {
		if (typeof document === "undefined") return;
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		if (typeof document === "undefined") return;
		document.documentElement.setAttribute("data-contrast", contrast ? "high" : "normal");
		localStorage.setItem("contrast", contrast ? "high" : "normal");
	}, [contrast]);

	useEffect(() => {
		if (typeof document === "undefined") return;
		document.documentElement.setAttribute("data-motion", reducedMotion ? "reduced" : "normal");
		localStorage.setItem("motion", reducedMotion ? "reduced" : "normal");
	}, [reducedMotion]);

	return (
		<div className="hidden md:flex items-center gap-2 text-xs">
			<select
				aria-label="Theme"
				className="rounded-full border border-foreground/15 px-2 py-1 bg-background/70"
				value={theme}
				onChange={(e) => setTheme(e.target.value as Theme)}
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="sepia">Sepia</option>
			</select>
			<label className="inline-flex items-center gap-1">
				<input type="checkbox" checked={contrast} onChange={(e) => setContrast(e.target.checked)} />
				<span>High contrast</span>
			</label>
			<label className="inline-flex items-center gap-1">
				<input type="checkbox" checked={reducedMotion} onChange={(e) => setReducedMotion(e.target.checked)} />
				<span>Reduced motion</span>
			</label>
		</div>
	);
}


