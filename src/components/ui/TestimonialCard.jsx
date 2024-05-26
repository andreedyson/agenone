function TestimonialCard(props) {
  const { review, reviewer, occupation, profileImg } = props;

  return (
    <article className="hover:bg-gradient-main group cursor-pointer rounded-xl border-2 bg-[#f3f3f3] p-6 shadow-md transition-all duration-300 hover:text-white">
      <div className="max-w-[280px] space-y-4 text-justify md:max-w-[460px] md:space-y-6">
        <div className="line-clamp-3 text-[#6D7079] duration-300 group-hover:text-white">
          {review}
        </div>
        <div className="flex items-center gap-3">
          <div>
            <img
              src={profileImg}
              alt={reviewer}
              className="size-14 rounded-full object-cover md:size-[72px]"
            />
          </div>
          <div>
            <h4 className="font-semibold">{reviewer}</h4>
            <p className="text-[#6D7079] duration-300 group-hover:text-white">
              {occupation}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
