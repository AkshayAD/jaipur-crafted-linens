import Image from "next/image";
import Link from "next/link";

const collections = [
	{
		slug: "percale",
		title: "Percale",
		description: "Crisp and cool for effortless comfort",
		image: "/images/images.jpeg",
	},
	{
		slug: "linen",
		title: "Linen",
		description: "Textured, breathable, timeless",
		image: "/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg",
	},
];

export default function CollectionsPage() {
	return (
		<div className="container py-10">
			<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
				<div>
					<h1 className="h-serif text-3xl md:text-4xl">Collections</h1>
					<p className="text-foreground/70 mt-2">Explore by material and mood.</p>
				</div>
				<div className="flex gap-2 text-sm">
					<button className="rounded-full border px-3 py-1.5 hover:bg-secondary/20">All</button>
					<button className="rounded-full border px-3 py-1.5 hover:bg-secondary/20">Percale</button>
					<button className="rounded-full border px-3 py-1.5 hover:bg-secondary/20">Linen</button>
				</div>
			</div>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
				{collections.map((c) => (
					<Link key={c.slug} href={`/collections/${c.slug}`} className="group relative overflow-hidden rounded-lg">
						<Image src={c.image} alt={c.title} width={1200} height={800} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
						<div className="absolute bottom-4 left-4 text-white">
							<div className="h-serif text-2xl">{c.title}</div>
							<p className="text-white/90">{c.description}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}