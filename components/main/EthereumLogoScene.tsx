"use client";

import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap, AmbientLight, PointLight, SpotLight, MeshStandardMaterial, HemisphereLight, DirectionalLight, Color } from 'three';

const EthereumLogo = () => {
  const gltf = useLoader(GLTFLoader, '/assets/ethScene.gltf');
  const meshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, MeshStandardMaterial, Object3DEventMap>>(null);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          const material = new MeshStandardMaterial({
            color: 0xcccccc,
            metalness: 0.9,
            roughness: 0.2,
            envMapIntensity: 2,
            transparent: false,
            opacity: 1,
          });
          child.material = material;
        }
      });
      gltf.scene.scale.set(2, 2, 2); // Increase the size of the model
    }
  }, [gltf]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

const EthereumLogoScene = () => {
  const orbitControlsRef = useRef(null);



  return (
    <Canvas
      style={{
        width: '100vh',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <spotLight position={[1, 1, 1]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <hemisphereLight
        color={new Color(0xffffff)}
        groundColor={new Color(0x000000)}
        intensity={1}
      />
      <directionalLight position={[0, 10, 10]} intensity={2} />
      <spotLight position={[0, 10, 5]} angle={0.3} penumbra={1} intensity={2} castShadow /> {/* Top-Front Light */}
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow /> {/* Front Light */}
      <spotLight position={[5, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow /> {/* Front-Right Light */}
      <spotLight position={[-5, 5, 10]} angle={0.3} penumbra={1} intensity={2} castShadow /> {/* Front-Left Light */}
      <spotLight position={[0, 0, 10]} angle={0.3} penumbra={1} intensity={2} castShadow /> {/* Front-Bottom Light */}
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} castShadow /> {/* Top Light */}
      <spotLight position={[0, 5, -10]} angle={0.3} penumbra={1} intensity={2} castShadow /> {/* Back Light */}
      <EthereumLogo />
      <OrbitControls ref={orbitControlsRef} enableZoom={false} />
    </Canvas>
  );
};

export default EthereumLogoScene;
