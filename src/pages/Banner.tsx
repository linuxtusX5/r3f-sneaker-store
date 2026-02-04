import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Bounds } from "@react-three/drei";

function Scene() {
  const { scene } = useGLTF("/models/scene1/scene.gltf");

  return (
    <Bounds fit observe margin={0.6}>
      <primitive object={scene} />
    </Bounds>
  );
}
export default function Banner() {
  return (
    <div className="hero bg-black/20 backdrop-blur">
      <Canvas
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

        <Scene />
        <OrbitControls makeDefault enablePan={false} />
      </Canvas>
    </div>
  );
}
