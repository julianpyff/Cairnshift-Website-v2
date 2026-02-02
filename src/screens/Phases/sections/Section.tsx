import { ArrowForward } from "../../../components/ArrowForward";
import { Master } from "../../../components/Master";

export const Section = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start p-4 md:p-6 lg:p-8 w-full bg-[#ffffff]">
      <div className="flex flex-col w-full max-w-[1620px] mx-auto min-h-[400px] md:min-h-[500px] lg:h-[660px] items-center justify-center gap-8 md:gap-12 px-4 py-12 md:py-20 rounded-2xl overflow-hidden opacity-[0.9] lg:opacity-[0.77] bg-[url(https://c.animaapp.com/Gyeak8sQ/img/container.png)] bg-cover bg-center md:bg-[50%_50%] relative">

        <p className="w-full max-w-[800px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-[42px] md:text-6xl lg:text-8xl text-center tracking-[-0.02em] leading-tight md:leading-[1.1] lg:leading-[88px] drop-shadow-sm">
          Ready to build your engine?
        </p>

        <p className="w-full max-w-[750px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-[-0.01em] leading-relaxed">
          Book a 30-minute Blueprint Call. Map your challenge and see if this is
          the right fit.
        </p>

        <a
          href="https://cal.com/frank-lautenschutz-cq6op4"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline mt-4 md:mt-0"
        >
          <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 bg-[#e2e2e2] rounded-[56px] cursor-pointer transition-all hover:bg-white hover:scale-105 active:scale-95">
            <div className="flex-1 [font-family:'DM_Sans',Helvetica] font-medium text-[#102124] text-base text-center leading-normal">
              Book a Blueprint Call
            </div>

            <div className="inline-flex items-start">
              <Master
                className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-white !top-[unset]"
                hasDiv={false}
                override={
                  <ArrowForward
                    arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-13.svg"
                    className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                  />
                }
                visible={false}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
