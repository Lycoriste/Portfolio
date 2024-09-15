import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three';

type backgroundProps = {
    backgroundNumber: number;
};

export const Background: React.FC<backgroundProps> = ({ backgroundNumber }) => {
    let background;
    /*
    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 1.0 },
            resolution: { value: new THREE.Vector2() }
        },
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    }
    );
    */
    const Sphere = () => {
        const sphereRef = useRef<THREE.Mesh>(null);
        useFrame(() => {
            if (sphereRef.current)
                sphereRef.current.rotation.y += 0.002;
        });

        return (
            <mesh ref={sphereRef} geometry={new THREE.SphereGeometry(6, 12, 12)} material={new THREE.MeshBasicMaterial({ wireframe: true })} position={new THREE.Vector3(0, -5, 0)}>
            </mesh>
        );
    }

    switch (backgroundNumber) {
        case 0:

            background = (
                <Canvas camera={{ fov: 75, near: 0.2, far: 1000, position: [10, 0, 0] }} className='border-2'>
                    <Sphere />
                </Canvas>
            );
            break;
        case 1:
            background = (
                <Canvas camera={{ fov: 75, near: 0.2, far: 1000, position: [5, 1, 5] }} className='border-2'>
                    <mesh />
                </Canvas>
            );
            break;
    }

    return (
        <div className='flex p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-9 w-full h-full -z-50 absolute'>
            {background}
        </div>
    )
}