import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Company() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#company",
        toggleActions: "play none none none",
        start: "top center",
      },
    });

    tl.from(".company-grid  > *", {
      opacity: 0,
      x: "-50",
      stagger: 0.3,
    });
  }, []);
  return (
    <section
      id="company"
      className="flex h-full w-full flex-col items-center justify-center gap-8 bg-main px-6 py-8 text-white lg:px-20 xl:gap-16"
    >
      <div className="company-grid grid w-full grid-cols-2 place-content-between place-items-center gap-12 md:grid-cols-3 md:gap-16 lg:grid-cols-6">
        <div>
          <img src="/src/assets/brands/slack.png" alt="Slack" />
        </div>
        <div>
          <img src="/src/assets/brands/google.png" alt="Google" />
        </div>
        <div>
          <img src="/src/assets/brands/netflix.png" alt="Netflix" />
        </div>
        <div>
          <img src="/src/assets/brands/airbnb.png" alt="AirBNB" />
        </div>
        <div>
          <img src="/src/assets/brands/adobe.png" alt="Adobe" />
        </div>
        <div>
          <img src="/src/assets/brands/microsoft.png" alt="Microsoft" />
        </div>
      </div>
    </section>
  );
}

export default Company;
