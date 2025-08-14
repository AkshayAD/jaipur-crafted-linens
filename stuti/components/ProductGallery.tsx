"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
	const [active, setActive] = useState(0);
	return (
		<div>
			<div className="relative w-full h-[440px] overflow-hidden rounded-lg">
				<Image src={images[active]} alt={name} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
			</div>
			<div className="mt-3 grid grid-cols-5 gap-2">
				{images.map((src, i) => (
					<button key={i} onClick={() => setActive(i)} className={`relative h-20 rounded-md overflow-hidden border ${active===i?"border-primary":"border-transparent"}`}>
						<Image src={src} alt={`${name} ${i+1}`} fill sizes="(max-width: 768px) 20vw, 10vw" className="object-cover" />
					</button>
				))}
			</div>
		</div>
	);
}