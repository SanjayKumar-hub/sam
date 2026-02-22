import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, color, shape, speed }: { position: [number, number, number]; color: string; shape: "box" | "octahedron" | "torus" | "icosahedron" | "cone"; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * 0.3;
    ref.current.rotation.y += delta * speed * 0.5;
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "box": return <boxGeometry args={[0.6, 0.6, 0.6]} />;
      case "octahedron": return <octahedronGeometry args={[0.45]} />;
      case "torus": return <torusGeometry args={[0.35, 0.15, 16, 32]} />;
      case "icosahedron": return <icosahedronGeometry args={[0.4]} />;
      case "cone": return <coneGeometry args={[0.35, 0.7, 6]} />;
    }
  }, [shape]);

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5} floatingRange={[-0.3, 0.3]}>
      <mesh ref={ref} position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.25}
          wireframe
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
};

const shapes: { position: [number, number, number]; color: string; shape: "box" | "octahedron" | "torus" | "icosahedron" | "cone"; speed: number }[] = [
  { position: [-3, 2, -2], color: "#00e5ff", shape: "octahedron", speed: 1.2 },
  { position: [3.5, -1.5, -3], color: "#e040fb", shape: "torus", speed: 0.8 },
  { position: [-2.5, -2, -1.5], color: "#7c4dff", shape: "box", speed: 1 },
  { position: [2, 2.5, -2.5], color: "#00e5ff", shape: "icosahedron", speed: 0.9 },
  { position: [0, -3, -2], color: "#e040fb", shape: "cone", speed: 1.1 },
  { position: [-4, 0, -3], color: "#7c4dff", shape: "octahedron", speed: 0.7 },
  { position: [4, 0.5, -2], color: "#00e5ff", shape: "torus", speed: 1.3 },
];

const AboutScene = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00e5ff" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#e040fb" />
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </Canvas>
  </div>
);

export default AboutScene;
