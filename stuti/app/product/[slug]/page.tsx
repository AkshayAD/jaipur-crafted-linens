"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const PRODUCTS: Record<string, { name: string; color: string; images: string[]; material: string; size: string; care: string } > = {
	"percale-white": {
		name: "Percale Sheet Set – Snow",
		color: "White",
		images: ["/images/images.jpeg", "/images/91RYk3muZlL.jpg"],
		material: "400-thread-count percale cotton",
		size: "Queen, King",
		care: "Machine wash cold, tumble dry low",
	},
	"percale-sage": {
		name: "Percale Sheet Set – Sage",
		color: "Sage",
		images: ["/images/91RYk3muZlL.jpg", "/images/images.jpeg"],
		material: "400-thread-count percale cotton",
		size: "Queen, King",
		care: "Machine wash cold, tumble dry low",
	},
	"linen-natural": {
		name: "Linen Sheet Set – Natural",
		color: "Natural",
		images: ["/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg", "/images/91RYk3muZlL.jpg"],
		material: "European flax linen",
		size: "Queen, King",
		care: "Machine wash cold, tumble dry low",
	},
	"linen-rose": {
		name: "Linen Sheet Set – Rose",
		color: "Rose",
		images: ["/images/91RYk3muZlL.jpg", "/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg"],
		material: "European flax linen",
		size: "Queen, King",
		care: "Machine wash cold, tumble dry low",
	},
};

export default function ProductPage({ params }: { params: { slug: string } }) {
	const product = PRODUCTS[params.slug];
	const [active, setActive] = useState(0);
	const waLink = useMemo(() => {
		if (!product) return "#";
		const base = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0000000000"}`;
		const text = encodeURIComponent(`Hi Stuti, I'm interested in the ${product.name} (${product.color}).`);
		return `${base}?text=${text}`;
	}, [product]);

	if (!product) return null;
	return (
		<div className="container py-10 grid md:grid-cols-2 gap-10">
			<div>
				<div className="relative w-full h-[440px] overflow-hidden rounded-lg">
					<Image src={product.images[active]} alt={product.name} fill className="object-cover" />
				</div>
				<div className="mt-3 grid grid-cols-5 gap-2">
					{product.images.map((src, i) => (
						<button key={i} onClick={() => setActive(i)} className={`relative h-20 rounded-md overflow-hidden border ${active===i?"border-primary":"border-transparent"}`}>
							<Image src={src} alt={`${product.name} ${i+1}`} fill className="object-cover" />
						</button>
					))}
				</div>
			</div>
			<div>
				<h1 className="h-serif text-3xl md:text-4xl">{product.name}</h1>
				<p className="mt-2 text-foreground/70">Color: {product.color}</p>
				<div className="mt-6 space-y-3">
					<h2 className="h-serif text-xl">The Feeling</h2>
					<p className="leading-relaxed text-foreground/90">Drift off in the crisp, cool embrace of our {product.material}, woven for breathability and a matte, lived-in finish. Designed for restorative sleep and unhurried mornings.</p>
				</div>
				<div className="mt-6 grid grid-cols-1 gap-3 text-sm">
					<div>
						<div className="font-medium">Material</div>
						<p className="text-foreground/80">{product.material}</p>
					</div>
					<div>
						<div className="font-medium">Size</div>
						<p className="text-foreground/80">{product.size}</p>
					</div>
					<div>
						<div className="font-medium">Care</div>
						<p className="text-foreground/80">{product.care}</p>
					</div>
				</div>
				<div className="mt-8 flex gap-3">
					<a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm tracking-wide hover:opacity-95">Order on WhatsApp</a>
					<a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background">Inquire on Instagram</a>
				</div>
			</div>
		</div>
	);
}