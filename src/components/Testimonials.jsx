import { useGSAP } from "@gsap/react";
import TestimonialCard from "./ui/TestimonialCard";
import gsap from "gsap";

function Testimonials() {
  const TESTI_DUMMY = [
    {
      reviewer: "Andre Edyson",
      review:
        "Impressed! The website layout is clear and engaging. They showcase their work effectively, making it easy to see how they can help my business.",
      occupation: "Earth Wanderer",
      profileImg: "/assets/person/person-1.jpg",
    },
    {
      reviewer: "Diana Dauri",
      review:
        "Found my perfect partner! Their services section perfectly matched my needs. I loved the client testimonials and contacted them right away.",
      occupation: "CEO CineReel",
      profileImg: "/assets/person/person-2.jpg",
    },
    {
      reviewer: "Meliska Antonella",
      review:
        "Stand out from the crowd!  This website makes a strong first impression. It's clear they understand digital marketing and can deliver results.",
      occupation: "FinTrack Manager",
      profileImg: "/assets/person/person-3.jpg",
    },
    {
      reviewer: "Anthony Werner",
      review:
        "Expertise speaks volumes! The experience stats are impressive. It gives me confidence that they can handle any digital challenge I throw their way.",
      occupation: "CFO Destinize",
      profileImg: "/assets/person/person-4.jpg",
    },
    {
      reviewer: "Jimmy Cooks",
      review:
        "Seamless experience! The website is easy to navigate and informative.  I learned everything I needed to know about their services and contacted them for a consultation.",
      occupation: "COO MakeMoney",
      profileImg: "/assets/person/person-5.jpg",
    },
    {
      reviewer: "Glenn Franklin",
      review:
        "Makes you want to work with them! The client portfolio is stunning. It showcases their creativity and ability to deliver exceptional projects.",
      occupation: "CFO Suxz",
      profileImg: "/assets/person/person-6.jpg",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testi-header",
        toggleActions: "play none none none",
        start: "top 85%",
      },
    });

    tl.from(".testi-header > *", {
      x: "-50",
      opacity: 0,
      stagger: 0.3,
    });

    tl.from(".testi-grid > *", {
      opacity: 0,
      x: "-30",
      stagger: 0.4,
    });
  }, []);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-8 px-6 py-20 md:py-[120px] lg:px-20 xl:gap-16">
      <div className="testi-header flex flex-col items-center gap-4 md:gap-8">
        <h3 className="text-center text-4xl font-bold md:text-6xl 2xl:text-7xl">
          What People Say <span className="text-gradient">About Us?</span>
        </h3>
        <p className="text-center text-sm md:max-w-[700px] md:text-xl">
          Discover what our satisfied customers have to say about their
          experiences with our service.
        </p>
      </div>
      <div className="testi-grid grid w-full grid-cols-1 place-content-between gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {TESTI_DUMMY.map((testi, index) => (
          <div key={index}>
            <TestimonialCard
              reviewer={testi.reviewer}
              review={testi.review}
              occupation={testi.occupation}
              profileImg={testi.profileImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
