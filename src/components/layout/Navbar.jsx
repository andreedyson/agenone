import { useEffect, useState } from "react";
import { SquareMenu, X } from "lucide-react";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && openNav) {
        setOpenNav(false); // Close the mobile menu
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openNav]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="relative bg-main p-6 text-white md:py-8 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Navbar Logo */}
          <div>
            <a href="/" className="flex items-center gap-2 md:gap-3">
              <img
                src="/src/assets/logo.png"
                alt="Agenone Logo"
                className="w-9"
              />
              <p className="text-xl font-bold italic md:text-2xl">Agenone</p>
            </a>
          </div>
          {/* Navbar Desktop Links */}
          <div className="hidden items-center gap-10 text-base font-semibold md:flex md:text-lg">
            <a
              href="#hero"
              className={activeSection === "hero" ? "text-gradient" : ""}
            >
              Home
            </a>
            <a
              href="#services"
              className={activeSection === "services" ? "text-gradient" : ""}
            >
              Services
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "text-gradient" : ""}
            >
              About Us
            </a>
            <a
              href="#projects"
              className={activeSection === "projects" ? "text-gradient" : ""}
            >
              Projects
            </a>
          </div>

          {/* Navbar Contact Us Button */}
          <div>
            <a href="#contact">
              <button className="bg-gradient-main hidden h-[56px] w-[135px] rounded-full font-semibold duration-300 hover:opacity-70 md:block">
                Contact Us
              </button>
            </a>
          </div>
          {/* Navbar Menu Icon */}
          <div onClick={handleOpenNav} className="block md:hidden">
            {openNav ? <X size={32} /> : <SquareMenu size={32} />}
          </div>
        </nav>
        {/* Navbar Mobile Links */}
        <div
          className={`absolute left-0 top-[78px] flex h-screen w-full flex-col items-center gap-6 bg-main p-8 font-semibold duration-300 ${
            openNav
              ? "opacity-1 translate-x-0"
              : "-translate-x-[300%] opacity-0"
          }`}
          onClick={handleOpenNav}
        >
          <a
            href="#hero"
            className={activeSection === "hero" ? "text-gradient" : ""}
          >
            Home
          </a>
          <a
            href="#services"
            className={activeSection === "services" ? "text-gradient" : ""}
          >
            Services
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "text-gradient" : ""}
          >
            About Us
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "text-gradient" : ""}
          >
            Projects
          </a>
          <button className="gradient h-[36px] w-[100px] rounded-full text-sm font-semibold">
            Contact Us
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
