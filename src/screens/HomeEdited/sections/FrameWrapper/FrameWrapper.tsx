import { ArrowForward } from "../../../../components/ArrowForward";
import { LightDarkNoSize } from "../../../../components/LightDarkNoSize";
import { Master } from "../../../../components/Master";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[68px_360px] px-[60px] py-[104px] relative self-stretch w-full flex-[0_0_auto] bg-[#f3f3f3] overflow-hidden">
      <div className="flex items-end relative flex-1 grow">
        <div className="inline-flex flex-col items-start gap-8 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

            <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] text-[#222f30] text-right leading-[14px] whitespace-nowrap relative font-medium text-base tracking-[0]">
              THE ENGINES
            </div>
          </div>

          <p className="relative w-[872px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[40px] tracking-[0] leading-10">
            Four connected systems that power the full GTM loop. Each engine
            feeds the others, creating a system that compounds over time and
            gets smarter with every interaction.
          </p>
        </div>
      </div>

      <div className="relative w-[1321px] h-[456px] ml-[-0.50px] mr-[-0.50px] overflow-x-scroll">
        <div className="inline-flex h-[456px] items-start gap-4 relative">
          <div className="flex flex-col w-[504px] items-start justify-between p-12 relative self-stretch bg-[#15353c] rounded-2xl overflow-hidden">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-5xl tracking-[-1.00px] leading-[48px] whitespace-nowrap">
                Knowledge
              </div>

              <LightDarkNoSize
                className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
                visible={false}
              />
            </div>

            <p className="relative flex items-end justify-center self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-white text-xl tracking-[-0.50px] leading-[normal]">
              Internal docs, CRM data, and market research enriched with live
              GTM signals. A feedback loop between strategy and execution that
              improves with every interaction.
            </p>

            <Master
              className="!rounded-[11.17px] !right-8 !gap-[13.96px] !justify-end !p-[19.54px] !items-start !absolute !left-[unset] !bg-[#0d2328] !top-8"
              hasDiv={false}
              visible={false}
            />
          </div>

          <div className="flex flex-col w-[504px] items-start justify-between p-12 relative self-stretch bg-[#849194] rounded-2xl overflow-hidden">
            <div className="relative flex items-end justify-center self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-5xl tracking-[-1.00px] leading-[48px]">
              Activation
            </div>

            <p className="relative flex items-end justify-center self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-white text-xl tracking-[-0.50px] leading-[normal]">
              Real-time signals like intent data and sales triggers combined
              with prospect research guide when and how to reach out. Outreach
              happens when there&#39;s a reason.
            </p>

            <Master
              className="!rounded-[10.67px] !right-8 !gap-[13.33px] !justify-center !p-[18.67px] !absolute !left-[unset] !bg-[#727c7f] !top-8"
              hasDiv={false}
              visible={false}
            />
          </div>

          <div className="flex flex-col w-[504px] items-start justify-between p-12 relative self-stretch bg-white rounded-2xl overflow-hidden">
            <div className="relative flex items-end justify-center self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#15353c] text-5xl tracking-[-1.00px] leading-[48px]">
              Revenue
            </div>

            <p className="relative flex items-end justify-center self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#15353c] text-xl tracking-[-0.50px] leading-[normal]">
              AI agents handle replies, call prep, and follow-ups. Sales calls
              get analyzed to refine playbooks and optimize pipeline, turning
              every conversation into a learning opportunity.
            </p>

            <Master
              className="!rounded-[10.67px] !right-8 !gap-[13.33px] !justify-center !p-[18.67px] !absolute !left-[unset] !bg-[#ee9d2b] !top-8"
              hasDiv={false}
              visible={false}
            />
          </div>
        </div>
      </div>

      <img
        className="absolute w-px h-px top-[-1916px] left-[-8242px] object-cover"
        alt="Subtract"
        src="/img/subtract.svg"
      />

      <img
        className="absolute w-px h-px top-[-1916px] left-[-8242px] object-cover"
        alt="Subtract"
        src="/img/image.svg"
      />

      <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 relative flex-[0_0_auto] bg-[#15353c] rounded-[56px]">
        <div className="flex-1 font-medium-text-base text-white text-center leading-[var(--medium-text-base-line-height)] relative font-[number:var(--medium-text-base-font-weight)] text-[length:var(--medium-text-base-font-size)] tracking-[var(--medium-text-base-letter-spacing)] [font-style:var(--medium-text-base-font-style)]">
          The Engines
        </div>

        <div className="relative flex-[0_0_auto] inline-flex items-start">
          <Master
            className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-[#234850] !top-[unset]"
            hasDiv={false}
            override={
              <ArrowForward
                arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-8.svg"
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
