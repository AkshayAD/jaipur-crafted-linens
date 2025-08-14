"use client";

import Link from "next/link";
import Magnetic from "./Magnetic";

export default function MagneticLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
	return (
		<Magnetic>
			<Link href={href} className={className}>{children}</Link>
		</Magnetic>
	);
}


