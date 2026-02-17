import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Bounds } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import Shoes from "@/components/Shoes";

function Scene({ setHovered }: { setHovered: (v: boolean) => void }) {
  const { scene } = useGLTF("/models/scene1/scene.gltf");
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t) * 0.2;
  });

  return (
    <Bounds fit observe margin={0.7}>
      <group
        ref={groupRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        <primitive object={scene} />
      </group>
    </Bounds>
  );
}

export default function Banner() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="hero bg-black/20 backdrop-blur">
      <Canvas
        gl={{ alpha: true }}
        camera={{
          position: [3.5, 0.8, 0],
          fov: 40,
          near: 0.01,
          far: 1000,
        }}
      >
        <color attach="background" args={["#1c1c1c"]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={2} />
        <directionalLight position={[-5, 3, -5]} intensity={1} />

        <Scene setHovered={setHovered} />
        <OrbitControls makeDefault enablePan={false} />
        {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        /> */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
      <div
        className={`
          absolute inset-0
        bg-white/10
          backdrop-blur-md
          transition-all duration-300
          pointer-events-none
          ${hovered ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex justify-center items-center center">
          <h1 className="text-[5em] font-extrabold">SneakerX</h1>
        </div>
        <div className="flex justify-center items-center center">
          <div>
            <Shoes />
          </div>
          <div className="block justify-center items-center min-h-87.5 w-2xl pt-40">
            <h4 className="text-[3em] font-bold text-center">Running Shoes</h4>
            <p className="price">$98.97</p>
            <p>
              Year after year Pegasus has proven itself on the feet of runners
              everywhere. Now our most trusted style returns with new
              innovations that make it more itself than ever. Meet the reliable,
              comfortable, always ready-to-run Nike Air Zoom Pegasus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
