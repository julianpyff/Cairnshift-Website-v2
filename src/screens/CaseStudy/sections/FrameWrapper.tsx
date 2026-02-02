import React, { useRef, useState, useEffect } from "react";

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LineSeparator = () => (
  <img
    className="self-stretch w-full relative h-px object-cover opacity-20"
    alt="Vector"
    src="https://c.animaapp.com/ml3rl5x5N7kIHO/img/vector-188.svg"
  />
);

interface ApproachItem {
  title: string;
  desc: string;
}

interface CaseStudyData {
  id: string;
  label: string;
  labelBg: string;
  bg: string;
  cardBg: string;
  title: string;
  subtitle: string;
  resultTitle: string;
  resultDesc: string;
  companyBgDesc: string;
  challenges: string[];
  approach: ApproachItem[];
}

const cases: CaseStudyData[] = [
  {
    id: "case-1",
    label: "CASE STUDY 01",
    labelBg: "#082d34",
    bg: "#15353c",
    cardBg: "#092e35",
    title: "Mourik",
    subtitle: "Infrastructure, Industry, Construction",
    resultTitle: "20 In-Person Meetings",
    resultDesc: "Generated significant cross-sell opportunities.",
    companyBgDesc:
      "Mourik (est. 1933) is a family-owned Dutch engineering and contracting company with €749M turnover and 2,100+ employees.",
    challenges: [
      "Acquired innovative technology but lacked a structured GTM foundation.",
      "Struggled to proactively engage existing customers with new solutions.",
      "No data-driven approach to prioritize new prospects.",
    ],
    approach: [
      {
        title: "Knowledge Engine",
        desc: "Ingested acquired technology data and leveraged deep research to map target companies and personas per geography.",
      },
      {
        title: "Activation Engine",
        desc: "Prioritized outreach using a waterfall approach and validated the format with friendly customers.",
      },
    ],
  },
  {
    id: "case-2",
    label: "CASE STUDY 02",
    labelBg: "#727d7f",
    bg: "#849194",
    cardBg: "#727d7f",
    title: "Blits.ai",
    subtitle: "GenAI & Enterprise Software",
    resultTitle: "High-Value C-Level Conversations",
    resultDesc: "Opened early opportunities through a custom targeting approach.",
    companyBgDesc:
      "Blits.ai is a secure, modular GenAI framework designed to surface critical knowledge and integrate seamless AI into complex enterprise environments.",
    challenges: [
      "Founder-led sales limited scalability and focus.",
      "Organic growth left a lack of fundamental sales and marketing basics.",
      "Expanding into new industries and finding B2B end-customers was a complete unknown.",
    ],
    approach: [
      {
        title: "Knowledge Engine",
        desc: "Built a 'Knowledge fundament' to enable tailored prospecting and revamped the value proposition.",
      },
      {
        title: "Activation Engine",
        desc: "Validated three new industries through iterative outreach and prioritized key events to drive high-quality meetings.",
      },
    ],
  },
  {
    id: "case-3",
    label: "CASE STUDY 03",
    labelBg: "#082d34",
    bg: "#15353c",
    cardBg: "#092e35",
    title: "naext.ai",
    subtitle: "Deep-Tech & Spatial Computing",
    resultTitle: "Identified Key GTM Partner",
    resultDesc:
      "Created a scalable engagement model to scale business and deploy tech.",
    companyBgDesc:
      "Naext.ai is a deep-tech company using human-centric spatial computing and inclusive AR to make complex environments (like hospitals) intuitive.",
    challenges: [
      "Primary focus was on engineering, leaving new business without process or structure.",
      "Lacked the deep research required to guide execution effectively.",
      "Stretched budgets required resources to be prioritized for development.",
    ],
    approach: [
      {
        title: "Knowledge Engine",
        desc: "Solidified deep research in a two-week iterative process to identify Tier 1, 2, and 3 targets.",
      },
      {
        title: "Activation Engine",
        desc: 'Executed explorative, "interview-style" discovery calls with board members to learn without immediate commercial intent.',
      },
    ],
  },
  {
    id: "case-4",
    label: "CASE STUDY 04",
    labelBg: "#727d7f",
    bg: "#849194",
    cardBg: "#727d7f",
    title: "Eleads",
    subtitle: "Legal Tech & Lead Generation",
    resultTitle: "Doubled Partner Base (6 Months)",
    resultDesc:
      "Grew the customer base from 24 to 48 law firms using a structured outreach cadence.",
    companyBgDesc:
      "Eleads operates specialist websites connecting legal seekers with law firms, reaching up to 1 million people annually.",
    challenges: [
      "Founder-led operation wanted to double growth but lacked a clear conversion process.",
      "Relied on costly traditional advertising due to a lack of prospect data.",
      "Sales process used overly detailed content that failed to convert.",
    ],
    approach: [
      {
        title: "Knowledge Engine",
        desc: "Conducted a market deep dive to clarify ICPs and their specific knowledge needs.",
      },
      {
        title: "Revenue Engine",
        desc: "Streamlined discovery calls from 45 to 15 minutes and established a clear process from engagement to adoption.",
      },
    ],
  },
];

