"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface Stat {
	value: number;
	label: string;
	suffix?: string;
	prefix?: string;
}

interface StatsSectionProps {
	stats: Stat[];
	title?: string;
	description?: string;
}

export default function StatsSection({ stats, title, description }: StatsSectionProps) {
	return (
		<section className="py-16 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
			<div className="container">
				{(title || description) && (
					<div className="text-center mb-12">
						{title && (
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="h-serif text-3xl md:text-4xl mb-4"
							>
								{title}
							</motion.h2>
						)}
						{description && (
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="text-foreground/70 max-w-2xl mx-auto"
							>
								{description}
							</motion.p>
						)}
					</div>
				)}
				
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="text-center group"
						>
							<div className="relative">
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
									initial={{ scale: 0.8, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
								/>
								<div className="relative">
									<AnimatedCounter
										value={stat.value}
										prefix={stat.prefix}
										suffix={stat.suffix}
										className="block text-4xl md:text-5xl font-bold text-foreground mb-2"
									/>
								</div>
							</div>
							<motion.p
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
								className="text-sm text-foreground/70 font-medium"
							>
								{stat.label}
							</motion.p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
