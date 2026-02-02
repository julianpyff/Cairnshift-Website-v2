import { useState } from "react";
import { ArrowForward } from "../../../../components/ArrowForward";
import { Master } from "../../../../components/Master";
import { Link } from "react-router-dom";

interface AccordionItem {
  number: string;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    number: "01",
    title: "Research & Positioning",
    content: "Build the knowledge foundation that powers everything else. Deep market research clarifies ICP and positioning, content and sales assets get aligned, and a structured knowledge base gets created so every email, call prep, and campaign draws from validated insights instead of assumptions.",
  },
  {
    number: "02",
    title: "Activation & Tooling",
    content: "Find and activate high-fit prospects with a budget-optimized tiered engine. Cheap checks filter first, then AI validates qualitative fit, then deep research targets high-value accounts. Multi-source signals trigger outreach when prospects have reasons to care, not randomly.",
  },
  {
    number: "03",
    title: "Sales Execution",
    content: "AI agents embed directly into workflow. Reply drafts appear in your outbox, call prep briefs land before meetings, and post-meeting follow-ups write themselves. Our team co-runs discovery to build playbooks that scale. Systems learn from every interaction and get smarter over time.",
  },
  {
    number: "04",
    title: "RevOps Intelligence",
    content: "Harvest the data foundation to drive strategy. Unit economics reveal true channel ROI, win/loss analysis feeds back into targeting, and conversation patterns rewrite positioning. Strategic partnership keeps the engine tuned as data compounds and new markets spin up without starting from scratch.",
  },
];

export const HowWeWork = (): JSX.Element => {
  const [expandedIndex, setExpandedIndex] = useState<number>(1); // Start with index 1 (Activation & Tooling) expanded

  const handleItemClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col items-center gap-2 px-2 md:px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-[#f3f3f3]">
      <div className="flex flex-col lg:flex-wrap lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[88px_128px] px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-[120px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[16px] md:rounded-[20px] lg:rounded-[var(--tokens-radius-radius-large)] overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col w-full lg:w-[834px] items-center justify-center gap-4 md:gap-6 lg:gap-[var(--tokens-spacing-spacing-24)] relative">
          <div className="inline-flex items-center gap-3 md:gap-4 px-2 md:px-3 py-1.5 md:py-2 relative flex-[0_0_auto] bg-[#f7f7f5] rounded-lg">
            <div className="relative w-2 md:w-2.5 h-2 md:h-2.5 bg-[#ee9d2b]" />
            <div className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-right leading-[14px] whitespace-nowrap relative text-sm md:text-base tracking-[0]">
              THE JOURNEY
            </div>
          </div>

          <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-center tracking-[0] text-[32px] leading-[38px] md:text-[48px] md:leading-[44px] lg:text-[64px] lg:leading-[48px]">
            How we work
          </div>

          <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-center tracking-[-0.50px] text-base leading-6 md:text-lg md:leading-6 lg:text-xl lg:leading-7">
            A structured loop from research to revenue. Each phase delivers
            immediate value and feeds the next - test messaging and targeting,
            validate what creates pipeline, then embed the winners into systems
            that run and improve over time.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-[23px] relative w-full lg:flex-[0_0_auto]">
          {/* Left Column - Accordion */}
          <div className="flex flex-col w-full lg:w-[647px] items-start gap-12 md:gap-16 lg:gap-20 relative">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#f9f9f9] rounded-lg border border-solid border-[#f3f3f3] overflow-hidden transition-all duration-300 ${expandedIndex === index ? "" : "cursor-pointer hover:bg-[#f5f5f5]"
                    }`}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 lg:p-8 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-6 md:w-8 [font-family:'DM_Sans',Helvetica] font-semibold text-[#849194] text-center tracking-[-0.50px] text-lg md:text-xl lg:text-2xl lg:leading-7">
                      {item.number}
                    </div>

                    <div className="relative flex-1 mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] tracking-[-1.00px] text-xl leading-[28px] md:text-2xl md:leading-[32px] lg:text-[32px] lg:leading-[38px]">
                      {item.title}
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="flex items-start px-4 pb-4 md:px-6 md:pb-6 lg:px-8 lg:pb-8 pt-0 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative flex-1 [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] tracking-[0] leading-[normal] text-base md:text-lg">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/journey" className="no-underline w-fit self-start">
              <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 bg-[#15353c] rounded-[56px] cursor-pointer transition-all hover:bg-[#234850]">
                <div className="flex-1 [font-family:'DM_Sans',Helvetica] font-medium text-white text-center leading-normal text-base tracking-[0]">
                  The Journey
                </div>

                <div className="inline-flex items-start">
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
            </Link>
          </div>

          {/* Right Column - Image (Hidden on mobile and tablet) */}
          <img
            className="hidden lg:block relative self-stretch w-[648.38px] object-cover rounded-lg"
            alt="Rectangle"
            src="https://c.animaapp.com/Gyeak8sQ/img/rectangle-114329.svg"
          />
        </div>
      </div>
    </div>
  );
};
