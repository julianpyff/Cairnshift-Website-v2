export const TextBlock = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center px-[60px] py-[104px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex flex-col items-center justify-center gap-10 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

          <div className="flex items-center justify-center w-fit [font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-base text-right leading-[14px] whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
            PROVEN RESULTS
          </div>
        </div>

        <p className="relative w-[761.43px] [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-5xl text-center tracking-[-3.00px] leading-[56px]">
          From Challenge to Revenue. See how we help companies close the
          Data-Execution Gap.
        </p>
      </div>
    </div>
  );
};
