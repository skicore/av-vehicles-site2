"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Html, useGLTF } from "@react-three/drei";
import { useState } from "react";

function Model({
    setSelected,
}: {
    setSelected: (value: string) => void;
}) {
    const { scene } = useGLTF("/models/cars.glb");

    return (
        <>
            <primitive
                object={scene}
                scale={180}
                rotation={[0, Math.PI, 0]}
            />
            <Html position={[0, 2.5, 4]}>
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full">
                    📷
                </div>
            </Html>

            <Html position={[0, 1, 5]}>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full">
                    📡
                </div>
            </Html>

            <Html position={[0, 4, 0]}>
                <div className="bg-purple-500 text-white px-3 py-1 rounded-full">
                    🛰
                </div>
            </Html>

            <Html position={[0, 2, 0]}>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full">
                    🧠
                </div>
            </Html>

            {/* Front Camera */}
            <Html position={[0, 1.5, 3]}>
                <button
                    onClick={() => setSelected("camera")}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                >
                    📷 Camera
                </button>
            </Html>

            {/* Radar */}
            <Html position={[0, 0.8, 3.5]}>
                <button
                    onClick={() => setSelected("radar")}
                    className="bg-green-500 text-white px-2 py-1 rounded text-xs"
                >
                    📡 Radar
                </button>
            </Html>

            {/* GPS */}
            <Html position={[0, 3, 0]}>
                <button
                    onClick={() => setSelected("gps")}
                    className="bg-purple-500 text-white px-2 py-1 rounded text-xs"
                >
                    🛰 GPS
                </button>
            </Html>

            {/* AI */}
            <Html position={[0, 1.2, 0]}>
                <button
                    onClick={() => setSelected("ai")}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                >
                    🧠 AI
                </button>
            </Html>
        </>
    );
}

export default function CarModel() {
    const [selected, setSelected] = useState("camera");

    return (
        <div className="grid md:grid-cols-3 gap-8 h-full">

            <div className="md:col-span-2 h-[700px]">
                <Canvas camera={{ position: [0, 8, 20], fov: 45 }}>

                    <ambientLight intensity={2} />

                    <hemisphereLight intensity={2} />

                    <directionalLight
                        position={[20, 20, 20]}
                        intensity={5}
                    />

                    <Center>
                        <Model setSelected={setSelected} />
                    </Center>

                    <OrbitControls
                        makeDefault
                        enablePan={false}
                        minDistance={5}
                        maxDistance={25}
                    />

                </Canvas>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">

                {selected === "camera" && (
                    <>
                        <h3 className="text-2xl font-bold mb-4">
                            Front Camera
                        </h3>

                        <ul className="space-y-2">
                            <li>Lane Detection</li>
                            <li>Object Detection</li>
                            <li>Traffic Sign Recognition</li>
                            <li>Distance Estimation</li>
                        </ul>
                    </>
                )}

                {selected === "radar" && (
                    <>
                        <h3 className="text-2xl font-bold mb-4">
                            Radar System
                        </h3>

                        <ul className="space-y-2">
                            <li>Speed Tracking</li>
                            <li>Obstacle Detection</li>
                            <li>Collision Warning</li>
                            <li>Adaptive Cruise Control</li>
                        </ul>
                    </>
                )}

                {selected === "gps" && (
                    <>
                        <h3 className="text-2xl font-bold mb-4">
                            GPS Module
                        </h3>

                        <ul className="space-y-2">
                            <li>Navigation</li>
                            <li>Route Planning</li>
                            <li>Vehicle Localization</li>
                            <li>Map Matching</li>
                        </ul>
                    </>
                )}

                {selected === "ai" && (
                    <>
                        <h3 className="text-2xl font-bold mb-4">
                            AI Processing Unit
                        </h3>

                        <ul className="space-y-2">
                            <li>Sensor Fusion</li>
                            <li>Path Planning</li>
                            <li>Decision Making</li>
                            <li>Autonomous Assistance</li>
                        </ul>
                    </>
                )}

            </div>
            <div className="mt-8 border-t border-zinc-700 pt-6">

                <h4 className="text-xl font-bold mb-4">
                    Sensor Coverage
                </h4>

                <div className="space-y-3">

                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        Camera Vision
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        Radar Tracking
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        GPS Localization
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        AI Decision Engine
                    </div>

                </div>

            </div>
        </div>
    );
}