const CaseCard = ({ card }: { card: CaseStudyData }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(100);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateStickyTop = () => {
      // Check if we're on mobile/tablet (< 1024px)
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (cardRef.current && !mobile) {
        const height = cardRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        // Calculate the top offset.
        // We want the card to prevent being covered until its bottom is visible.
        // Standard sticky behavior: stuck at 'top'.
        // If height > viewport, 'top' must be negative so that the bottom of the element aligns with viewport bottom when stuck.
        // calculatedTop approx = ViewportHeight - CardHeight - (Buffer/Margin)
        // We ensure it doesn't stick 'too low' (max 100px from top)

        const buffer = 40;
        const calculatedTop = Math.min(100, viewportHeight - height - buffer);

        setStickyTop(calculatedTop);
      }
    };

    updateStickyTop();
    window.addEventListener("resize", updateStickyTop);
    // Also update after a short delay to ensure fonts/images loaded
    const timeoutId = setTimeout(updateStickyTop, 500);

    return () => {
      window.removeEventListener("resize", updateStickyTop);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      id={card.id}
      className={`flex flex-col w-full max-w-[1440px] rounded-2xl md:rounded-[24px] shadow-xl mb-6 md:mb-12 lg:mb-24 last:mb-0 ${!isMobile ? 'lg:sticky' : ''}`}
      style={{
        backgroundColor: card.bg,
        top: !isMobile ? `${stickyTop}px` : undefined,
        zIndex: !isMobile ? 1 : undefined // Ensure visual stacking order if needed, though DOM order handles it
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col px-4 md:px-6 lg:px-8 pt-6 md:pt-8 pb-3 md:pb-4 gap-3 md:gap-4">
        <div
          className="inline-flex items-center gap-3 md:gap-4 px-2 md:px-3 py-1.5 md:py-2 rounded-lg self-start"
          style={{ backgroundColor: card.labelBg }}
        >
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#ee9d2b]" />
          <div className="[font-family:'DM_Mono',Helvetica] font-medium text-[#f3f3f3] text-sm md:text-base whitespace-nowrap">
            {card.label}
          </div>
        </div>

        <div className="w-full h-px bg-[#ffffff1a] mt-2 md:mt-4" />
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row px-4 md:px-6 lg:px-8 pb-8 md:pb-10 lg:pb-12 gap-8 md:gap-10 lg:gap-12 h-full grow">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:w-[45%] justify-between gap-6 md:gap-8 shrink-0">
          <div className="flex flex-col gap-2">
            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] tracking-[-1.00px] -ml-[2px] text-[36px] leading-[1.1] md:text-[48px] lg:text-[64px]">
              {card.title}
            </div>
            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] opacity-50 tracking-[-1.00px] text-[24px] leading-[1.1] md:text-[32px] lg:text-[48px]">
              {card.subtitle}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 mt-auto">
            <LineSeparator />
            <div className="flex flex-col gap-2">
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] leading-tight text-[20px] md:text-[24px] lg:text-[32px]">
                {card.resultTitle}
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] opacity-70 text-base md:text-lg">
                {card.resultDesc}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full lg:w-[55%] gap-4 md:gap-6">
          {/* Company Background */}
          <div
            className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-lg"
            style={{ backgroundColor: card.cardBg }}
          >
            <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] leading-tight text-[20px] md:text-[24px] lg:text-[32px]">
              Company Background
            </div>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] opacity-70 leading-relaxed text-sm md:text-base lg:text-lg">
              {card.companyBgDesc}
            </p>
          </div>

          {/* The Challenge */}
          <div
            className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-lg"
            style={{ backgroundColor: card.cardBg }}
          >
            <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] leading-tight text-[20px] md:text-[24px] lg:text-[32px]">
              The Challenge
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              {card.challenges.map((challenge, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <LineSeparator />}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0 opacity-70 mt-0.5 md:mt-1">
                      <CloseIcon />
                    </div>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] opacity-70 leading-relaxed text-sm md:text-base lg:text-lg">
                      {challenge}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* The Approach */}
          <div
            className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 lg:p-6 rounded-lg"
            style={{ backgroundColor: card.cardBg }}
          >
            <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] leading-tight text-[20px] md:text-[24px] lg:text-[32px]">
              The Approach
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              {card.approach.map((item, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <LineSeparator />}
                  <div className="flex flex-col gap-1">
                    <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#ffffff] opacity-70 text-base md:text-lg">
                      {item.title}
                    </div>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] opacity-70 leading-relaxed text-sm md:text-base lg:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8 w-full pb-12 md:pb-16 lg:pb-20 px-4 md:px-6 lg:px-0">
      {cases.map((card) => (
        <CaseCard key={card.id} card={card} />
      ))}
    </div>
  );
};
