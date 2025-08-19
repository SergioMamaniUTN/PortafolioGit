// src/App.jsx
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact"; // <- corregido

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
