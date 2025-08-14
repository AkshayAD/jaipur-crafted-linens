"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

function Cloth() {
	const ref = useRef<any>(null);
	useFrame(({ clock }) => {
		if (!ref.current) return;
		const t = clock.getElapsedTime();
		ref.current.rotation.x = -Math.PI / 2;
		ref.current.position.z = Math.sin(t * 0.6) * 0.2;
	});
	return (
		<mesh ref={ref}>
			<planeGeometry args={[3.6, 2, 64, 64]} />
			<meshStandardMaterial color="#DB5E4A" roughness={0.8} metalness={0.05} />
		</mesh>
	);
}

export default function Hero3D() {
	return (
		<div className="absolute inset-0 opacity-[.18]">
			<Canvas camera={{ position: [0, 1.2, 2.8], fov: 50 }}>
				<ambientLight intensity={0.6} />
				<directionalLight intensity={0.8} position={[2, 4, 2]} />
				<Suspense fallback={null}>
					<Cloth />
				</Suspense>
			</Canvas>
		</div>
	);
}


