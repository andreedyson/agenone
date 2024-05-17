import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-grid",
        toggleActions: "play none none none",
      },
    });

    tl.from(".grid-number", {
      textContent: 0,
      duration: 2,
      ease: "power1.easeIn",
      snap: { textContent: 1 },
      stagger: 0.8,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative flex h-full w-full flex-col items-center justify-center gap-8 px-6 py-10 md:py-[100px] lg:px-20 xl:gap-16"
    >
      <div>
        <p className="text-2xl">
          We are passionate about helping businesses grow and succeed in the
          digital age. We take pride in our work and strive to exceed your
          expectations every time.
        </p>
      </div>
      {/* About Grid */}
      <div className="about-grid grid w-full grid-cols-1 place-content-between place-items-center gap-6 rounded-2xl bg-gradient-to-br from-[#38C682] to-[#00796D] p-6 text-white md:grid-cols-4 md:px-20 md:py-8">
        <div className="space-y-3 text-center">
          <div className="flex items-center  justify-center text-5xl font-bold md:text-6xl lg:text-7xl">
            <h3 className="grid-number">10</h3>
            <span>+</span>
          </div>
          <p className="text-xs md:text-xl lg:text-2xl">Years of Experience</p>
        </div>
        <div className="space-y-3 text-center">
          <div className="flex items-center  justify-center text-5xl font-bold md:text-6xl lg:text-7xl">
            <h3 className="grid-number">45</h3>
            <span>+</span>
          </div>
          <p className="text-xs md:text-xl lg:text-2xl">Projects Completed</p>
        </div>
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center text-5xl font-bold md:text-6xl lg:text-7xl">
            <h3 className="grid-number">50</h3>
            <span>+</span>
          </div>
          <p className="text-xs md:text-xl lg:text-2xl">Satisfied Client</p>
        </div>
        <div className="space-y-3 text-center">
          <h3 className="grid-number text-5xl font-bold md:text-6xl lg:text-7xl">
            15
          </h3>
          <p className="text-xs md:text-xl lg:text-2xl">Award Achieved</p>
        </div>
      </div>

      <div className="absolute hidden h-full w-full max-sm:block">
        <img
          src="/src/assets/about-bg-mobile.png"
          alt="About BG Mobile"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute hidden h-full w-full items-center justify-center sm:flex">
        <img
          src="/src/assets/about-bg-desktop.png"
          alt="About BG Desktop"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default About;
