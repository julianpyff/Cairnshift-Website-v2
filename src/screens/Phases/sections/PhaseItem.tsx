import { useState, useRef, useEffect } from "react";

interface WhatHappensItem {
    title: string;
    description: string;
}

interface PhaseItemProps {
    timeline: string;
    title: string;
    imageTitle: string;
    imageSrc: string; // Added prop for dynamic image
    whatHappens: WhatHappensItem[];
    theResult: string[];
    deliverables: string;
    defaultOpen?: boolean;
    className?: string;
}

export const PhaseItem = ({
    timeline,
    title,
    imageTitle,
    imageSrc,
    whatHappens,
    theResult,
    deliverables,
    defaultOpen = false,
    className = "",
}: PhaseItemProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsTransitioning(true);
        const timer = setTimeout(() => setIsTransitioning(false), 500);
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <div className={`w-full flex flex-col items-center relative flex-[0_0_auto] bg-[#ffffff] ${className}`}>
            {/* Header / Toggle Area */}
            <div
                className="flex flex-col items-start gap-4 md:gap-6 relative max-w-[1440px] w-full px-4 md:px-8 lg:px-[60px] flex-[0_0_auto] cursor-pointer pt-12 md:pt-16 lg:pt-[72px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="inline-flex items-center gap-3 md:gap-4 px-2 md:px-3 py-1.5 md:py-2 relative flex-[0_0_auto] bg-[#f7f7f5] rounded-lg">
                    <div className="relative w-2 md:w-2.5 h-2 md:h-2.5 bg-[#ee9d2b]" />
                    <div className="relative flex items-center  justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-sm md:text-base text-right tracking-[0] leading-[14px] whitespace-nowrap">
                        {timeline}
                    </div>
                </div>

                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex items-center flex-1 mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] tracking-[-1.00px] text-[32px] leading-[38px] md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[38px] pr-4">
                        {title}
                    </div>
                    {/* Animated Generic Plus Icon */}
                    <div className={`relative w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`}>
                        <img
                            className="w-full h-full"
                            alt="Toggle"
                            src="https://c.animaapp.com/ml3r5025flOZYU/img/add.svg"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] w-full px-4 md:px-8 lg:px-[60px]">
                <img
                    className="object-cover relative self-stretch w-full h-px mt-8 md:mt-12 lg:mt-14"
                    alt="Vector"
                    src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg"
                />
            </div>

            {/* Collapsible Content - Fluid Transition */}
            <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out w-full ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div
                    className={`${!isOpen || isTransitioning ? "overflow-hidden" : ""
                        } min-h-0 w-full flex flex-col items-center bg-[#ffffff]`}
                >
                    <div ref={contentRef} className="flex flex-col items-center w-full pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-14 bg-[#ffffff]">
                        {/* Mobile/Tablet: Image first, then content */}
                        <div className="lg:hidden flex flex-col items-start gap-6 md:gap-8 px-4 md:px-8 relative w-full">
                            {/* Image Card - Not sticky on mobile */}
                            <div className="flex flex-col w-full items-center gap-4">
                                <div
                                    className="relative self-stretch w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${imageSrc}),linear-gradient(0deg,rgba(243,243,243,1) 0%,rgba(243,243,243,1) 100%)`
                                    }}
                                >
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-4 w-auto max-w-[calc(100%-32px)] bg-[#15353c] rounded-[56px] flex items-center gap-3 md:gap-4 p-2 pl-6 shadow-lg">
                                        <div className="whitespace-nowrap [font-family:'DM_Sans'] font-medium text-white text-sm md:text-base leading-tight">
                                            {imageTitle}
                                        </div>
                                        <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#234850] rounded-full flex-shrink-0">
                                            <img
                                                className="w-3.5 h-3.5 md:w-4 md:h-4"
                                                alt="Arrow forward"
                                                src="https://c.animaapp.com/ml3r5025flOZYU/img/arrow-forward.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content for mobile */}
                            <div className="w-full gap-10 md:gap-12 flex flex-col items-start relative">
                                {/* What Happens */}
                                <div className="flex flex-col items-start gap-8 md:gap-10 relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg tracking-[-0.50px] leading-[25px] whitespace-nowrap">
                                        What happens
                                    </div>

                                    <div className="flex flex-col items-start gap-8 md:gap-10 relative self-stretch w-full flex-[0_0_auto]">
                                        <img
                                            className="mt-[-0.50px] relative self-stretch w-full h-px object-cover"
                                            alt="Vector"
                                            src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg"
                                        />

                                        {whatHappens.map((item, index) => (
                                            <div key={index} className="gap-6 md:gap-8 rounded-lg flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                                    <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-xl md:text-2xl tracking-[-1.00px] leading-[normal] whitespace-nowrap">
                                                        {item.title}
                                                    </div>
                                                    <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg tracking-[0] leading-[normal]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                        <img className="relative self-stretch w-full h-px" alt="Vector" src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg" />
                                    </div>
                                </div>

                                {/* The Result */}
                                <div className="gap-6 md:gap-8 px-6 md:px-8 lg:px-10 py-8 md:py-10 lg:py-12 self-stretch w-full flex-[0_0_auto] bg-[#15353c] rounded-lg border border-solid border-[#f3f3f3] flex flex-col items-start relative">
                                    <div className="inline-flex items-center gap-3 md:gap-4 relative flex-[0_0_auto]">
                                        <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />
                                        <div className="relative w-fit mt-[-1.00px] font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-[#ffffff] text-sm md:text-[length:var(--medium-text-base-font-size)] tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] whitespace-nowrap [font-style:var(--medium-text-base-font-style)]">
                                            THE RESULT
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-5 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
                                        {theResult.map((result, index) => (
                                            <div key={index} className="flex flex-col items-start gap-5 md:gap-6 w-full">
                                                <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-xl md:text-2xl tracking-[-1.00px] leading-[normal]">
                                                    {result}
                                                </p>
                                                {index < theResult.length - 1 && (
                                                    <img
                                                        className="relative self-stretch w-full h-px object-cover"
                                                        alt="Vector"
                                                        src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deliverables */}
                                <div className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="gap-4 p-6 md:p-8 bg-[#f9f9f9] rounded-2xl border border-solid border-[#f3f3f3] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="inline-flex items-center gap-3 md:gap-4 relative flex-[0_0_auto]">
                                            <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-sm md:text-base tracking-[0] leading-5 whitespace-nowrap">
                                                DELIVERABLES
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                            <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-base md:text-lg tracking-[0] leading-[normal]">
                                                {deliverables}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop: Two-column layout with sticky image */}
                        <div className="hidden lg:flex items-start gap-[113px] p-8 relative max-w-[1320px] w-full flex-[0_0_auto] bg-[#f3f3f3] rounded-lg">
                            {/* Left Column: Image Card - Sticky */}
                            <div className="flex flex-col w-[616px] items-center gap-4 self-start sticky top-8">
                                <div
                                    className="relative self-stretch w-full h-[660px] rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${imageSrc}),linear-gradient(0deg,rgba(243,243,243,1) 0%,rgba(243,243,243,1) 100%)`
                                    }}
                                >
                                    <div className="absolute left-[calc(50%_-_292px)] bottom-4 w-[584px] h-24 bg-[#15353c] rounded-[56px]">
                                        <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_258px)] w-[516px] font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-[#ffffff] text-[length:var(--medium-text-base-font-size)] text-center tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] [font-style:var(--medium-text-base-font-style)]">
                                            {imageTitle}
                                        </div>
                                        <div className="inline-flex items-start absolute top-[calc(50%_-_40px)] left-[496px]">
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

                            {/* Right Column: Content */}
                            <div className="w-[471px] gap-14 px-0 py-14 flex flex-col items-start relative">
                                {/* What Happens */}
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

                                        {whatHappens.map((item, index) => (
                                            <div key={index} className="gap-8 rounded-lg flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                                                    <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0d0d0d] text-2xl tracking-[-1.00px] leading-[38px] whitespace-nowrap">
                                                        {item.title}
                                                    </div>
                                                    <p className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#5e5e5e] text-lg tracking-[0] leading-[normal]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                        <img className="relative self-stretch w-full h-px" alt="Vector" src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg" />
                                    </div>
                                </div>

                                {/* The Result */}
                                <div className="gap-8 px-10 py-12 self-stretch w-full flex-[0_0_auto] bg-[#15353c] rounded-lg border border-solid border-[#f3f3f3] flex flex-col items-start relative">
                                    <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                                        <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />
                                        <div className="relative w-fit mt-[-1.00px] font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-[#ffffff] text-[length:var(--medium-text-base-font-size)] tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] whitespace-nowrap [font-style:var(--medium-text-base-font-style)]">
                                            THE RESULT
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                                        {theResult.map((result, index) => (
                                            <div key={index} className="flex flex-col items-start gap-6 w-full">
                                                <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[-1.00px] leading-[normal]">
                                                    {result}
                                                </p>
                                                {index < theResult.length - 1 && (
                                                    <img
                                                        className="relative self-stretch w-full h-px object-cover"
                                                        alt="Vector"
                                                        src="https://c.animaapp.com/ml3r5025flOZYU/img/vector-187.svg"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deliverables */}
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
                                                {deliverables}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
