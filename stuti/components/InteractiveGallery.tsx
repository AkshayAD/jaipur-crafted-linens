"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface GalleryImage {
	src: string;
	alt: string;
	title?: string;
	description?: string;
}

interface InteractiveGalleryProps {
	images: GalleryImage[];
	title?: string;
}

export default function InteractiveGallery({ images, title }: InteractiveGalleryProps) {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	const openLightbox = (index: number) => setSelectedImage(index);
	const closeLightbox = () => setSelectedImage(null);

	const goToNext = () => {
		if (selectedImage !== null) {
			setSelectedImage((selectedImage + 1) % images.length);
		}
	};

	const goToPrevious = () => {
		if (selectedImage !== null) {
			setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
		}
	};

	return (
		<div className="space-y-4">
			{title && (
				<h2 className="h-serif text-2xl md:text-3xl">{title}</h2>
			)}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{images.map((image, index) => (
					<motion.div
						key={index}
						onClick={() => openLightbox(index)}
						className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-110"
							sizes="(max-width: 768px) 50vw, 25vw"
						/>
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
						<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
								</svg>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{selectedImage !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
						onClick={closeLightbox}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							className="relative max-w-4xl max-h-full"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={closeLightbox}
								className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
							
							<button
								onClick={goToPrevious}
								className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
								</svg>
							</button>
							
							<button
								onClick={goToNext}
								className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</button>

							<div className="relative">
								<Image
									src={images[selectedImage].src}
									alt={images[selectedImage].alt}
									width={800}
									height={600}
									className="w-full h-auto max-h-[80vh] object-contain"
									sizes="(max-width: 768px) 100vw, 80vw"
								/>
								{(images[selectedImage].title || images[selectedImage].description) && (
									<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
										{images[selectedImage].title && (
											<h3 className="text-xl font-medium">{images[selectedImage].title}</h3>
										)}
										{images[selectedImage].description && (
											<p className="mt-2 text-white/80">{images[selectedImage].description}</p>
										)}
									</div>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
