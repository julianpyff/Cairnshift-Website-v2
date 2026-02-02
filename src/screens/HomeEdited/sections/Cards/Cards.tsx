import { Link } from "react-router-dom";
import { ArrowForward } from "../../../../components/ArrowForward";
import { Master } from "../../../../components/Master";
import mourikCaseImage from "../../../../../images/mourik-case.png";
import blitsCaseImage from "../../../../../images/blits-case.jpg";
import naextCaseImage from "../../../../../images/naext-case.jpg";
import eleadsCaseImage from "../../../../../images/eleads-case.jpg";

export const Cards = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full self-stretch items-start gap-[88px] px-[60px] py-[120px] relative flex-[0_0_auto] bg-[#f3f3f3]">
      <div className="inline-flex flex-col items-start gap-[var(--tokens-spacing-spacing-64)] relative flex-[0_0_auto]">
        <div className="flex flex-col w-[872px] items-start gap-[var(--tokens-spacing-spacing-24)] relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

            <div className="w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-right leading-[14px] whitespace-nowrap relative flex items-center justify-center text-base tracking-[0]">
              PROVEN RESULT
            </div>
          </div>

          <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-5xl tracking-[0] leading-[48px]">
            A structured path from understanding to execution — designed to
            reduce noise, create alignment, and build momentum across GTM teams.
          </p>
        </div>
      </div>

      <div className="relative w-[calc(100%_+_120px)] -ml-[60px] -mr-[60px] overflow-x-auto no-scrollbar">
        <div className="inline-flex items-start gap-4 relative px-[60px]">
          {/* Case Study 01 - Mourik */}
          <Link
            to="/case-studies"
            className="no-underline"
          >
            <div className="flex flex-col w-[424px] items-center gap-8 pt-0 pb-10 px-0 relative bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={mourikCaseImage}
                alt="Mourik Case Study"
                className="relative self-stretch w-full h-[302px] rounded-lg object-cover"
              />

              <div className="flex flex-col w-[360px] items-start gap-10 relative flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[32px] tracking-[-1.00px] leading-[38px]">
                    Mourik
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">
                    20 In-Person Meetings — Generated significant cross-sell opportunities.
                  </p>
                </div>

                <div className="relative flex-[0_0_auto] inline-flex items-start">
                  <Master
                    className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-[#234850] !top-[unset]"
                    hasDiv={false}
                    override={
                      <ArrowForward
                        arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-9.svg"
                        className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      />
                    }
                    visible={false}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study 02 - Blits.ai */}
          <Link
            to="/case-studies"
            className="no-underline"
          >
            <div className="flex flex-col w-[424px] items-center gap-8 pt-0 pb-10 px-0 relative bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={blitsCaseImage}
                alt="Blits.ai Case Study"
                className="relative self-stretch w-full h-[302px] rounded-lg object-cover"
              />

              <div className="flex flex-col w-[360px] items-start gap-10 relative flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[32px] tracking-[-1.00px] leading-[38px]">
                    Blits.ai
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">
                    High-Value C-Level Conversations — Opened early opportunities through custom targeting.
                  </p>
                </div>

                <div className="relative flex-[0_0_auto] inline-flex items-start">
                  <Master
                    className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-[#234850] !top-[unset]"
                    hasDiv={false}
                    override={
                      <ArrowForward
                        arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-10.svg"
                        className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      />
                    }
                    visible={false}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study 03 - naext.ai */}
          <Link
            to="/case-studies"
            className="no-underline"
          >
            <div className="flex flex-col w-[424px] items-center gap-8 pt-0 pb-10 px-0 relative bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={naextCaseImage}
                alt="naext.ai Case Study"
                className="relative self-stretch w-full h-[302px] rounded-lg object-cover"
              />

              <div className="flex flex-col w-[360px] items-start gap-10 relative flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[32px] tracking-[-1.00px] leading-[38px]">
                    naext.ai
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">
                    Identified Key GTM Partner — Created a scalable engagement model to scale business.
                  </p>
                </div>

                <div className="relative flex-[0_0_auto] inline-flex items-start">
                  <Master
                    className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-[#234850] !top-[unset]"
                    hasDiv={false}
                    override={
                      <ArrowForward
                        arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-11.svg"
                        className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      />
                    }
                    visible={false}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study 04 - Eleads */}
          <Link
            to="/case-studies"
            className="no-underline"
          >
            <div className="flex flex-col w-[424px] items-center gap-8 pt-0 pb-10 px-0 relative bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={eleadsCaseImage}
                alt="Eleads Case Study"
                className="relative self-stretch w-full h-[302px] rounded-lg object-cover"
              />

              <div className="flex flex-col w-[360px] items-start gap-10 relative flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[32px] tracking-[-1.00px] leading-[38px]">
                    Eleads
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">
                    Doubled Partner Base (6 Months) — Grew from 24 to 48 law firms with structured outreach.
                  </p>
                </div>

                <div className="relative flex-[0_0_auto] inline-flex items-start">
                  <Master
                    className="!rounded-[48px] !justify-center !flex-[0_0_auto] !p-3.5 !left-[unset] !bg-[#234850] !top-[unset]"
                    hasDiv={false}
                    override={
                      <ArrowForward
                        arrowForward="https://c.animaapp.com/Gyeak8sQ/img/arrow-forward-12.svg"
                        className="!h-5 !relative !left-[unset] !w-5 !top-[unset]"
                      />
                    }
                    visible={false}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
