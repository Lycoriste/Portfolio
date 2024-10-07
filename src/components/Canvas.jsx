import React, { useEffect, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls, useFBX, useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, Noise, HueSaturation, ColorAverage, Vignette, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import gsap from "gsap";
import * as THREE from 'three';
import { cameraNear } from "three/webgpu";

export const Background = ({ backgroundNumber, current }) => {
    let background;
    const futureGadgetLab = useLoader(GLTFLoader, "/models/lab/scene.gltf");

    const Sphere = () => {
        const sphereRef = useRef();
        useFrame((state, delta) => {
            if (sphereRef.current)
                sphereRef.current.rotation.y += delta * 0.3;
        });
        useThree(({ camera }) => {
            const cameraTarget = new THREE.Vector3(0, 0, 0);
            camera.position.set(0, 1, 0);
            camera.lookAt(cameraTarget);
        });

        return (
            <mesh ref={sphereRef} geometry={new THREE.SphereGeometry(6, 8, 8)} material={new THREE.MeshBasicMaterial({ wireframe: true })} position={new THREE.Vector3(0, -5, 0)}>
            </mesh>
        );
    }

    const Lab = () => {
        // 'Tab' : [CameraPosition, CameraLookAt]
        const cameraLocations = {
            'Home': [new THREE.Vector3(0.345, 2.5, 5.5), new THREE.Vector3(0.345, 1.8, -10)],
            'About': [new THREE.Vector3(0.05, 1.8, -0.5), new THREE.Vector3(1, 1.8, -10)]
        };
        let cameraTarget = new THREE.Vector3(0.345, 1.8, -10);

        const spotlightRef = useRef();
        const spotlightTargetRef = useRef(new THREE.Object3D());

        useEffect(() => {
            if (spotlightRef.current) {
                spotlightRef.current.target = spotlightTargetRef.current;
            }
        }, []);
        useThree(({ camera }) => {
            try {
                const newCameraTarget = cameraLocations[current][1];

                gsap.to(cameraTarget, {
                    x: newCameraTarget.x,
                    y: newCameraTarget.y,
                    z: newCameraTarget.z,
                    duration: 2,
                    onUpdate() {
                        camera.lookAt(cameraTarget)
                    }
                });

                gsap.to(camera.position, {
                    x: cameraLocations[current][0].x,
                    y: cameraLocations[current][0].y,
                    z: cameraLocations[current][0].z,
                    duration: 2,
                });
                // gsap.to(cameraTarget, {
                //     x: cameraLocations[current][1].x,
                //     y: cameraLocations[current][1].y,
                //     z: cameraLocations[current][1].z,
                //     duration: 100,
                //     onUpdate() {
                //         camera.lookAt(cameraTarget);
                //     }
                // });
            } catch (error) {
                console.log('Failed to get location, rendering fallback.');
                console.log('Error: ' + error);
                gsap.killTweensOf(camera.position);
                gsap.killTweensOf(cameraTarget);
                cameraTarget = cameraLocations['Home'][1];
                camera.position.copy(cameraLocations['Home'][0]);
                camera.lookAt(cameraTarget);
            }
        });

        const lighting = useMemo(() => {
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
                        decay={0.01}
                        color={'#F2E3BB'}
                    />
                </>
            );
        }, [])

        return (
            <>
                <Suspense fallback={<Sphere />}>
                    {lighting}
                    <primitive object={spotlightTargetRef.current} position={[0.5, -5, 6]} />
                    {/* Postprocessing Effects */}
                    <EffectComposer
                        disableNormalPass={true}
                        autoClear={false}
                        multisampling={0}
                        resolutionScale={0.2}
                    >
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
                    </EffectComposer >
                    <primitive object={futureGadgetLab.scene} material={futureGadgetLab.materials} dispose={null} />
                </Suspense>
            </>
        );
    }

    // Preload 3D models
    const backgroundMap = {
        1: <Sphere />,
        2: <Lab />
    }
    try {
        background = (
            <Canvas camera={{ fov: 75, near: 0.001, far: 20, position: [0, 1, 0] }} >
                {backgroundMap[backgroundNumber]}
            </Canvas>
        );
    } catch (error) {
        console.log("An error has occured with loading three.js background.\nError: " + error);
        <Canvas camera={{ fov: 75, near: 0.001, far: 20, position: [0, 1, 0] }} >
            <Sphere />
        </Canvas>
    }

    return (
        <div className='flex page-padding w-full h-full absolute -z-50' loading='lazy'>
            {background}
        </div>
    )
}