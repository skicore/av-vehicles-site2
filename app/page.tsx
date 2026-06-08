"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CarModel from "@/components/CarModel";

export default function Home() {
  const [aiEnabled, setAiEnabled] = useState(false);
  const [bikeAiEnabled, setBikeAiEnabled] = useState(false);

  return (
    <main className="bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

          <h1 className="font-bold text-xl">
            AutoVision AI
          </h1>

          <div className="flex gap-6">
            <a href="#car-demo">Car Demo</a>
            <a href="#bike-demo">Bike Demo</a>
            <a href="#technology">Technology</a>
            <a href="#vehicle3d">3D Vehicle</a>
          </div>

        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            The Future of Autonomous Mobility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl max-w-3xl text-gray-200"
          >
            AI-powered systems that help drivers detect hazards,
            analyse roads and improve safety on Indian roads.
          </motion.p>

          <div className="flex gap-4 mt-8">

            <a
              href="#car-demo"
              className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-400"
            >
              View Car Demo
            </a>

            <a
              href="#vehicle3d"
              className="border border-white px-6 py-3 rounded-xl"
            >
              Explore 3D Vehicle
            </a>

          </div>

        </div>

      </section>

      {/* AUTONOMOUS VEHICLES */}
      <section className="min-h-screen flex items-center justify-center px-8">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <h2 className="text-5xl font-bold mb-8">
            What Are Autonomous Vehicles?
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Autonomous vehicles use cameras, sensors, radar systems,
            artificial intelligence and real-time decision making
            to understand their surroundings.
          </p>

          <p className="text-xl text-gray-300 leading-relaxed">
            These systems continuously analyse roads, vehicles,
            pedestrians and obstacles to improve safety and
            assist drivers.
          </p>

        </motion.div>

      </section>

      {/* CAR AI DEMO */}

      <section
        id="car-demo"
        className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 pb-32"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-10 text-center"
        >
          Human Driving vs AI Assisted Driving
        </motion.h2>

        <button
          onClick={() => setAiEnabled(!aiEnabled)}
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl mb-8"
        >
          {aiEnabled ? "Disable AI Assistance" : "Enable AI Assistance"}
        </button>

        <div className="relative w-full max-w-6xl">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl w-full"
          >
            <source src="/videos/dashcamvideo.mp4" type="video/mp4" />
          </video>

          {aiEnabled && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-20 left-20 border-2 border-red-500 bg-black/70 backdrop-blur-sm p-3 rounded-xl"
              >
                Pedestrian
                <br />
                12.4m
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-32 right-20 border-2 border-cyan-400 bg-black/70 backdrop-blur-sm p-3 rounded-xl"
              >
                Vehicle
                <br />
                24.8m
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute bottom-20 left-1/2 border-2 border-yellow-400 bg-black/70 backdrop-blur-sm p-3 rounded-xl"
              >
                Pothole
                <br />
                7.2m
              </motion.div>

              {/* Lane Detection */}
              <div className="absolute bottom-0 left-[42%] w-1 h-60 bg-cyan-400 opacity-70"></div>
              <div className="absolute bottom-0 right-[42%] w-1 h-60 bg-cyan-400 opacity-70"></div>
            </>
          )}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full max-w-5xl">

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h3>Objects</h3>
            <p className="text-3xl font-bold">12</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h3>Vehicles</h3>
            <p className="text-3xl font-bold">8</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h3>Pedestrians</h3>
            <p className="text-3xl font-bold">3</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h3>Potholes</h3>
            <p className="text-3xl font-bold">1</p>
          </div>

        </div>


        <div className="grid md:grid-cols-5 gap-4 mt-10 w-full max-w-6xl">

          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">Speed</p>
            <p className="text-3xl font-bold">48 km/h</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">Objects</p>
            <p className="text-3xl font-bold">12</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">Lane</p>
            <p className="text-3xl font-bold">Tracked</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">Risk</p>
            <p className="text-3xl font-bold">Low</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <p className="text-gray-400">Weather</p>
            <p className="text-3xl font-bold">Clear</p>
          </div>

        </div>

      </section>

      {/* BIKE AI DEMO */}
      <section
        id="bike-demo"
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-24"
      >

        <h2 className="text-5xl font-bold mb-10 text-center">
          AI Assistance For Two Wheelers
        </h2>
        <button
          onClick={() => setBikeAiEnabled(!bikeAiEnabled)}
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl mb-8"
        >
          {bikeAiEnabled ? "Disable AI Assistance" : "Enable AI Assistance"}
        </button>

        <div className="relative w-full max-w-6xl">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl w-full"
          >
            <source src="/videos/bikedashcam.mp4" type="video/mp4" />
          </video>

          {bikeAiEnabled && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-16 left-16 border-2 border-red-400 bg-black/70 backdrop-blur-sm p-3 rounded-xl"
              >
                Pedestrian
                <br />
                8.3m
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-32 right-20 border-2 border-cyan-400 bg-black/70 backdrop-blur-sm p-3 rounded-xl"
              >
                Motorcycle
                <br />
                5.4m
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute bottom-16 left-1/2 border-2 border-yellow-400 bg-black/70 backdrop-blur-sm p-3 rounded-xl"
              >
                Road Damage
                <br />
                4.7m
              </motion.div>
            </>
          )}

        </div>

      </section>
      <section className="min-h-screen bg-zinc-900 flex items-center justify-center px-8">

        <div className="max-w-5xl w-full">

          <h2 className="text-5xl font-bold mb-12 text-center">
            How Autonomous Driving Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Cameras</h3>
              <p>Capture road conditions, vehicles, pedestrians and obstacles.</p>
            </div>

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">AI Processing</h3>
              <p>Identifies objects, estimates distance and predicts movement.</p>
            </div>

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Decision Engine</h3>
              <p>Makes real-time driving and safety decisions.</p>
            </div>

          </div>

          <div className="flex flex-col items-center mt-12 text-xl gap-4">
            <div>Camera</div>
            <div>↓</div>
            <div>Object Detection</div>
            <div>↓</div>
            <div>Distance Estimation</div>
            <div>↓</div>
            <div>Path Planning</div>
            <div>↓</div>
            <div>Decision Making</div>
            <div>↓</div>
            <div>Vehicle Control</div>
          </div>

        </div>

      </section>

      {/* INDIAN USE CASES */}
      <section className="min-h-screen bg-zinc-950 flex items-center justify-center px-8">

        <div className="max-w-6xl w-full">

          <h2 className="text-5xl font-bold mb-12 text-center">
            AI Applications On Indian Roads
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Pothole Detection</h3>
              <p>Warns drivers and riders about damaged roads.</p>
            </div>

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Pedestrian Tracking</h3>
              <p>Detects sudden movement and reduces collision risk.</p>
            </div>

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Animal Detection</h3>
              <p>Identifies animals crossing roads.</p>
            </div>

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Blind Spot Monitoring</h3>
              <p>Alerts drivers to hidden vehicles.</p>
            </div>

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Emergency Braking</h3>
              <p>Prevents collisions by reacting faster than humans.</p>
            </div>

            <div className="bg-black p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Rider Assistance</h3>
              <p>Provides warnings and navigation support for two-wheelers.</p>
            </div>

          </div>

        </div>

      </section>

      {/* INDIAN ROADS */}
      <section className="min-h-screen flex items-center bg-black">

        <div className="max-w-5xl mx-auto px-8">

          <h2 className="text-5xl font-bold mb-8">
            Challenges On Indian Roads
          </h2>

          <ul className="text-xl text-gray-300 space-y-4">
            <li>Heavy traffic congestion</li>
            <li>Potholes and damaged roads</li>
            <li>Mixed traffic conditions</li>
            <li>Unexpected pedestrian movement</li>
            <li>Animal crossings</li>
            <li>Weather-related visibility challenges</li>
          </ul>

        </div>

      </section>
      {/* 3D VEHICLE */}
      <section
        id="vehicle3d"
        className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center px-8">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-8 text-center"
        >
          Interactive Autonomous Vehicle System
        </motion.h2>

        <p className="text-xl text-gray-300 text-center max-w-4xl mb-10">
          Click on the sensors attached to the Mercedes AMG GT3
          to understand how autonomous vehicles perceive and
          analyse the world around them.
        </p>

        <div className="w-full max-w-7xl">
          <CarModel />
        </div>

      </section>

      {/* FUTURE */}
      <section className="min-h-screen bg-zinc-950 flex items-center justify-center">

        <div className="max-w-5xl text-center px-8">

          <h2 className="text-5xl font-bold mb-8">
            The Future Of Mobility
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            AI-assisted transportation can significantly reduce
            accidents, improve traffic flow and make roads safer
            for drivers, riders and pedestrians across India.
          </p>

        </div>

      </section>
      <footer className="bg-black border-t border-zinc-800 py-12 text-center">

        <h3 className="text-3xl font-bold">
          AutoVision AI
        </h3>

        <p className="text-gray-400 mt-4">
          Demonstrating AI-assisted mobility systems for safer Indian roads.
        </p>

        <p className="text-gray-500 mt-2">
          Built using Next.js, Three.js, Framer Motion and Computer Vision concepts.
        </p>
        <div className="mt-8">
          <p className="text-lg font-semibold">
            Developed By
          </p>

          <p className="text-cyan-400 text-2xl font-bold mt-2">
            Piyush bs
          </p>
        </div>

      </footer>
    </main>
  );
}