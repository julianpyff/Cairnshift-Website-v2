import { ArrowForward } from "../../../../components/ArrowForward";
import { Master } from "../../../../components/Master";

export const HowWeWork = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#f3f3f3]">
      <div className="flex flex-wrap items-center justify-center gap-[88px_128px] px-10 py-[120px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[var(--tokens-radius-radius-large)] overflow-hidden">
        <div className="flex flex-col w-[834px] items-center justify-center gap-[var(--tokens-spacing-spacing-24)] relative">
          <div className="inline-flex items-center gap-4 px-3 py-2 relative flex-[0_0_auto] bg-[#f7f7f5] rounded-lg">
            <div className="relative w-2.5 h-2.5 bg-[#ee9d2b]" />

            <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-right leading-[14px] whitespace-nowrap relative text-base tracking-[0]">
              THE JOURNEY
            </div>
          </div>

          <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[64px] text-center tracking-[0] leading-[48px]">
            How we work
          </div>

          <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-xl text-center tracking-[-0.50px] leading-7">
            A structured loop from research to revenue. Each phase delivers
            immediate value and feeds the next - test messaging and targeting,
            validate what creates pipeline, then embed the winners into systems
            that run and improve over time.
          </p>
        </div>

        <div className="inline-flex items-start gap-[23px] relative flex-[0_0_auto]">
          <div className="flex flex-col w-[647px] items-start gap-20 relative">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-6 p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f9f9f9] rounded-lg border border-solid border-[#f3f3f3]">
                <div className="relative w-8 [font-family:'DM_Sans',Helvetica] font-semibold text-[#849194] text-2xl text-center tracking-[-0.50px] leading-7">
                  01
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[32px] tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                  Research &amp; Positioning
                </div>
              </div>

              <div className="flex items-start p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f9f9f9] rounded-lg border border-solid border-[#f3f3f3]">
                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-8 [font-family:'DM_Sans',Helvetica] font-semibold text-[#849194] text-2xl text-center tracking-[-0.50px] leading-7">
                      02
                    </div>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[32px] tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                      Activation &amp; Tooling
                    </div>
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[0] leading-[normal]">
                    Find and activate high-fit prospects with a budget-optimized
                    tiered engine. Cheap checks filter first, then AI validates
                    qualitative fit, then deep research targets high-value
                    accounts. Multi-source signals trigger outreach when
                    prospects have reasons to care, not randomly.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f9f9f9] rounded-lg border border-solid border-[#f3f3f3]">
                <div className="relative w-8 [font-family:'DM_Sans',Helvetica] font-semibold text-[#849194] text-2xl text-center tracking-[-0.50px] leading-7">
                  03
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[32px] tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                  Revenue Operations
                </div>
              </div>

              <div className="flex items-center gap-6 p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f9f9f9] rounded-lg border border-solid border-[#f3f3f3]">
                <div className="relative w-8 [font-family:'DM_Sans',Helvetica] font-semibold text-[#849194] text-2xl text-center tracking-[-0.50px] leading-7">
                  04
                </div>

                <div className="relative w-[288.91px] mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[32px] tracking-[-1.00px] leading-[38px]">
                  RevOps Intelligence
                </div>
              </div>
            </div>

            <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 relative flex-[0_0_auto] bg-[#15353c] rounded-[56px]">
              <div className="flex-1 font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-white text-center leading-[var(--medium-text-base-line-height)] relative text-[length:var(--medium-text-base-font-size)] tracking-[var(--medium-text-base-letter-spacing)] [font-style:var(--medium-text-base-font-style)]">
                The Journey
              </div>

              <div className="relative flex-[0_0_auto] inline-flex items-start">
                <Master
                  className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-[#234850] !top-[unset]"
                  hasDiv={false}
                  override={
                    <ArrowForward
                      arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-4.svg"
                      className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                    />
                  }
                  visible={false}
                />
              </div>
            </div>
          </div>

          <img
            className="relative self-stretch w-[648.38px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/Gyeak8sQ/img/rectangle-114329.svg"
          />
        </div>
      </div>
    </div>
  );
};
