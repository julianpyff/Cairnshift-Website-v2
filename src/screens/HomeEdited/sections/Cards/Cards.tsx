import { Link } from "react-router-dom";
import { ArrowForward } from "../../../../components/ArrowForward";
import { Master } from "../../../../components/Master";
import mourikCaseImage from "../../../../../images/mourik-case.png";
import blitsCaseImage from "../../../../../images/blits-case.jpg";
import naextCaseImage from "../../../../../images/naext-case.jpg";
import eleadsCaseImage from "../../../../../images/eleads-case.jpg";

export const Cards = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full self-stretch items-center gap-12 lg:gap-[88px] px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[120px] bg-[#f3f3f3] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center lg:items-start gap-8 md:gap-16">
        <div className="flex flex-col w-full max-w-[872px] items-start gap-6 md:gap-8">
          <div className="inline-flex items-center gap-4">
            <div className="w-2 h-2 bg-[#ee9d2b] rounded" />

            <div className="[font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-right leading-[14px] whitespace-nowrap text-sm md:text-base tracking-[0] uppercase">
              PROVEN RESULT
            </div>
          </div>

          <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[28px] md:text-[32px] lg:text-5xl tracking-[0] leading-[1.2] lg:leading-[48px] text-left">
            A structured path from understanding to execution — designed to
            reduce noise, create alignment, and build momentum across GTM teams.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto lg:overflow-x-auto lg:no-scrollbar lg:-mr-[60px] lg:pr-[60px]">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-6 lg:w-max">
          {/* Case Study 01 - Mourik */}
          <Link
            to="/case-studies"
            className="no-underline w-full lg:w-auto"
          >
            <div className="flex flex-col w-full lg:w-[424px] items-center gap-6 md:gap-8 pb-8 md:pb-10 bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={mourikCaseImage}
                alt="Mourik Case Study"
                className="w-full h-[240px] md:h-[302px] object-cover"
              />

              <div className="flex flex-col w-full px-6 md:px-8 items-start gap-6 md:gap-10">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[28px] md:text-[32px] tracking-[-1.00px] leading-tight">
                    Mourik
                  </div>

                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg tracking-[-0.50px] leading-relaxed">
                    20 In-Person Meetings — Generated significant cross-sell opportunities.
                  </p>
                </div>

                <div className="inline-flex items-start">
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
            className="no-underline w-full lg:w-auto"
          >
            <div className="flex flex-col w-full lg:w-[424px] items-center gap-6 md:gap-8 pb-8 md:pb-10 bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={blitsCaseImage}
                alt="Blits.ai Case Study"
                className="w-full h-[240px] md:h-[302px] object-cover"
              />

              <div className="flex flex-col w-full px-6 md:px-8 items-start gap-6 md:gap-10">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[28px] md:text-[32px] tracking-[-1.00px] leading-tight">
                    Blits.ai
                  </div>

                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg tracking-[-0.50px] leading-relaxed">
                    High-Value C-Level Conversations — Opened early opportunities through custom targeting.
                  </p>
                </div>

                <div className="inline-flex items-start">
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
            className="no-underline w-full lg:w-auto"
          >
            <div className="flex flex-col w-full lg:w-[424px] items-center gap-6 md:gap-8 pb-8 md:pb-10 bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={naextCaseImage}
                alt="naext.ai Case Study"
                className="w-full h-[240px] md:h-[302px] object-cover"
              />

              <div className="flex flex-col w-full px-6 md:px-8 items-start gap-6 md:gap-10">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[28px] md:text-[32px] tracking-[-1.00px] leading-tight">
                    naext.ai
                  </div>

                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg tracking-[-0.50px] leading-relaxed">
                    Identified Key GTM Partner — Created a scalable engagement model to scale business.
                  </p>
                </div>

                <div className="inline-flex items-start">
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
            className="no-underline w-full lg:w-auto"
          >
            <div className="flex flex-col w-full lg:w-[424px] items-center gap-6 md:gap-8 pb-8 md:pb-10 bg-tokens-surface-primary rounded-lg overflow-hidden shrink-0 cursor-pointer transition-transform hover:scale-[1.02]">
              <img
                src={eleadsCaseImage}
                alt="Eleads Case Study"
                className="w-full h-[240px] md:h-[302px] object-cover"
              />

              <div className="flex flex-col w-full px-6 md:px-8 items-start gap-6 md:gap-10">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-tokens-text-headline text-[28px] md:text-[32px] tracking-[-1.00px] leading-tight">
                    Eleads
                  </div>

                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg tracking-[-0.50px] leading-relaxed">
                    Doubled Partner Base (6 Months) — Grew from 24 to 48 law firms with structured outreach.
                  </p>
                </div>

                <div className="inline-flex items-start">
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
