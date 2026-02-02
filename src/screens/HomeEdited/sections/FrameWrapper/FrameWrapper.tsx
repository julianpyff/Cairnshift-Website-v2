import { ArrowBack } from "../../../../components/ArrowBack";
import { ArrowForward } from "../../../../components/ArrowForward";
import { LightDarkNoSize } from "../../../../components/LightDarkNoSize";
import { Master } from "../../../../components/Master";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:gap-[68px] px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[104px] w-full bg-[#f3f3f3] overflow-hidden">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto gap-8 md:gap-12 text-center lg:text-left">
        <div className="flex flex-col items-start gap-6 md:gap-8 w-full max-w-[872px]">
          <div className="inline-flex items-center gap-4">
            <div className="w-2 h-2 bg-[#ee9d2b] rounded" />

            <div className="[font-family:'DM_Mono',Helvetica] text-[#222f30] leading-[14px] font-medium text-sm md:text-base tracking-[0] uppercase">
              THE ENGINES
            </div>
          </div>

          <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[28px] md:text-[32px] lg:text-[40px] tracking-[0] leading-[1.2] lg:leading-10 text-left">
            Four connected systems that power the full GTM loop. Each engine
            feeds the others, creating a system that compounds over time and
            gets smarter with every interaction.
          </p>
        </div>
      </div>

      <div className="flex w-[calc(100%_+_32px)] -ml-4 md:w-[calc(100%_+_64px)] md:-ml-8 lg:w-[calc(100%_+_120px)] lg:-ml-[60px] overflow-x-auto no-scrollbar px-4 md:px-8 lg:px-[60px] snap-x snap-mandatory lg:snap-none pb-8">
        <div className="flex flex-row gap-4 md:gap-8 lg:gap-8 w-max">
          {/* Knowledge Card */}
          <div className="flex flex-col w-[85vw] md:w-[400px] lg:w-[504px] items-start justify-between p-6 md:p-8 lg:p-12 bg-[#15353c] rounded-2xl overflow-hidden min-h-[360px] md:min-h-[400px] lg:min-h-[456px] shrink-0 snap-center">
            <div className="flex items-start justify-between w-full">
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-[32px] md:text-[40px] lg:text-5xl tracking-[-1.00px] leading-tight">
                Knowledge
              </div>
            </div>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-lg md:text-xl tracking-[-0.50px] leading-relaxed mt-auto">
              Internal docs, CRM data, and market research enriched with live GTM
              signals. A feedback loop between strategy and execution that
              improves with every interaction.
            </p>
          </div>

          {/* Content Card */}
          <div className="flex flex-col w-[85vw] md:w-[400px] lg:w-[504px] items-start justify-between p-6 md:p-8 lg:p-12 bg-[#e2e2e2] rounded-2xl overflow-hidden min-h-[360px] md:min-h-[400px] lg:min-h-[456px] shrink-0 snap-center">
            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#15353c] text-[32px] md:text-[40px] lg:text-5xl tracking-[-1.00px] leading-tight">
              Content
            </div>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#15353c] text-lg md:text-xl tracking-[-0.50px] leading-relaxed mt-auto">
              Live GTM insights guide high-impact materials. Interactive lead
              magnets create high-intent prospects, and validated messaging boosts
              credibility.
            </p>
          </div>

          {/* Activation Card */}
          <div className="flex flex-col w-[85vw] md:w-[400px] lg:w-[504px] items-start justify-between p-6 md:p-8 lg:p-12 bg-[#849194] rounded-2xl overflow-hidden min-h-[360px] md:min-h-[400px] lg:min-h-[456px] shrink-0 snap-center">
            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-[32px] md:text-[40px] lg:text-5xl tracking-[-1.00px] leading-tight">
              Activation
            </div>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-lg md:text-xl tracking-[-0.50px] leading-relaxed mt-auto">
              Real-time signals like intent data and sales triggers combined with
              prospect research guide when and how to reach out. Outreach happens
              when there&apos;s a reason.
            </p>
          </div>

          {/* Revenue Card */}
          <div className="flex flex-col w-[85vw] md:w-[400px] lg:w-[504px] items-start justify-between p-6 md:p-8 lg:p-12 bg-white rounded-2xl overflow-hidden min-h-[360px] md:min-h-[400px] lg:min-h-[456px] shrink-0 snap-center relative">
            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#15353c] text-[32px] md:text-[40px] lg:text-5xl tracking-[-1.00px] leading-tight">
              Revenue
            </div>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#15353c] text-lg md:text-xl tracking-[-0.50px] leading-relaxed mt-auto">
              AI agents handle replies, call prep, and follow-ups. Sales calls get
              analyzed to refine playbooks and optimize pipeline, turning every
              conversation into a learning opportunity.
            </p>

            <Master
              className="!rounded-[10.67px] !right-8 !gap-[13.33px] !justify-center !p-[18.67px] !absolute !left-[unset] !bg-[#f3f3f3] !top-8"
              hasDiv={false}
              visible={false}
              override={
                <ArrowBack
                  className="!h-5 !relative !left-[unset] !w-5 !top-[unset] invert"
                  arrowBack="https://c.animaapp.com/Gyeak8sQ/img/arrow-back.svg"
                />
              }
            />
          </div>
        </div>
      </div>


      <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 bg-[#15353c] rounded-[56px] mt-8 cursor-pointer hover:bg-[#1f4a53] transition-colors">
        <div className="flex-1 [font-family:'DM_Sans',Helvetica] font-medium text-white text-center leading-normal text-base tracking-[0]">
          The Engines
        </div>

        <div className="inline-flex items-start">
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
