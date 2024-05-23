import Accordion from "../components/ui/Accordion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const ACCORDION_DATA = [
  {
    number: 1,
    name: "UI / UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas  commodi laboriosam iste quidem nostrum ratione, ducimus consequatur,numquam consequuntur, optio quam libero corrupti doloremque! Quos?",
    image: "/src/assets/service-img-1.png",
  },
  {
    number: 2,
    name: "Social Media Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas  commodi laboriosam iste quidem nostrum ratione, ducimus consequatur,numquam consequuntur, optio quam libero corrupti doloremque! Quos?",
    image: "/src/assets/service-img-2.jpg",
  },
  {
    number: 3,
    name: "Social Media Management",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas  commodi laboriosam iste quidem nostrum ratione, ducimus consequatur,numquam consequuntur, optio quam libero corrupti doloremque! Quos?",
    image: "/src/assets/service-img-3.jpg",
  },
  {
    number: 4,
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas  commodi laboriosam iste quidem nostrum ratione, ducimus consequatur,numquam consequuntur, optio quam libero corrupti doloremque! Quos?",
    image: "/src/assets/service-img-4.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordion",
        toggleActions: "play none none none",
        start: "top center",
      },
    });

    tl.from(".services-header", {
      y: 20,
      opacity: 0,
      stagger: 0.3,
    });

    tl.from(".accordion > *", {
      opacity: 0,
      x: -10,
      ease: "power3.out",
      stagger: {
        amount: 0.8,
        from: "right",
      },
    });
  }, []);

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center gap-8 px-6 py-20 md:gap-16 md:py-[120px] lg:px-20"
    >
      {/* Services Header */}
      <div className="services-header">
        <h3 className="text-center text-4xl font-bold md:text-6xl 2xl:text-7xl">
          The Services We Offer <span className="text-gradient">For You</span>
        </h3>
      </div>
      <div className="accordion flex w-full flex-col gap-4 md:gap-6">
        {ACCORDION_DATA.map((acc) => (
          <div key={acc.name}>
            <Accordion
              number={acc.number}
              name={acc.name}
              description={acc.description}
              image={acc.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
