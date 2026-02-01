import { useEffect, useRef, useState } from "react";
// @ts-ignore
import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.esm.jsx";
import animationVideo from "../../../assets/Cairn_Construction_Animation.webm";

export const DifferentiatorSection = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const elementHeight = rect.height;

            // The sticky element is top-24 (96px).
            // We want 0% when the section top hits the sticky position (or slightly before)
            // And 100% when the bottom of the section approaches the viewport

            // simple logic: map the scroll position relative to the container
            // rect.top goes from +viewport down to -height
            // We want to start when rect.top is around 96px (sticky start)

            const stickyOffset = 96;
            // When rect.top == stickyOffset, we are at the start.
            // As we scroll down, rect.top becomes smaller (negative).
            // So (stickyOffset - rect.top) is the distance scrolled into the section.

            const scrolled = stickyOffset - rect.top;
            const scrollableHeight = elementHeight - window.innerHeight; // rough active distance

            if (scrollableHeight <= 0) return;

            let p = scrolled / scrollableHeight;

            // Clamp between 0 and 1
            p = Math.max(0, Math.min(1, p));

            setProgress(p);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col items-center bg-white w-full">
            {/* Header Section */}
            <div className="w-full max-w-[1620px] px-[60px] pt-28 pb-8 relative">
                <div className="flex w-full">
                    {/* Spacer to match video column */}
                    <div className="w-1/2" />

                    {/* Header alignment matching text column */}
                    <div className="w-1/2 pl-[60px]">
                        <div className="flex flex-col w-[535px] items-start gap-8 relative">
                            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                                <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />
                                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-base text-right tracking-[0] leading-[14px] whitespace-nowrap">
                                    KEY DIFFERENTIATOR
                                </div>
                            </div>
                            <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[40px] tracking-[0] leading-10">
                                What Makes CairnShift Different
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section with Sticky Video */}
            <div
                ref={containerRef}
                className="relative flex items-start w-full max-w-[1620px] px-[60px]"
            >
                {/* Sticky Video Column (Left) */}
                <div className="w-1/2 sticky top-24 h-[80vh] flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-50 [&_video]:!object-cover [&_canvas]:!object-cover [&_video]:w-full [&_video]:h-full [&_canvas]:w-full [&_canvas]:h-full">
                        <ScrollyVideo
                            src={animationVideo}
                            transitionSpeed={12}
                            cover={false}
                            trackScroll={false}
                            videoPercentage={progress}
                        />
                    </div>
                </div>

                {/* Scrolling Text Column (Right) */}
                <div className="flex flex-col w-1/2 pl-[60px] gap-[200px] py-14 pb-32">

                    {/* Block 1: Working systems in weeks */}
                    <div className="flex flex-col w-full items-start gap-14">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[32px] tracking-[-1.00px] leading-[38px]">
                                <span className="text-[#0d0d0d] tracking-[-0.32px]">
                                    Working systems in weeks.<br />
                                </span>
                                <span className="text-[#868686] tracking-[-0.32px]">
                                    Not strategy decks in months.
                                </span>
                            </p>
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">
                                Most consultancies deliver reports. Most tools need months of learning and setup. CairnShift delivers managed infrastructure running in weeks completely hassle-free. Domain warmup, deliverability monitoring, and budget-protecting validation all handled. Focus stays on pipeline, not setup.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-[18px] w-full">
                            <div className="w-fit [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-base tracking-[0] leading-[23px] whitespace-nowrap">
                                THE RESULT
                            </div>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Managed outbound infrastructure</div>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Tiered validation and enrichment engine</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Ghost Profile discovery beyond LinkedIn-only datasets</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Multi-agent support for replies, call prep, and follow-up</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                        </div>
                    </div>

                    {/* Block 2: Hands-on partnership */}
                    <div className="flex flex-col w-full items-start gap-14">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[32px] tracking-[-1.00px] leading-[38px]">
                                <span className="text-[#0d0d0d] tracking-[-0.32px]">
                                    Hands-on partnership.<br />
                                </span>
                                <span className="text-[#868686] tracking-[-0.32px]">
                                    Not arms-length consulting
                                </span>
                            </p>
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">
                                No playbook handoff and disappear. Co-running discovery calls, enforcing follow-through, staying in the trenches to build what works. When objections arise or deals stall, support shows up. Partnership, not consulting theater.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-[18px] w-full">
                            <div className="w-fit [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-base tracking-[0] leading-[23px] whitespace-nowrap">
                                THE COMPOUND EFFECT
                            </div>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Co-run discovery calls to build playbooks</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Enforce follow-through and process discipline</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Stay hands-on through deal cycles</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Strategic counsel, not just dashboards</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                        </div>
                    </div>

                    {/* Block 3: Build to compound */}
                    <div className="flex flex-col w-full items-start gap-14">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[32px] tracking-[-1.00px] leading-[38px]">
                                <span className="text-[#0d0d0d] tracking-[-0.32px]">
                                    Build to compound,<br />
                                </span>
                                <span className="text-[#868686] tracking-[-0.32px]">
                                    Not a one-off project
                                </span>
                            </p>
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">
                                Each phase delivers value to keep: research reports, validated positioning, documented playbooks, signal-based prospecting flows. The real power is how they stack - each phase feeds the next. Knowledge bases grow and systems get smarter with every interaction. No retainer dependency or pilot that ends.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-[18px] w-full">
                            <div className="w-fit [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-base tracking-[0] leading-[23px] whitespace-nowrap">
                                THE COMPOUND EFFECT
                            </div>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Clear deliverables each phase</div>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Knowledge base that grows over time</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Playbooks that improve with every deal</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[-0.50px] leading-[25px]">Systems that get smarter, not stale</p>

                            <img className="w-full h-px object-cover" alt="Vector" src="https://c.animaapp.com/Gyeak8sQ/img/vector-187-1.svg" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
