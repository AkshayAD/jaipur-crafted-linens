import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-16 border-t border-foreground/10">
			<div className="container py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
				<div className="space-y-2">
					<div className="h-serif text-lg">Stuti</div>
					<p className="text-foreground/70">Accessible luxury for the modern home.</p>
				</div>
				<nav className="flex gap-4 md:justify-center">
					<Link href="/collections" className="hover:text-primary">Collections</Link>
					<Link href="/our-story" className="hover:text-primary">Our Story</Link>
					<Link href="/lookbook" className="hover:text-primary">Lookbook</Link>
				</nav>
				<div className="text-foreground/70">
					<div className="font-medium">Connect</div>
					<div className="mt-2 flex gap-3">
						<a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9657546747"}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
						<a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/chachad_divyanka/"} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
					</div>
				</div>
				<div className="md:text-right text-foreground/60">
					<p>© {new Date().getFullYear()} Stuti. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}