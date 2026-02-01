export interface ComponentProps {
  className: string;
  frameClassName: string;
}

export const Component = ({
  className,
  frameClassName,
}: ComponentProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-start gap-8 pt-10 pb-0 px-[60px] relative top-[278px] bg-[#ffffff] ${className}`}
    >
      <div className="flex items-start gap-[113px] p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f3f3f3] rounded-lg overflow-hidden">
        <img
          className="relative mt-[-989.00px] ml-[-10179.00px] w-px h-px"
          alt="Subtract"
        />

        <div className="flex flex-col w-[616px] items-center gap-4 relative">
          <div
            className={`relative self-stretch w-full h-[660px] rounded-lg overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.1)_100%),linear-gradient(0deg,rgba(243,243,243,1)_0%,rgba(243,243,243,1)_100%)] ${frameClassName}`}
          >
            <img
              className="absolute top-[-989px] left-[-10179px] w-px h-px"
              alt="Subtract"
            />

            <div className="absolute left-[calc(50.00%_-_292px)] bottom-4 w-[584px] h-24 bg-[#15353c] rounded-[56px]">
              <div className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_258px)] w-[516px] font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-[#ffffff] text-[length:var(--medium-text-base-font-size)] text-center tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] [font-style:var(--medium-text-base-font-style)]">
                Knowledge Engine
              </div>

              <div className="inline-flex items-start absolute top-[calc(50.00%_-_40px)] left-[496px]">
                <div className="inline-flex items-center justify-center gap-[16.67px] p-[23.33px] relative flex-[0_0_auto] bg-[#234850] rounded-[80px]">
                  <img
                    className="relative w-[33.33px] h-[33.33px]"
                    alt="Arrow forward"
                    src="https://c.animaapp.com/ml3r5025flOZYU/img/arrow-forward.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[471px] gap-14 px-0 py-14 flex flex-col items-start relative">
          <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px] whitespace-nowrap">
              What happens
            </div>

            <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="mt-[-0.50px] relative self-stretch w-full h-px object-cover"
                alt="Vector"
                src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg"
              />

              <div className="gap-8 rounded-lg flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-2xl tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                    Deep market research
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[0] leading-[normal]">
                    Competitors, alternatives, ecosystem mapping, market
                    positioning. AI agents comb through news, podcasts, reviews,
                    and case studies to understand the landscape.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-2xl tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                    ICP refinement
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[0] leading-[normal]">
                    Your Ideal Customer Profile gets defined with real data, not
                    assumptions. What size companies? Which industries? Which
                    roles make buying decisions? What problems do they have
                    budget to solve?
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-2xl tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                    Positioning and messaging
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[0] leading-[normal]">
                    Validated with friendly customers and real conversations,
                    not pulled from thin air.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto] rounded-lg">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-2xl tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                    Asset alignment
                  </div>

                  <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[0] leading-[normal]">
                    Website, pitch decks, LinkedIn profiles, and sales
                    collateral get refreshed so everything speaks the same
                    language.
                  </p>
                </div>
              </div>

              <img className="relative self-stretch w-full h-px" alt="Vector" src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg" />
            </div>
          </div>

          <div className="gap-8 px-10 py-12 self-stretch w-full flex-[0_0_auto] bg-[#15353c] rounded-lg border border-solid border-[#f3f3f3] flex flex-col items-start relative">
            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

              <div className="relative w-fit mt-[-1.00px] font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-[#ffffff] text-[length:var(--medium-text-base-font-size)] tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] whitespace-nowrap [font-style:var(--medium-text-base-font-style)]">
                THE RESULT
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[-1.00px] leading-[normal]">
                A structured knowledge base that AI agents can query so every
                email, call prep, and reply draws from it
              </p>

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Vector"
                src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg"
              />

              <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[-1.00px] leading-[normal]">
                Sales assets that land with prospects
              </p>

              <img
                className="object-cover relative self-stretch w-full h-px"
                alt="Vector"
              />

              <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[-1.00px] leading-[normal]">
                Clear targeting: who to reach, why they&#39;ll care, how to find
                them
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-4 p-8 bg-[#f9f9f9] rounded-2xl border border-solid border-[#f3f3f3] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

                <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-base tracking-[0] leading-5 whitespace-nowrap">
                  DELIVERABLES
                </div>
              </div>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[0] leading-[normal]">
                  Unit economics reporting, win/loss analysis framework, updated
                  playbooks and positioning, ongoing strategic advisory. The
                  Knowledge Engine keeps growing. Each month&#39;s data makes
                  the next month smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
