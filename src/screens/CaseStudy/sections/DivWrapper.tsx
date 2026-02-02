import { ArrowForward } from "../../../components/ArrowForward";
import { Master } from "../../../components/Master";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full self-stretch items-center justify-center bg-white">
      {/* Header Section */}
      <div className="flex flex-col w-full max-w-[1440px] px-4 md:px-8 lg:px-[60px] pt-12 md:pt-24 lg:pt-36 pb-8 md:pb-[88px] gap-8 md:gap-12 lg:gap-[68px]">
        {/* Label */}
        <div className="inline-flex items-center gap-4 px-3 py-2 bg-[#f7f7f5] rounded-lg self-start">
          <div className="w-2.5 h-2.5 bg-[#ee9d2b]" />
          <div className="[font-family:'DM_Mono',Helvetica] font-medium text-[#222f30] text-base leading-[14px]">
            THE RESULT
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full lg:pl-[448px]">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#0d0d0d] text-[32px] md:text-[40px] lg:text-5xl leading-tight">
            Control Over Your Growth
          </div>

          <p className="w-full lg:max-w-[500px] [font-family:'DM_Sans',Helvetica] font-normal text-[#222f30cc] text-base md:text-[18.1px] leading-relaxed">
            Each one plays a unique role in identifying promising candidates,
            and together, they guide the technologies we’ve integrated into our platform.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[60px] pb-12 md:pb-20 lg:pb-[104px]">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Card 1 */}
          <div className="flex flex-col p-8 md:p-10 bg-[#15353c] rounded-2xl flex-1 min-h-[300px] md:min-h-[400px] gap-8 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="w-full"></div>
              <div className="p-3 bg-[#0d2328] rounded-[11.17px] group-hover:bg-[#1a3f47] transition-colors">
                <Master
                  className="!rounded-none !justify-center !flex-[0_0_auto] !p-0 !left-[unset] !bg-transparent !top-[unset]"
                  hasDiv={false}
                  override={
                    <ArrowForward
                      arrowForward="https://c.animaapp.com/ml3rl5x5N7kIHO/img/arrow-forward-2.svg"
                      className="!h-6 !w-6 !relative !left-[unset] !top-[unset]"
                    />
                  }
                  visible={false}
                />
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] md:text-[32px] lg:text-4xl tracking-[-1.00px] leading-tight">
                From Heroics to Systems
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base md:text-[18.1px] leading-relaxed opacity-90">
                Revenue that doesn't depend on your best rep having a good week.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-8 md:p-10 bg-[#849194] rounded-2xl flex-1 min-h-[300px] md:min-h-[400px] gap-8 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="w-full"></div>
              <div className="p-3 bg-[#727d7f] rounded-[11.17px] group-hover:bg-[#869294] transition-colors">
                <Master
                  className="!rounded-none !justify-center !flex-[0_0_auto] !p-0 !left-[unset] !bg-transparent !top-[unset]"
                  hasDiv={false}
                  override={
                    <ArrowForward
                      arrowForward="https://c.animaapp.com/ml3rl5x5N7kIHO/img/arrow-forward.svg"
                      className="!h-6 !w-6 !relative !left-[unset] !top-[unset]"
                    />
                  }
                  visible={false}
                />
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-[28px] md:text-[32px] lg:text-4xl tracking-[-1.00px] leading-tight">
                From Guessing to Knowing
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base md:text-lg leading-relaxed opacity-90">
                Validating new markets in weeks, not quarters.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-8 md:p-10 bg-[#f3f3f3] rounded-2xl flex-1 min-h-[300px] md:min-h-[400px] gap-8 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="w-full"></div>
              <div className="p-3 bg-[#d5d5d5] rounded-[11.17px] group-hover:bg-[#e0e0e0] transition-colors">
                <Master
                  className="!rounded-none !justify-center !flex-[0_0_auto] !p-0 !left-[unset] !bg-transparent !top-[unset]"
                  hasDiv={false}
                  override={
                    <ArrowForward
                      arrowForward="https://c.animaapp.com/ml3rl5x5N7kIHO/img/arrow-forward-3.svg"
                      className="!h-6 !w-6 !relative !left-[unset] !top-[unset]"
                    />
                  }
                  visible={false}
                />
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#222f30] text-[28px] md:text-[32px] lg:text-4xl tracking-[-1.00px] leading-tight">
                From Decay<br />to Growth
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#222f30cc] text-base md:text-[18.1px] leading-relaxed opacity-90">
                Infrastructure that appreciates in value the more you use it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
