export const Component = (): JSX.Element => {
  return (
    <div className="flex-col items-start gap-14 pt-28 pb-8 px-[60px] flex w-[1440px] relative flex-[0_0_auto] bg-white">
      <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
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
  );
};
