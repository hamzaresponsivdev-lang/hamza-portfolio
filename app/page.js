"use client";
import image from "next/image";

import {
  ExternalLink,
  Mail,
  FileText,
  Code2,
  Cpu,
  Wrench,
  GraduationCap,
  Briefcase,
  Code,
} from "lucide-react";

export default function ProfessionalPortfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* ================= NAVIGATION BAR ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
            Seeking Web Development Internships & Full-Time Roles
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className=" bg-clip-text">Hamza Abbasi</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            Web Developer specializing in building high performance, responsive
            web applications with Next.js, React,Node.js and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-lg shadow-cyan-500/20"
            >
              Explore Projects
            </a>
            <a
              href="https://www.fiverr.com/hamza_abbasi0_4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-slate-800 transition duration-200"
            >
              Fiverr Profile
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
              I am an undergraduate student pursuing an Associate Degree Program
              in Computer Science at Virtual University. My academic journey has
              provided me with a rigorous foundation in core computer science
              principles, object-oriented programming, and software engineering
              design patterns.
            </p>
            <p>
              Beyond the classroom, I focus intensely on modern front-end
              engineering. I build responsive web architectures, optimize user
              interfaces for high-speed accessibility, and implement clean
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
            {/* Frontend Card */}
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

            {/* Programming Languages Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Cpu size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-200">
                Core Languages & Logic
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• JavaScript (ES6+) & TypeScript</li>
                <li>• C++ (OOP, Templates, STL)</li>
                <li>• Java (Swing, Event Listeners)</li>
                <li>• Data Structures & Algorithms</li>
              </ul>
            </div>

            {/* Tools & Workflow Card */}
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
                <li>• Linux System Administration</li>
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
            {/* Project 1: FitLife Gym App */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition">
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                <img
                  src="/gym-app.png"
                  alt="FitLife Gym Application Screenshot"
                  className="object-cover w-full h-full hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Full-Stack Web App
                  </span>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <a
                      href="https://github.com/hamzaresponsivdev-lang/fitlife-gym-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="GitHub Repository"
                    >
                      <Code size={20} />
                    </a>
                    <a
                      href="https://fitlife-gym-ap.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                      title="Live Preview"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100">
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

            {/* Project 2: Automotive Dealership Portal */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition">
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-sm">
                  [Car Dealership Preview]
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Front-End Interface
                  </span>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <span className="text-xs text-slate-500 font-mono">
                      Live on Netlify
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  Automotive Dealership Portal
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developed a clean, user-centric front-end interface for
                  automotive browsing, featuring responsive grid structures,
                  filter options, and custom interactive buttons.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    HTML5 / CSS3
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    JavaScript
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Responsive UI
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3: Task Management Dashboard */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition">
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-sm">
                  [Dashboard Preview]
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Web Application
                  </span>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <span className="text-xs text-slate-500 font-mono">
                      React / Tailwind
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  Task Management Dashboard
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built an interactive productivity dashboard with state
                  management, allowing users to organize, filter, and track
                  daily development workflows efficiently.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    React.js
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Tailwind CSS
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    Local Storage
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4: Weather Forecasting App */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition">
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-mono text-sm">
                  [Weather App Preview]
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    API Integration
                  </span>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <span className="text-xs text-slate-500 font-mono">
                      REST API
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-100">
                  Global Weather Explorer
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Created a dynamic weather application that fetches real-time
                  meteorological data via RESTful APIs, rendering clean
                  condition cards and forecast metrics.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    JavaScript
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    REST API
                  </span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    CSS3
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
              Associate Degree Program (ADP) in Computer Science
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
              Front-End Web Developer & Computer Science Student
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <a
              href="https://github.com/hamzaresponsivdev-lang/fitlife-gym-app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.fiverr.com/hamza_abbasi0_4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Fiverr
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
    </div>
  );
}
