import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import Camera from "./Camera";

const animationCameraSteps = [
  [[0, 0, .6],[-.85, 0, 0]],
  [[0, 0, .6],[-.85, 0, 0]],
]

const Portrait = () => {
  const camera: any = useRef();

  function CameraController() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }) => {

      camera.position.x = 0
      camera.position.y = .2
      camera.position.z = .5

      camera.rotation.x = -.525
      camera.rotation.y = 0
      camera.rotation.z = 0
    });
    return null
  }

  return (
    <div className="w-full h-96">
      <Canvas
        shadows={true}
        camera={{ fov: 45, position: animationCameraSteps[0][0], rotation: animationCameraSteps[0][1]}}
        onCreated={(e) => console.log(e)}
      >
        {/* <perspectiveCamera position={[0,0,0]} far={2000} near={.1} fov={1000} useRef={camera}/> */}
        <directionalLight color={"white"} intensity={1} position={[0,1,1]}/>
        <directionalLight color={"white"} intensity={.3} position={[0,0,1]}/>
        <instancedBufferGeometry/>
        {/* <bufferAttribute args={(new Float32Array(4 * 3), 3)}/> */}

        {/* <OrbitControls makeDefault/> */}
        {/* <Suspense fallback={null}>
          <Model />
        </Suspense> */}
        <CameraController />
      </Canvas>
    </div>
  );
};

export default Portrait;
