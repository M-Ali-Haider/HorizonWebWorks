"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";

const Landing = () => {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/color.jpg",
    "./normal.png",
    "./occlusion.jpg",
  ]);
  return (
    <div className="h-screen bg-[#0f0f0f]">
      <Canvas ref={scene}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, 0.25]} />
        <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>
      </Canvas>
    </div>
  );
};

export default Landing;
