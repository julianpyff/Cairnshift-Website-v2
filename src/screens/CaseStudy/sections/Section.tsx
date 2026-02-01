export const Section = (): JSX.Element => {
  return (
    <div className="p-4 bg-[#f3f3f3] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col max-w-[1620px] h-[660px] items-center justify-center gap-12 relative w-full rounded-2xl overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.3)_100%),url(https://c.animaapp.com/ml3rl5x5N7kIHO/img/container.png)_50%_50%_/_cover] opacity-[0.77]">
        <p className="relative w-[713.32px] [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-8xl text-center tracking-[-1.00px] leading-[88px]">
          Ready to be Case Study #5?
        </p>

        <p className="relative w-[750.94px] h-8 [font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-lg text-center tracking-[-0.50px] leading-[25px]">
          Book a 30-minute Blueprint Call. Map your challenge and see if this is
          the right fit.
        </p>

        <div className="inline-flex min-w-24 items-center justify-center gap-6 pl-6 pr-1 py-1 relative flex-[0_0_auto] bg-[#e2e2e2] rounded-[56px]">
          <div className="relative flex-1 font-medium-text-base font-[number:var(--medium-text-base-font-weight)] text-[#102124] text-[length:var(--medium-text-base-font-size)] text-center tracking-[var(--medium-text-base-letter-spacing)] leading-[var(--medium-text-base-line-height)] [font-style:var(--medium-text-base-font-style)]">
            Book a Blueprint Call
          </div>

          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 p-3.5 relative flex-[0_0_auto] bg-[#ffffff] rounded-[48px]">
              <img
                className="relative w-5 h-5"
                alt="Arrow forward"
                src="https://c.animaapp.com/ml3rl5x5N7kIHO/img/arrow-forward-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
