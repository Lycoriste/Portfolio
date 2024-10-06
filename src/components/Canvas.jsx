import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls, useFBX, useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, Noise, HueSaturation, ColorAverage, Vignette, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from 'three';

export const Background = ({ backgroundNumber }) => {
    let background;

    const Sphere = () => {
        const sphereRef = useRef();
        useFrame(() => {
            if (sphereRef.current)
                sphereRef.current.rotation.y += 0.001;
        });

        return (
            <mesh ref={sphereRef} geometry={new THREE.SphereGeometry(6, 8, 8)} material={new THREE.MeshBasicMaterial({ wireframe: true })} position={new THREE.Vector3(0, -5, 0)}>
            </mesh>
        );
    }

    const Lab = () => {
        const projectModel = useLoader(GLTFLoader, "/models/lab/scene.gltf");
        const spotlightRef = useRef();
        const spotlightTargetRef = useRef(new THREE.Object3D());

        useEffect(() => {
            if (spotlightRef.current) {
                spotlightRef.current.target = spotlightTargetRef.current;
            }
        })
        useThree(({ camera }) => {
            const cameraTarget = new THREE.Vector3(0.345, 2.3, 0);
            camera.position.set(0.345, 2.5, 6);
            camera.lookAt(cameraTarget);
        })

        return (
            <>
                <ambientLight intensity={0.2} color={'#B6FFEC'} />
                <directionalLight position={[5, 10, 5]} intensity={0.7} color={'#B6FFEC'} />
                <pointLight position={[0.3, 1.4, 0.4]} intensity={3} distance={3.5} decay={1} color={'#F2E3BB'} />
                <spotLight
                    ref={spotlightRef}
                    position={[0.3, 1.4, 0.4]}
                    intensity={10}
                    distance={0}
                    castShadow={true}
                    angle={Math.PI / 3}
                    penumbra={1}
                    decay={-0.01}
                    color={'#F2E3BB'}
                />
                <primitive object={spotlightTargetRef.current} position={[0.5, -5, 6]} />
                {/* Postprocessing Effects */}
                <EffectComposer>
                    <Noise
                        premultiply
                        blendFunction={BlendFunction.ADD}
                    />
                    <Vignette
                        offset={0.15}
                        darkness={0.83}
                        eskil={false}
                        blendFunction={BlendFunction.NORMAL}
                    />
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.5}
                        intensity={2}
                    />
                </EffectComposer>
                <primitive object={projectModel.scene} material={projectModel.materials} dispose={null} />
            </>
        );
    }

    // Preload 3D models
    const backgroundMap = {
        1: <Sphere />,
        2: <Lab />
    }

    background = (
        <Canvas camera={{ fov: 75, near: 0.2, far: 10000, position: [10, 0, 0] }}>
            {backgroundMap[backgroundNumber]}
        </Canvas>
    );

    return (
        <div className='flex p-[2vw] w-full h-full absolute -z-50'>
            {background}
        </div>
    )
}