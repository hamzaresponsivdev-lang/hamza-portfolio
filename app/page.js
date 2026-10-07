"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  ExternalLink,
  Mail,
  Code2,
  Cpu,
  Wrench,
  GraduationCap,
  Code,
  ShoppingBag,
  Activity,
  School,
  Brain,
  X,
  ZoomIn,
} from "lucide-react";

export default function ProfessionalPortfolio() {
  // Slider state for E-Commerce Store images
  const storeImages = ["/full.png", "/front.png", "/order.png"];
  const [storeIdx, setStoreIdx] = useState(0);

  // Slider state for FitLife Gym App images
  const gymImages = ["/GymA.png", "/GymF.png", "/GymP.png"];
  const [gymIdx, setGymIdx] = useState(0);

  // Slider state for Kids Foundation School images
  const schoolImages = [
    "/school1.png",
    "/school2.png",
    "/school3.png",
    "/school4.png",
  ];
  const [schoolIdx, setSchoolIdx] = useState(0);

  // Slider state for AI Quiz Generator images
  const quizImages = ["/Ai1.png", "/Ai2.png", "/Ai3.png"];
  const [quizIdx, setQuizIdx] = useState(0);

  // Modal and Zoom states
  const [activeModal, setActiveModal] = useState(null); // 'store', 'gym', 'school', 'quiz'
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto-sliding effects
  useEffect(() => {
    if (activeModal) return;
    const storeTimer = setInterval(() => {
      setStoreIdx((prev) => (prev + 1) % storeImages.length);
    }, 3500);

    const gymTimer = setInterval(() => {
      setGymIdx((prev) => (prev + 1) % gymImages.length);
    }, 4000);

    const schoolTimer = setInterval(() => {
      setSchoolIdx((prev) => (prev + 1) % schoolImages.length);
    }, 3800);

    const quizTimer = setInterval(() => {
      setQuizIdx((prev) => (prev + 1) % quizImages.length);
    }, 4200);

    return () => {
      clearInterval(storeTimer);
      clearInterval(gymTimer);
      clearInterval(schoolTimer);
      clearInterval(quizTimer);
    };
  }, [
    storeImages.length,
    gymImages.length,
    schoolImages.length,
    quizImages.length,
    activeModal,
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* ================= NAVIGATION BAR ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hamza Abbasi
          </span>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:hamza.responsiv.dev@gmail.com"
              className="text-xs md:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg transition shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Full stack web developer
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hamza Abbasi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            Web Developer specialized in building high performance, responsive
            web applications with Next.js, React, Node.js and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-lg shadow-cyan-500/20"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="border-t border-slate-800/80 bg-slate-900/30 py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-400 leading-relaxed">
            <p>
              I am an undergraduate student pursuing a Bsc degree in Computer
              Science at Virtual University. My academic journey has provided me
              with a rigorous foundation in core computer science principles,
              object-oriented programming, and software engineering design
              patterns.
            </p>
            <p>
              Beyond the classroom, I focus intensely on modern web development
              practices. I build responsive web architectures, optimize user
              interfaces for high speed accessibility, and implement clean
              component structures using JavaScript frameworks and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SKILLS SECTION ================= */}
      <section id="skills" className="border-t border-slate-800/80 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Code2 size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-200">
                Front-End Development
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Next.js & React Ecosystem</li>
                <li>• Tailwind CSS & Responsive Design</li>
                <li>• HTML5, Modern CSS Layouts</li>
                <li>• DOM Manipulation & Event Handling</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Cpu size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-200">
                Core Languages & Logic
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• JavaScript (ES6+) </li>
                <li>• C++ (OOP, Templates, STL)</li>
                <li>• Java (Swing, Event Listeners)</li>
                <li>• Data Structures & Algorithms</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Wrench size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-200">
                Tools & Deployment
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Git & GitHub Version Control</li>
                <li>• Netlify Cloud Deployment</li>
                <li>• MongoDB Database Integration</li>
                <li>• VS Code Environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="border-t border-slate-800/80 bg-slate-900/30 py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-slate-400 mt-2">
                Production-ready applications built with clean code and deployed
                live.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: Prime Collection E-Commerce Store */}
            <div
              onClick={() => setActiveModal("store")}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 transition cursor-pointer group shadow-xl"
            >
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                {storeImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === storeIdx
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Store App Screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="absolute bottom-2 right-2 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-cyan-400 font-medium border border-slate-800">
                  Click for Details & View
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <ShoppingBag size={13} /> E-Commerce Store App
                  </span>
                  <div
                    className="flex items-center space-x-3 text-slate-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href="https://github.com/hamzaresponsivdev-lang/nextjs-store-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="GitHub"
                    >
                      <Code size={18} />
                    </a>
                    <a
                      href="https://prime-collection-store.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="Live"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition">
                  Prime Collection E-Commerce Store
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Engineered a feature-rich online shopping store powered by
                  Next.js App Router, MongoDB database product seeding, and
                  optimized Tailwind CSS UI design.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Next.js
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    MongoDB
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Netlify
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2: FitLife Gym App */}
            <div
              onClick={() => setActiveModal("gym")}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 transition cursor-pointer group shadow-xl"
            >
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                {gymImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === gymIdx
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`FitLife Gym Screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="absolute bottom-2 right-2 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-cyan-400 font-medium border border-slate-800">
                  Click for Details & View
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <Activity size={13} /> Full-Stack App
                  </span>
                  <div
                    className="flex items-center space-x-3 text-slate-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href="https://github.com/hamzaresponsivdev-lang/fitlife-gym-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="GitHub"
                    >
                      <Code size={18} />
                    </a>
                    <a
                      href="https://fitlife-gym-ap.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="Live"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition">
                  FitLife Gym Application
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Engineered a fully responsive fitness center platform
                  featuring dynamic class timetables, interactive membership
                  navigation, and optimized site architecture.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Next.js
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Netlify
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3: Kids Foundation School Web */}
            <div
              onClick={() => setActiveModal("school")}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition cursor-pointer group shadow-xl"
            >
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                {schoolImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === schoolIdx
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`School App Screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="absolute bottom-2 right-2 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-blue-400 font-medium border border-slate-800">
                  Click for Details & View
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                    <School size={13} /> Educational Web Portal
                  </span>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <span className="text-xs text-slate-500 font-mono">
                      Institutional Project
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition">
                  Kids Foundation School Web
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed a dedicated informational portal for Kids Foundation
                  School, featuring structured academic outlines, admissions
                  guidance, and student resources.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    React
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4: AI Quiz Generator */}
            <div
              onClick={() => setActiveModal("quiz")}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 transition cursor-pointer group shadow-xl"
            >
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                {quizImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === quizIdx
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`AI Quiz Screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="absolute bottom-2 right-2 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-cyan-400 font-medium border border-slate-800">
                  Click for Details & View
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                    <Brain size={13} /> AI Powered App
                  </span>
                  <div
                    className="flex items-center space-x-3 text-slate-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href="https://github.com/hamzaresponsivdev-lang/ai-quiz-generator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="GitHub"
                    >
                      <Code size={18} />
                    </a>
                    <a
                      href="https://ai-quiz-generator-1.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="Live Preview"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition">
                  AI Quiz Generator
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Engineered an AI-powered interactive quiz generator using
                  Next.js App Router, Google Gemini API, and structured JSON
                  output schemas for instant quiz creation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Next.js
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Gemini API
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Netlify
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION SECTION ================= */}
      <section id="education" className="border-t border-slate-800/80 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10 flex items-center gap-3">
            <GraduationCap className="text-cyan-400" size={32} /> Education
          </h2>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 md:p-8 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h3 className="text-lg md:text-xl font-bold text-slate-100">
                Virtual University of Pakistan
              </h3>
              <span className="text-sm font-medium text-cyan-400">
                Current (Final Semester)
              </span>
            </div>
            <p className="text-slate-300 font-medium">
              Bachelor of Science (BSc) in Computer Science
            </p>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Core Coursework: Object-Oriented Programming (C++, Java), Software
              Engineering Design Principles, Data Communication, Web
              Development, and Database Systems.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-bold text-slate-200">Hamza Abbasi</span>
            <p className="text-sm text-slate-500 mt-1">
              Full Stack Web Developer | Next.js, React, Node.js, Tailwind CSS
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <a
              href="https://github.com/hamzaresponsivdev-lang/ai-quiz-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:hamza.responsiv.dev@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* ================= E-COMMERCE STORE MODAL ================= */}
      {activeModal === "store" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl space-y-6 text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition z-10"
            >
              <X size={20} />
            </button>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Project Deep Dive
              </span>
              <h2 className="text-2xl font-bold pt-2">
                Prime Collection E-Commerce Store App
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {storeImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="relative h-28 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer group"
                  title="Click to zoom"
                >
                  <Image
                    src={imgSrc}
                    alt="Store view"
                    fill
                    sizes="33vw"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-cyan-400">
                    <ZoomIn size={20} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center">
              💡 Click any photo above to inspect it in high resolution.
            </p>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                The Prime Collection Store is a modern, full-scale e-commerce
                web application built using the Next.js App Router, MongoDB
                product seeding, and Tailwind CSS.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href="https://github.com/hamzaresponsivdev-lang/nextjs-store-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-medium transition flex items-center gap-2"
              >
                <Code size={16} /> Repository
              </a>
              <a
                href="https://prime-collection-store.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold transition flex items-center gap-2"
              >
                <ExternalLink size={16} /> Live Preview
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= FITLIFE GYM APP MODAL ================= */}
      {activeModal === "gym" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl space-y-6 text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition z-10"
            >
              <X size={20} />
            </button>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Project Deep Dive
              </span>
              <h2 className="text-2xl font-bold pt-2">
                FitLife Gym Application
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {gymImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="relative h-28 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer group"
                  title="Click to zoom"
                >
                  <Image
                    src={imgSrc}
                    alt="Gym view"
                    fill
                    sizes="33vw"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-cyan-400">
                    <ZoomIn size={20} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center">
              💡 Click any photo above to inspect it in high resolution.
            </p>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                The FitLife Gym platform is a high-performance fitness center
                web app designed with Next.js and Tailwind CSS, featuring
                dynamic class scheduling and membership management.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href="https://github.com/hamzaresponsivdev-lang/fitlife-gym-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-medium transition flex items-center gap-2"
              >
                <Code size={16} /> Repository
              </a>
              <a
                href="https://fitlife-gym-ap.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold transition flex items-center gap-2"
              >
                <ExternalLink size={16} /> Live Preview
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= KIDS FOUNDATION SCHOOL MODAL ================= */}
      {activeModal === "school" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl space-y-6 text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition z-10"
            >
              <X size={20} />
            </button>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Project Deep Dive
              </span>
              <h2 className="text-2xl font-bold pt-2">
                Kids Foundation School Web Portal
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {schoolImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="relative h-28 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer group"
                  title="Click to zoom"
                >
                  <Image
                    src={imgSrc}
                    alt="School view"
                    fill
                    sizes="25vw"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-blue-400 z-10">
                    <ZoomIn size={20} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center">
              💡 Click any photo above to inspect it in high resolution.
            </p>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                An institutional web portal developed for Kids Foundation
                School. Designed with a clean, engaging layout to present
                academic programs, faculty information, extracurricular
                activities, and admission procedures for parents and students.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= AI QUIZ GENERATOR MODAL ================= */}
      {activeModal === "quiz" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl space-y-6 text-slate-100">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition z-10"
            >
              <X size={20} />
            </button>
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Project Deep Dive
              </span>
              <h2 className="text-2xl font-bold pt-2">AI Quiz Generator App</h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {quizImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="relative h-28 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer group"
                  title="Click to zoom"
                >
                  <Image
                    src={imgSrc}
                    alt="Quiz view"
                    fill
                    sizes="33vw"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-cyan-400 z-10">
                    <ZoomIn size={20} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center">
              💡 Click any photo above to inspect it in high resolution.
            </p>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                An intelligent web application built using Next.js App Router
                and the Google Gemini API. It takes any topic entered by the
                user and dynamically generates structured, interactive
                multiple-choice quizzes with real-time feedback and clean UI
                styling.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href="https://github.com/hamzaresponsivdev-lang/ai-quiz-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-medium transition flex items-center gap-2"
              >
                <Code size={16} /> Repository
              </a>
              <a
                href="https://ai-quiz-generator-1.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold transition flex items-center gap-2"
              >
                <ExternalLink size={16} /> Live Preview
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= 70% ZOOM LIGHTBOX VIEWER ================= */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] md:w-[70%] h-[75vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-2"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 text-slate-300 hover:text-white bg-slate-950/80 p-2.5 rounded-full transition shadow-lg"
              title="Close"
            >
              <X size={22} />
            </button>
            <div className="relative w-full h-full overflow-auto flex items-center justify-center cursor-zoom-in">
              <div className="relative w-full h-full min-h-[400px]">
                <Image
                  src={selectedImage}
                  alt="Zoomed View"
                  fill
                  className="object-contain hover:scale-125 transition-transform duration-300 origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
