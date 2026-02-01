import { ArrowForward } from "../../../../components/ArrowForward";
import { Master } from "../../../../components/Master";

export const TextBlock = (): JSX.Element => {
  return (
    <div className="flex items-end justify-between px-[60px] py-[120px] w-full flex-[0_0_auto] bg-[#f3f3f3] relative self-stretch">
      <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-base text-right tracking-[0] leading-[14px] whitespace-nowrap">
            WHO WE ARE
          </div>
        </div>

        <p className="relative w-[648px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[40px] tracking-[0] leading-10">
          A pragmatic GTM partner - blending commercial and technical expertise
          to leverage proven methods with custom tooling. Working hands-on with
          teams to build pipeline, co-run deals, and systematize what works into
          compounding revenue.
        </p>
      </div>

      <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 relative flex-[0_0_auto] bg-[#15353c] rounded-[56px]">
        <div className="flex-1 font-[number:var(--medium-text-base-font-weight)] text-white text-center leading-[var(--medium-text-base-line-height)] relative font-medium-text-base text-[length:var(--medium-text-base-font-size)] tracking-[var(--medium-text-base-letter-spacing)] [font-style:var(--medium-text-base-font-style)]">
          About us
        </div>

        <div className="inline-flex items-start relative flex-[0_0_auto]">
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
