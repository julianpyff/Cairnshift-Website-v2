import { ArrowForward } from "../../../../components/ArrowForward";
import { Master } from "../../../../components/Master";

export const TextBlock = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[120px] w-full bg-[#f3f3f3] relative">
      <div className="flex flex-col items-start gap-8 md:gap-10">
        <div className="inline-flex items-center gap-4 relative">
          <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-sm md:text-base text-right tracking-[0] leading-[14px] whitespace-nowrap">
            WHO WE ARE
          </div>
        </div>

        <p className="w-full lg:w-[648px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[28px] md:text-[32px] lg:text-[40px] tracking-[0] leading-[1.2] lg:leading-10">
          A pragmatic GTM partner - blending commercial and technical expertise
          to leverage proven methods with custom tooling. Working hands-on with
          teams to build pipeline, co-run deals, and systematize what works into
          compounding revenue.
        </p>
      </div>

      <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 mt-8 lg:mt-0 bg-[#15353c] rounded-[56px] self-start lg:self-auto cursor-pointer hover:bg-[#1f4a53] transition-colors">
        <div className="flex-1 [font-family:'DM_Sans',Helvetica] font-medium text-white text-center leading-normal text-base tracking-[0]">
          About us
        </div>

        <div className="inline-flex items-start">
          <Master
            className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-[#234850] !top-[unset]"
            hasDiv={false}
            override={
              <ArrowForward
                arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-3.svg"
                className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
              />
            }
            visible={false}
          />
        </div>
      </div>
    </div>
  );
};
