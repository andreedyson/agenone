import { useState } from "react";
import { ChevronRight } from "lucide-react";

function Accordion({ number, name, description, image }) {
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = () => {
    setOpenDetails((prev) => !prev);
  };

  return (
    <article className="flex w-full gap-3 rounded-md bg-[#f3f3f3] p-6 md:gap-10 md:px-[60px] md:py-[54px]">
      {/* Accordion Number */}
      <div>
        <span
          className={`text-xl font-bold duration-300 md:text-3xl ${openDetails && "text-gradient"}`}
        >
          {number < 10 ? `0${number}` : number}
        </span>
      </div>

      <div className="w-full">
        {/* Accordion Service Name */}
        <div
          className="flex cursor-pointer justify-between gap-2"
          onClick={handleOpenDetails}
        >
          <h4
            className={`text-xl font-bold duration-300 md:text-3xl ${openDetails && "text-gradient"}`}
          >
            {name}
          </h4>
          <ChevronRight
            size={36}
            className={`duration-300 ${openDetails && "rotate-90"}`}
          />
        </div>

        {/* Accordion Details */}
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ${openDetails ? "max-h-full" : "max-h-0"}`}
        >
          <p className="mt-4 max-w-[900px] text-justify md:mt-6">
            {description}
          </p>
          {image && (
            <img
              src={image}
              alt=""
              className="mt-6 h-[300px] w-full rounded-md bg-center object-cover max-sm:h-[180px] md:mt-10"
            />
          )}
        </div>
      </div>
    </article>
  );
}

export default Accordion;
