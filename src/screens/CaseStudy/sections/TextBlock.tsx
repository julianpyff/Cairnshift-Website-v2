export const TextBlock = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-[60px] py-12 md:py-16 lg:py-[104px] w-full relative">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 max-w-[761px] w-full">
        <div className="inline-flex items-center gap-4 relative">
          <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

          <div className="flex items-center justify-center w-fit [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-sm md:text-base text-right leading-[14px] whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
            PROVEN RESULTS
          </div>
        </div>

        <p className="w-full [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-[32px] md:text-[40px] lg:text-5xl text-center tracking-[-1.0px] md:tracking-[-3.00px] leading-[1.2] lg:leading-[56px]">
          From Challenge to Revenue. See how we help companies close the
          Data-Execution Gap.
        </p>
      </div>
    </div>
  );
};
