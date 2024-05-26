import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Tabs from "./ui/Tabs";

const tabsData = [
  {
    title: "UI/UX Design",
    content: [
      {
        title: "Mobile App Design",
        img: "/assets/projects/uiux-1.jpg",
        description:
          "Crafted user-centered mobile app experiences.  Focused on intuitive navigation, clear UI design, and engaging interactions. Leveraged user research to optimize usability and ensure a seamless user journey.",
      },
      {
        title: "Web Design",
        img: "/assets/projects/uiux-2.jpg",
        description:
          "Designed user-friendly and visually appealing websites. Prioritized clear information architecture, intuitive navigation, and responsive design for optimal user experience across all devices.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    content: [
      {
        title: "Content Marketing Strategy",
        img: "/assets/projects/sm-1.jpg",
        description:
          "Developed a targeted content marketing strategy that attracted qualified leads. Created engaging blog posts, infographics, and social media content aligned with user interests and search intent. This resulted in a 40% increase in website leads for the client.",
      },
      {
        title: "Email Marketing Campaign",
        img: "/assets/projects/sm-2.jpg",
        description:
          "Segmented customer email lists and crafted personalized email campaigns promoting relevant products and special offers. Optimized email content and subject lines for improved open rates and click-through rates. This e-commerce email marketing campaign led to a 25% increase in sales for the online store.",
      },
    ],
  },
  {
    title: "Socmed Management",
    content: [
      {
        title: "Grew Community and Engagement",
        img: "/assets/projects/dm-1.jpg",
        description:
          "Developed and executed a social media strategy to cultivate a thriving online community for an e-commerce brand. Implemented engaging content formats, fostered brand interaction, and responded promptly to customer inquiries. This strategy resulted in a 30% increase in follower engagement and brand loyalty.",
      },
      {
        title: "Influencer Marketing Campaign",
        img: "/assets/projects/dm-2.jpg",
        description:
          "Identified and collaborated with relevant social media influencers to promote a client's website. Created engaging content featuring influencer endorsements and product placements. This influencer marketing campaign drove significant website traffic growth, leading to a 50% increase in website visits.",
      },
    ],
  },
  {
    title: "Web Development",
    content: [
      {
        title: "MERN Stacks App",
        img: "/assets/projects/wd-1.jpg",
        description:
          "Built dynamic and scalable web applications using the MERN stack.  This development approach utilizes MongoDB for flexible data storage, Express.js for server-side scripting, React.js for user interface creation, and Node.js for a unified JavaScript environment. The MERN stack allows for rapid development, streamlined code management, and efficient real-time updates, making it ideal for building robust and engaging web applications.",
      },
      {
        title: "Progressive Web App",
        img: "/assets/projects/wd-2.jpg",
        description:
          "Developed Progressive Web Apps (PWAs) that combine the best of web and native apps.  These PWAs offer fast loading times, offline functionality, and a user experience that feels like a native app, all accessible from a web browser. This approach provides a wider reach for users and eliminates the need for app store downloads.",
      },
    ],
  },
];

function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-header",
        toggleActions: "play none none none",
        start: "top 85%",
      },
    });

    tl.from(".projects-header > *", {
      y: 20,
      opacity: 0,
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      id="projects"
      className="relative flex h-full w-full flex-col items-center justify-center gap-8 px-6 py-20 text-white md:py-[120px] lg:px-20 xl:gap-16"
    >
      {/* Services Header */}
      <div className="projects-header flex flex-col items-center gap-4 md:gap-8">
        <h3 className="text-center text-4xl font-bold md:text-6xl 2xl:text-7xl">
          Projects We Have <span className="text-gradient">Done</span>
        </h3>
        <p className="text-center text-sm md:max-w-[900px] md:text-xl">
          Take a look at some of our recent projects and see how we&apos;ve
          helped other businesses elevate their brand and drive business growth.
        </p>
      </div>

      <div className="w-full">
        <Tabs tabs={tabsData} />
      </div>
    </section>
  );
}

export default Projects;
