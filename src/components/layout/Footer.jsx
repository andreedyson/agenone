import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="relative flex h-full w-full flex-col items-center justify-center gap-8 rounded-t-[48px] px-6 py-10 text-white md:py-[40px] lg:px-20 xl:gap-16">
      {/* Footer Header */}
      <div className="flex w-full flex-col items-center gap-6 border-b-2 border-b-gray-700 pb-8 md:flex-row md:justify-between md:pb-10">
        <h3 className="max-w-[280px] text-center text-2xl font-semibold md:max-w-[500px] md:text-start md:text-4xl">
          Let&apos;s discuss and bring your vision to life.
        </h3>
        <button className="bg-gradient-main flex items-center rounded-full px-6 py-4 text-white md:px-8 md:py-5">
          Let&apos;s talk
          <ArrowRight />
        </button>
      </div>

      {/* Footer Links */}
      <div className="flex w-full flex-col justify-between border-b-2 border-b-gray-700 pb-8 md:pb-10 xl:flex-row">
        <div className="max-md:mb-10">
          <div>
            <a href="/" className="flex items-center gap-2 md:gap-3">
              <img src="/assets/logo.png" alt="Agenone Logo" className="w-9" />
              <p className="text-xl font-bold italic md:text-2xl">Agenone</p>
            </a>
          </div>
          <p className="mb-8 mt-4 md:mb-10 md:mt-6 md:max-w-[410px]">
            We&apos;re a team of experienced designers, developers, and
            marketers, passionate about delivering exceptional digital
            solutions.
          </p>
          <p>support@agenone.com</p>
        </div>

        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 md:gap-[120px]">
          <div className="flex flex-col gap-4 md:gap-6">
            <h5 className="font-semibold">Menu</h5>
            <div className="flex flex-col gap-3 text-[#B6B8BC] md:gap-4">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">About Us</a>
              <a href="#">Project</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h5 className="font-semibold">Support</h5>
            <div className="flex flex-col gap-3 text-[#B6B8BC] md:gap-4">
              <a href="#">FAQ</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h5 className="font-semibold">Social Media</h5>
            <div className="flex flex-col gap-3 text-[#B6B8BC] md:gap-4">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Dribble</a>
              <a href="#">Behance</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div>
        <span className="flex items-center justify-center text-center text-[#B6B8BC]">
          Copyright © 2023 by Agenone. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
