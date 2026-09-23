import Background from "./components/Background";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import TechStack from "./components/sections/TechStack";
import Timeline from "./components/sections/Timeline";
import { ToastProvider } from "./components/ui/Toast";

export default function App() {
  return (
    <ToastProvider>
      <Background />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Services />
        <Divider />
        <Timeline />
        <Divider />
        <TechStack />
        <Divider />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </ToastProvider>
  );
}

/** Garis pemisah halus antar section. */
function Divider() {
  return (
    <div aria-hidden="true" className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="h-px w-full hairline" />
    </div>
  );
}
