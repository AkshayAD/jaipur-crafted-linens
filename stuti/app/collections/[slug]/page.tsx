import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const DATA: Record<string, { title: string; products: Array<{ slug: string; name: string; image: string; color: string }> }> = {
	percale: {
		title: "Percale",
		products: [
			{ slug: "percale-white", name: "Percale Sheet Set – Snow", image: "/images/images.jpeg", color: "White" },
			{ slug: "percale-sage", name: "Percale Sheet Set – Sage", image: "/images/91RYk3muZlL.jpg", color: "Sage" },
		],
	},
	linen: {
		title: "Linen",
		products: [
			{ slug: "linen-natural", name: "Linen Sheet Set – Natural", image: "/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg", color: "Natural" },
			{ slug: "linen-rose", name: "Linen Sheet Set – Rose", image: "/images/91RYk3muZlL.jpg", color: "Rose" },
		],
	},
};

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const collection = DATA[slug];
	if (!collection) return notFound();
	return (
		<div className="container py-10">
			<h1 className="h-serif text-3xl md:text-4xl">{collection.title}</h1>
			<p className="text-foreground/70 mt-2">Thoughtfully curated pieces in our {collection.title.toLowerCase()} collection.</p>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				{collection.products.map((p) => (
					<Link key={p.slug} href={`/product/${p.slug}`} className="group block">
						<div className="relative overflow-hidden rounded-lg">
							<Image src={p.image} alt={p.name} width={800} height={600} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
						</div>
						<div className="mt-3">
							<div className="font-medium">{p.name}</div>
							<div className="text-sm text-foreground/70">Color: {p.color}</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}