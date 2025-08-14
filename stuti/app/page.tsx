import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollFacts from "@/components/ScrollFacts";
import BentoShowcase from "@/components/BentoShowcase";
import Marquee from "@/components/Marquee";
import StoryScroller from "@/components/StoryScroller";
import FabricLab from "@/components/FabricLab";
import Magnetic from "@/components/Magnetic";
import ProductCard from "@/components/ProductCard";
import ScrollProgress from "@/components/ScrollProgress";
import StatsSection from "@/components/StatsSection";
import InteractiveGallery from "@/components/InteractiveGallery";
import StickyNav from "@/components/StickyNav";
import ShimmerButton from "@/components/ShimmerButton";
import TestimonialCard from "@/components/TestimonialCard";

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
	const sections = [
		{ id: "hero", label: "Home", href: "#hero" },
		{ id: "collections", label: "Collections", href: "#collections" },
		{ id: "stats", label: "Stats", href: "#stats" },
		{ id: "gallery", label: "Gallery", href: "#gallery" },
		{ id: "testimonials", label: "Reviews", href: "#testimonials" }
	];

	const stats = [
		{ value: 500, label: "Happy Customers", suffix: "+" },
		{ value: 15, label: "Years of Craft", suffix: "+" },
		{ value: 98, label: "Satisfaction Rate", suffix: "%" },
		{ value: 24, label: "Hour Support", suffix: "h" }
	];

	const galleryImages = [
		{ src: "/images/91RYk3muZlL.jpg", alt: "Bedroom setup", title: "Serene Bedroom", description: "Perfect for peaceful sleep" },
		{ src: "/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg", alt: "Linen collection", title: "Linen Collection", description: "Natural texture and comfort" },
		{ src: "/images/images.jpeg", alt: "Percale sheets", title: "Percale Sheets", description: "Crisp and breathable" },
		{ src: "/images/91RYk3muZlL.jpg", alt: "Bedroom detail", title: "Bedroom Detail", description: "Attention to every detail" }
	];

	const testimonials = [
		{
			quote: "The quality of these linens is exceptional. They've transformed my sleep experience completely.",
			author: "Sarah Johnson",
			role: "Interior Designer",
			rating: 5
		},
		{
			quote: "Finally found linens that are both beautiful and practical. The percale weave is perfect for our climate.",
			author: "Michael Chen",
			role: "Architect",
			rating: 5
		},
		{
			quote: "Stuti has exceeded all my expectations. The attention to detail and customer service is outstanding.",
			author: "Emma Rodriguez",
			role: "Homeowner",
			rating: 5
		}
	];

	return (
		<div className="flex flex-col">
			<ScrollProgress />
			<StickyNav sections={sections} />
			
			<section id="hero">
				<Hero />
			</section>
			
			<Marquee />

			<section id="collections" className="container mt-16">
				<h2 className="h-serif text-2xl md:text-3xl">Featured Collections</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
					<ProductCard
						href="/collections/percale"
						image="/images/images.jpeg"
						title="The Percale Edit"
						description="Crisp, cool, and endlessly breathable"
						badge="Best Seller"
					/>
					<ProductCard
						href="/collections/linen"
						image="/images/A1nSHbz9BKL._AC_UF894,1000_QL80_.jpg"
						title="The Linen Collection"
						description="Naturally textured, effortlessly luxurious"
						badge="New"
					/>
					<ProductCard
						href="/collections"
						image="/images/91RYk3muZlL.jpg"
						title="See All Collections"
						description="Explore colors, textures, and sets"
					/>
				</div>
			</section>

			<BentoShowcase />
			<StoryScroller />
			<FabricLab />

			<ScrollFacts />

			<section id="stats">
				<StatsSection
					stats={stats}
					title="Our Impact"
					description="Trusted by thousands of customers for quality and comfort"
				/>
			</section>

			<section id="gallery" className="container mt-16">
				<InteractiveGallery
					images={galleryImages}
					title="Our Collections"
				/>
			</section>

			<section className="container mt-16 grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h2 className="h-serif text-2xl md:text-3xl">Our Philosophy</h2>
					<p className="mt-4 text-foreground/80 leading-relaxed">We craft linens that invite slow mornings and quiet nights. Using premium, breathable percale cotton and linen, our collections are made to last and priced with honesty. We believe in texture you can feel, colors that calm, and details that matter.</p>
					<div className="mt-6">
						<ShimmerButton variant="primary" size="lg">
							Learn More About Our Story
						</ShimmerButton>
					</div>
				</div>
				<div className="relative h-72 rounded-lg overflow-hidden">
					<Image src="/images/91RYk3muZlL.jpg" alt="Fabric close-up" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
				</div>
			</section>

			<section id="testimonials" className="container mt-16">
				<h2 className="h-serif text-2xl md:text-3xl text-center mb-12">What Our Customers Say</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} index={index} />
					))}
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
						<Image src={`/images/${img}`} alt="Lookbook image" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
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
