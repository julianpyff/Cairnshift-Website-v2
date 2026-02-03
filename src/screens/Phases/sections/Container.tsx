import { Link } from "react-router-dom";
import { ArrowForward } from "../../../components/ArrowForward";

export const Container = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-[#15353c] mt-0 rounded-t-2xl md:rounded-t-[32px] overflow-hidden">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[60px] pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12 lg:pb-16 gap-12 md:gap-16 lg:gap-24">

        {/* Top Section: CTA + Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">

          {/* CTA / Contact Info */}
          <div className="flex flex-col items-start gap-6 md:gap-8 max-w-[600px]">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-[32px] md:text-[36px] lg:text-[42px] tracking-[-0.02em] leading-[1.2]">
              Centralise Your Knowledge.
              <br />
              Consistent Sales Execution.
            </p>

            <div className="flex flex-col gap-1 opacity-70 [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-sm md:text-base leading-relaxed">
              <a href="mailto:frank@cairnshift.com" className="text-white hover:text-[#ee9d2b] transition-colors">frank@cairnshift.com</a>
              <p>+31 6 119 118 30 | +44 73 560 70 570</p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 w-full lg:w-auto relative">

            {/* The Engines */}
            <div className="flex flex-col gap-4 md:gap-5 min-w-[140px]">
              <div className="w-fit [font-family:'DM_Mono',Helvetica] font-medium text-[#ee9d2b] text-sm tracking-[0] whitespace-nowrap uppercase">
                THE ENGINES
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                {["Knowledge", "Activation", "Revenue", "Content"].map((item) => (
                  <div key={item} className="[font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base hover:text-white cursor-default transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-4 md:gap-5 min-w-[140px]">
              <div className="w-fit [font-family:'DM_Mono',Helvetica] font-medium text-[#ee9d2b] text-sm tracking-[0] whitespace-nowrap uppercase">
                EXPLORE
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <Link to="/" className="no-underline">
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base hover:text-white transition-colors">
                    About us
                  </div>
                </Link>

                <Link to="/journey" className="no-underline">
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base hover:text-white transition-colors">
                    The Journey
                  </div>
                </Link>

                <Link to="/case-studies" className="no-underline">
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base hover:text-white transition-colors">
                    Proven Results
                  </div>
                </Link>

                <a
                  href="https://cal.com/frank-lautenschutz-cq6op4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base hover:text-white transition-colors">
                    Book a Blueprint
                  </div>
                </a>
              </div>
            </div>

            {/* Scroll to Top Arrow - Absolute on desktop, inline/absolute on mobile */}
            <div
              className="absolute right-0 top-0 lg:-right-20 lg:top-0 cursor-pointer transition-opacity hover:opacity-80 hidden md:block"
              onClick={scrollToTop}
            >
              <div className="bg-[#234850] rounded-full p-3 flex items-center justify-center -rotate-90">
                <ArrowForward
                  arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-14.svg"
                  className="!w-5 !h-5 !relative rotate-[90deg]"
                />
              </div>
            </div>

            {/* Mobile Scroll Top Button */}
            <div
              className="md:hidden flex items-center gap-2 text-[#ee9d2b] cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="[font-family:'DM_Mono',Helvetica] text-sm font-medium">BACK TO TOP</span>
              <div className="bg-[#234850] rounded-full p-2 flex items-center justify-center -rotate-90">
                <ArrowForward
                  arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-14.svg"
                  className="!w-4 !h-4 !relative rotate-[90deg]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Logo + Copyright */}
        <div className="flex flex-col gap-8 md:gap-10 border-t border-[#ffffff1a] pt-8 md:pt-10">
          {/* Logo Image - Responsive Width */}
          <img
            className="w-full h-auto object-contain max-w-full"
            alt="CairnShift Logo Group"
            src="https://c.animaapp.com/Gyeak8sQ/img/group-83324530-1.png"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#f3f3f3] opacity-60">
            <p className="[font-family:'DM_Mono',Helvetica] font-medium text-xs md:text-sm tracking-[0]">
              © 2026 CAIRNSHIFT. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
