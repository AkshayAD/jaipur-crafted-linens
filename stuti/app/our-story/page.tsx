export default function OurStoryPage() {
	return (
		<div className="container py-10">
			<h1 className="h-serif text-3xl md:text-4xl">Our Story</h1>
			<div className="mt-4 grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2 space-y-4 leading-relaxed text-foreground/90">
					<p>Stuti was born from a simple wish: to make the quiet luxury of a well-made bed accessible to more homes. We work with premium percale cotton and linen — fabrics chosen for their breathability, texture, and timeless appeal.</p>
					<p>Every collection is intentionally designed. We obsess over weave, handfeel, and color, bringing you textiles that age beautifully and feel better with every wash. We price with honesty, so more people can rest well.</p>
					<p>From serene mornings to unhurried evenings, Stuti is the art of rest.</p>
				</div>
				<div className="rounded-lg bg-secondary/15 p-5">
					<h2 className="h-serif text-xl">Our Values</h2>
					<ul className="mt-3 space-y-2 text-sm">
						<li>• Material honesty and lasting quality</li>
						<li>• Calm palettes and thoughtful design</li>
						<li>• Fair pricing without compromise</li>
					</ul>
				</div>
			</div>

			<div className="mt-12 grid md:grid-cols-2 gap-8">
				<div className="space-y-3">
					<h2 className="h-serif text-2xl">A brief history of percale and linen</h2>
					<p className="text-sm text-foreground/75">Percale traces its roots to the Persian word "pargālah" and rose to prominence in 19th-century Europe for its crisp, cool handfeel. Linen, spun from flax, is among humanity’s oldest textiles — prized for breathability and tensile strength since ancient Egypt.</p>
				</div>
				<ol className="space-y-2 text-sm text-foreground/80">
					<li>• 1830s: Percale production scales in France and Portugal</li>
					<li>• 1920s: Linen becomes a staple of warm-weather bedding</li>
					<li>• Today: Blends and refined weaves make both more durable than ever</li>
				</ol>
			</div>
		</div>
	);
}