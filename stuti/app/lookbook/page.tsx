import Image from "next/image";

const images = [
	"/images/91RYk3muZlL.jpg",
	"/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg",
	"/images/images.jpeg",
	"/images/91RYk3muZlL.jpg",
	"/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg",
	"/images/images.jpeg",
	"/images/91RYk3muZlL.jpg",
	"/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg",
];

export default function LookbookPage() {
	return (
		<div className="container py-10">
			<h1 className="h-serif text-3xl md:text-4xl">Lookbook</h1>
			<p className="text-foreground/70 mt-2 max-w-2xl">A visual journal of serene bedrooms, tactile textures, and the quiet luxury of everyday rituals.</p>
			<div className="mt-8 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]"><div className="space-y-4">
				{images.map((src, i) => (
					<div key={i} className="relative overflow-hidden rounded-lg inline-block w-full">
						<div className="relative w-full" style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1" }}>
							<Image src={src} alt="Lookbook image" fill className="object-cover" />
						</div>
					</div>
				))}
			</div></div>
		</div>
	);
}