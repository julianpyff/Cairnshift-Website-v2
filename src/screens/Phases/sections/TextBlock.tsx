export const TextBlock = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[104px] w-full bg-[#f3f3f3] relative">
      <div className="flex flex-col items-start gap-6 md:gap-10">
        <div className="inline-flex items-center gap-4 relative">
          <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

          <div className="flex items-center justify-center [font-family:'DM_Mono',Helvetica] text-[#222f30] text-right leading-[14px] relative w-fit mt-[-1.00px] font-medium text-sm md:text-base tracking-[0] whitespace-nowrap">
            THE JOURNEY
          </div>
        </div>

        <p className="w-full lg:w-[761px] [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-[32px] md:text-[40px] lg:text-5xl tracking-[-1.0px] md:tracking-[-3.00px] leading-[1.2] lg:leading-[56px]">
          Each phase delivers value you keep. But the real power is stacking
          them: each phase feeds the next.
        </p>
      </div>
    </div>
  );
};
