"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Instances, Instance, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from 'three';

const objects = Array.from({ length: 100 }, () => ({
  position: [
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
  ],
  rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
}));

function AnimatedInstances() {
  const ref = useRef<any>();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <Instances limit={objects.length}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial metalness={0.8} roughness={0.1} />
        {objects.map((data, i) => (
          <Instance
            key={i}
            color={i % 3 === 0 ? "#D40000" : (i % 3 === 1 ? "#FFFFFF" : "#333333")}
            {...data}
            scale={0.2}
          />
        ))}
      </Instances>
    </group>
  );
}

export default function StrikingAnimationSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="experience" className="relative h-[200vh] bg-black text-white">
        <div className="sticky top-0 h-screen">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={300} color="#D40000" />
                <pointLight position={[-10, -10, 5]} intensity={200} color="#FFFFFF" />
                <AnimatedInstances />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
            </Canvas>
            <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ opacity }}
            >
                <h2 className="text-4xl md:text-7xl font-bold text-center drop-shadow-lg leading-tight">
                    Engineered for <br /> Pure Emotion.
                </h2>
            </motion.div>
        </div>
    </section>
  );
}