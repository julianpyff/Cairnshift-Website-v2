export const TextBlock = (): JSX.Element => {
  return (
    <div className="flex items-end px-[60px] py-[104px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-2 h-2 bg-[#ee9d2b] rounded" />

          <div className="flex items-center justify-center [font-family:'DM_Mono',Helvetica] text-[#222f30] text-right leading-[14px] relative w-fit mt-[-1.00px] font-medium text-base tracking-[0] whitespace-nowrap">
            THE JOURNEY
          </div>
        </div>

        <p className="relative w-[761.43px] [font-family:'DM_Sans',Helvetica] font-medium text-[#15353c] text-5xl tracking-[-3.00px] leading-[56px]">
          Each phase delivers value you keep. But the real power is stacking
          them: each phase feeds the next.
        </p>
      </div>
    </div>
  );
};
