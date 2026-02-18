import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Bounds } from "@react-three/drei";

function Scene2() {
  const { scene } = useGLTF("/models/scene2/scene.gltf");

  return (
    <Bounds fit observe margin={0.7}>
      <primitive object={scene} />
    </Bounds>
  );
}

export default function Shoes() {
  return (
    <div className="w-200 h-100">
      <Canvas
        gl={{ alpha: true }}
        camera={{
          position: [3.5, 0.8, 10],
          fov: 40,
          near: 0.01,
          far: 1000,
        }}
      >
        {/* <color attach="background" args={["#1c1c1c"]} /> */}

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={2} />
        <directionalLight position={[-5, 3, -5]} intensity={1} />

        <Scene2 />
        <OrbitControls makeDefault enablePan={false} />
        {/* <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={false}
                /> */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
