export const Container = (): JSX.Element => {
  return (
    <div className="relative max-w-[1620px] w-full h-[780px] bg-[#15353c] rounded-[16px_16px_0px_0px]">
      <div className="absolute w-[calc(100%_-_112px)] top-[60px] left-12 h-[490px]">
        <div className="flex flex-col w-[calc(100%_-_684px)] items-start gap-6 absolute -top-px left-3">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-[42px] tracking-[-0.84px] leading-[50.4px]">
            Centralise Your Knowledge.
            <br />
            Consistent Sales Execution.
          </p>

          <p className="relative w-[244.81px] h-[39.05px] opacity-50 [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-[14.4px] tracking-[0] leading-[23.0px]">
            frank@cairnshift.com
            <br />
            +31 6 119 118 30 | +44 73 560 70 570
          </p>
        </div>

        <div className="absolute top-0 left-[786px] w-[546px] h-[154px]">
          <div className="flex flex-col w-[calc(100%_-_353px)] items-start gap-5 pl-5 pr-0 py-0 absolute top-px left-0 border-l [border-left-style:solid] border-[#ffffff33]">
            <div className="flex flex-col w-[232px] items-start relative flex-[0_0_auto] mr-[-60.00px]">
              <div className="w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ee9d2b] text-base tracking-[0] leading-[14px] whitespace-nowrap relative">
                THE ENGINES
              </div>
            </div>

            <div className="flex flex-col gap-2 self-stretch w-full items-start relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                Knowledge
              </div>

              <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                Activation
              </div>

              <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                Revenue
              </div>

              <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                Content
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[209px] items-start gap-5 pl-5 pr-0 py-0 absolute top-px left-[249px] border-l [border-left-style:solid] border-[#ffffff33]">
            <div className="flex flex-col w-[232px] items-start relative flex-[0_0_auto] mr-[-44.00px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ee9d2b] text-base tracking-[0] leading-[14px] whitespace-nowrap">
                EXPLORE
              </div>
            </div>

            <div className="flex flex-col gap-2 self-stretch w-full items-start relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                About us
              </div>

              <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                The Journey
              </div>

              <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                Proven Results
              </div>

              <div className="relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal text-[#f3f3f3] text-base tracking-[0] leading-[23.0px]">
                Book a Blueprint
              </div>
            </div>
          </div>

          <div className="absolute top-px left-[498px] -rotate-90 inline-flex items-start">
            <div className="inline-flex items-center justify-center gap-2.5 p-3.5 relative flex-[0_0_auto] bg-[#234850] rounded-[48px]">
              <img
                className="relative w-5 h-5 rotate-90"
                alt="Arrow forward"
                src="https://c.animaapp.com/ml3r5025flOZYU/img/arrow-forward.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[1360px] items-start gap-[40.46px] absolute left-[calc(50.00%_-_680px)] bottom-10">
        <img
          className="relative w-[1360px] h-[207.32px]"
          alt="Group"
          src="https://c.animaapp.com/ml3r5025flOZYU/img/group-83324530-1.png"
        />

        <div className="flex flex-col items-end pl-0 pr-[681.72px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.01px] [font-family:'DM_Mono',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[14px]">
              © 2026 CAIRNSHIFT. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
