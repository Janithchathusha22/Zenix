import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
 
function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");
 
  const texture = useTexture(props.item.img);
 
    useEffect(() => {
      Object.entries(materials).map((material) => {
        // these are the material names that can't be changed color
        if (
          material[0] !== "zFdeDaGNRwzccye" &&
          material[0] !== "ujsvqBWRMnqdwPx" &&
          material[0] !== "hUlRcbieVuIiOXG" &&
          material[0] !== "jlzuBkUzuJqgiAK" &&
          material[0] !== "xNrofRCqOXXHVZt"
        ) {
          material[1].color = new THREE.Color(props.item.color[0]);
        }
        material[1].needsUpdate = true;
      });
    }, [materials, props.item]);
 
  return (
    <group {...props} dispose={null}>
    <group scale={0.01}>
        <group position={[0.1, 0.035, 2.353]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Case_Face_0.geometry}
            material={materials.Face}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Case_Case_0.geometry}
            material={materials.Case}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_Glass_0.geometry}
            material={materials.Glass}
            position={[-0.002, -0.006, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Band_Band_0.geometry}
            material={materials.Band}
            position={[-0.002, 0.029, 0]}
          />
        </group>
      </group>
    </group>
  );
}
 
export default Model;
 
useGLTF.preload("/models/scene.glb");