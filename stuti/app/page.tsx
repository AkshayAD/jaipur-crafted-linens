import Image from "next/image";
import Link from "next/link";

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link
			href={href}
			className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm tracking-wide hover:opacity-95 transition-colors"
		>
			{children}
		</Link>
	);
}

export default function Home() {
	return (
		<div className="flex flex-col">
			<section className="relative h-[80vh] w-full overflow-hidden rounded-none">
				<div className="absolute inset-0">
					<Image
						src="/images/91RYk3muZlL.jpg"
						alt="Serene bed with soft natural light"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/15" />
				</div>
				<div className="relative container h-full flex flex-col items-start justify-end pb-16">
					<h1 className="h-serif text-4xl md:text-6xl text-white max-w-3xl leading-tight">Stuti. Where comfort finds a home.</h1>
					<p className="mt-4 text-white/90 max-w-xl">Accessible luxury linens crafted in premium percale cotton and linen, designed to bring calm to modern living.</p>
					<div className="mt-6 flex gap-3">
						<CTAButton href="/collections">Explore Collections</CTAButton>
						<Link href="/lookbook" className="inline-flex items-center justify-center rounded-full border border-white/70 text-white px-6 py-3 text-sm tracking-wide hover:bg-white/10">
							View Lookbook
						</Link>
					</div>
				</div>
			</section>

			<section className="container mt-16">
				<h2 className="h-serif text-2xl md:text-3xl">Featured Collections</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
					<Link href="/collections/percale" className="group relative overflow-hidden rounded-lg bg-secondary/10">
						<Image src="/images/images.jpeg" alt="Percale collection" width={800} height={600} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
						<div className="absolute bottom-3 left-3 text-white">
							<div className="h-serif text-xl">The Percale Edit</div>
							<p className="text-sm text-white/90">Crisp, cool, and endlessly breathable</p>
						</div>
					</Link>
					<Link href="/collections/linen" className="group relative overflow-hidden rounded-lg bg-accent/10">
						<Image src="/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg" alt="Linen collection" width={800} height={600} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
						<div className="absolute bottom-3 left-3 text-white">
							<div className="h-serif text-xl">The Linen Collection</div>
							<p className="text-sm text-white/90">Naturally textured, effortlessly luxurious</p>
						</div>
					</Link>
					<Link href="/collections" className="group relative overflow-hidden rounded-lg bg-secondary/10">
						<div className="h-64 w-full flex items-center justify-center text-center">
							<div>
								<div className="h-serif text-xl">See All</div>
								<p className="text-sm text-foreground/70">Explore colors, textures, and sets</p>
							</div>
						</div>
					</Link>
				</div>
			</section>

			<section className="container mt-16 grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h2 className="h-serif text-2xl md:text-3xl">Our Philosophy</h2>
					<p className="mt-4 text-foreground/80 leading-relaxed">We craft linens that invite slow mornings and quiet nights. Using premium, breathable percale cotton and linen, our collections are made to last and priced with honesty. We believe in texture you can feel, colors that calm, and details that matter.</p>
				</div>
				<div className="relative h-72 rounded-lg overflow-hidden">
					<Image src="/images/91RYk3muZlL.jpg" alt="Fabric close-up" fill className="object-cover" />
				</div>
			</section>

			<section className="container mt-16">
				<div className="flex items-end justify-between">
					<h2 className="h-serif text-2xl md:text-3xl">Lookbook</h2>
					<Link href="/lookbook" className="text-sm hover:text-primary">View all</Link>
				</div>
				<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
					{["91RYk3muZlL.jpg","A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg","images.jpeg","91RYk3muZlL.jpg"].map((img, i) => (
						<div key={i} className="relative h-40 rounded-md overflow-hidden group">
							<Image src={`/images/${img}`} alt="Lookbook image" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
						</div>
					))}
				</div>
			</section>

			<section className="container mt-16 mb-20">
				<h2 className="h-serif text-2xl md:text-3xl">From Instagram</h2>
				<p className="mt-3 text-foreground/70 text-sm">Live feed integration placeholder. Connect your Instagram token to display latest posts.</p>
				<div className="mt-5 grid grid-cols-2 md:grid-cols-6 gap-3 opacity-85">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="aspect-square rounded-md bg-secondary/20" />
					))}
				</div>
			</section>
		</div>
	);
}
