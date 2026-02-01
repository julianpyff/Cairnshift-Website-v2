import { Link, useLocation } from "react-router-dom";

export const Header = (): JSX.Element => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex items-center justify-between px-8 py-4 relative self-stretch w-full flex-[0_0_auto]">
      <Link to="/">
        <img
          className="relative w-40 h-[24.39px] cursor-pointer"
          alt="CairnShift Logo"
          src="https://c.animaapp.com/Gyeak8sQ/img/group-83324530@2x.png"
        />
      </Link>

      <div className="inline-flex h-[54px] items-center justify-end gap-3 pl-3 pr-1 py-1 relative flex-[0_0_auto] bg-[#ffffffcc] rounded-xl border border-solid border-[#222f300d] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
        <div className="inline-flex items-start justify-end gap-px relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-end relative self-stretch flex-[0_0_auto]">
            <Link to="/" className="no-underline">
              <div
                className={`inline-flex items-center px-[17px] py-[12.5px] relative flex-[0_0_auto] rounded-lg ${isActive("/") ? "bg-[#f7f7f5]" : ""
                  }`}
              >
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-normal text-[#222f30] text-sm text-right tracking-[0] leading-[14px] whitespace-nowrap">
                    HOME
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="inline-flex flex-col items-end relative self-stretch flex-[0_0_auto]">
            <Link to="/journey" className="no-underline">
              <div
                className={`inline-flex items-center px-[17px] py-[12.5px] relative flex-[0_0_auto] rounded-lg ${isActive("/journey") ? "bg-[#f7f7f5]" : ""
                  }`}
              >
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-normal text-[#222f30] text-sm text-right tracking-[0] leading-[14px] whitespace-nowrap">
                    THE JOURNEY
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="inline-flex flex-col items-end relative self-stretch flex-[0_0_auto]">
            <Link to="/case-studies" className="no-underline">
              <div
                className={`inline-flex items-center px-[17px] py-[12.5px] relative flex-[0_0_auto] rounded-lg ${isActive("/case-studies") ? "bg-[#f7f7f5]" : ""
                  }`}
              >
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'DM_Mono',Helvetica] font-normal text-[#222f30] text-sm text-right tracking-[0] leading-[14px] whitespace-nowrap">
                    CASE STUDIES
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <a
          href="https://cal.com/frank-lautenschutz-cq6op4"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <div className="inline-flex h-[46px] items-center px-5 py-2 relative flex-[0_0_auto] bg-[#222f30] rounded-lg overflow-hidden cursor-pointer transition-all hover:bg-[#15353c]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Roboto_Mono',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                WORK WITH US
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
