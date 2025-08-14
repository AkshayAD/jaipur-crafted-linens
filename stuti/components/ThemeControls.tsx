"use client";

import { useEffect } from "react";

export default function ThemeControls() {
	useEffect(() => {
		if (typeof document === "undefined") return;
		// Set theme to sepia by default and remove other theme options
		document.documentElement.setAttribute("data-theme", "sepia");
		localStorage.setItem("theme", "sepia");
	}, []);

	// Return empty div since we're removing all controls
	return <div className="hidden md:flex items-center gap-2 text-xs"></div>;
}


