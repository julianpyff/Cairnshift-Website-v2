import { ArrowForward } from "../../../components/ArrowForward";
import { Master } from "../../../components/Master";

export const Section = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff]">
      <div className="flex flex-col max-w-[1620px] h-[660px] items-center justify-center gap-12 relative w-full rounded-2xl overflow-hidden opacity-[0.77] bg-[url(https://c.animaapp.com/Gyeak8sQ/img/container.png)] bg-cover bg-[50%_50%]">
        <p className="relative w-[713.32px] [font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-text-invert text-8xl text-center tracking-[-1.00px] leading-[88px]">
          Ready to build your engine?
        </p>

        <p className="relative w-[750.94px] h-8 [font-family:'DM_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[-0.50px] leading-[25px]">
          Book a 30-minute Blueprint Call. Map your challenge and see if this is
          the right fit.
        </p>

        <a
          href="https://cal.com/frank-lautenschutz-cq6op4"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 relative flex-[0_0_auto] bg-[#e2e2e2] rounded-[56px] cursor-pointer transition-all hover:bg-white">
            <div className="relative flex-1 font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-[#102124] text-[length:var(--medium-text-base-font-size)] text-center tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] [font-style:var(--medium-text-base-font-style)]">
              Book a Blueprint Call
            </div>

            <div className="relative flex-[0_0_auto] inline-flex items-start">
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
