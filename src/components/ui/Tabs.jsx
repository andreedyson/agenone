import { useEffect, useState } from "react";
import { abbreviateTitle } from "../../utils/helpers";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Tabs({ tabs }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-tabs",
        toggleActions: "play none none none",
        start: "top 80%",
      },
    });

    tl.from(".tabs-title > *", {
      x: "-50",
      opacity: 0,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="projects-tabs flex w-full flex-col items-center gap-8 md:gap-12">
      <div className="tabs-title flex gap-4 rounded-full bg-white p-2 md:px-4 md:py-2">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex cursor-pointer items-center justify-center rounded-full px-4 py-2 text-center text-[#6D7079] md:px-8 md:py-3 ${activeTabIndex === index ? "bg-gradient-main text-white" : ""}`}
            onClick={() => setActiveTabIndex(index)}
          >
            {isSmallScreen ? abbreviateTitle(tab.title) : tab.title}
          </div>
        ))}
      </div>
      <div className="tabs-content grid w-full grid-cols-1 place-content-between gap-8 md:grid-cols-2">
        {tabs[activeTabIndex] &&
          tabs[activeTabIndex].content.map((content, index) => (
            <div key={index}>
              <div className="space-y-4 rounded-3xl border border-slate-700 bg-[#181D2A] p-3 md:w-full md:p-4 md:pb-5">
                <div className="group relative h-[300px] w-full cursor-pointer overflow-hidden rounded-xl md:h-[550px]">
                  <img
                    src={content.img}
                    alt={content.title}
                    loading="lazy"
                    className="h-[300px] w-full rounded-xl object-cover md:h-[550px]"
                  />
                  {/* Black Overlay */}
                  <div className="absolute inset-0 isolate flex items-center justify-center bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                  <div className="absolute inset-0 isolate flex items-center justify-center text-[#1b9e77] opacity-0 duration-200 group-hover:opacity-100">
                    <ArrowUpRight
                      size={128}
                      className="rounded-full border-8 border-[#1b9e77] bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-lg font-bold md:text-2xl">
                    {content.title}
                  </h4>
                  <p className="line-clamp-3 h-[72px] text-justify text-gray-400 md:h-[84px] md:text-lg">
                    {content.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tabs;
