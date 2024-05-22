import "./index.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Company from "./components/Company";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Company />
      <Testimonials />
    </div>
  );
}

export default App;
