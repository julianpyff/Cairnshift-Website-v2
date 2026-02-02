import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = (): JSX.Element => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4 relative self-stretch w-full flex-[0_0_auto]">
      <Link to="/" onClick={closeMobileMenu}>
        <img
          className="relative w-32 md:w-36 lg:w-40 h-auto cursor-pointer"
          alt="CairnShift Logo"
          src="https://c.animaapp.com/Gyeak8sQ/img/group-83324530@2x.png"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:inline-flex h-[54px] items-center justify-end gap-3 pl-3 pr-1 py-1 relative flex-[0_0_auto] bg-[#ffffffcc] rounded-xl border border-solid border-[#222f300d] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
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

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex items-center justify-center w-11 h-11 bg-[#ffffffcc] rounded-lg border border-solid border-[#222f300d] backdrop-blur-[7px] cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="#222f30"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-[#ffffffcc] backdrop-blur-[7px] rounded-xl border border-solid border-[#222f300d] shadow-lg z-50 overflow-hidden">
          <div className="flex flex-col p-2">
            <Link to="/" className="no-underline" onClick={closeMobileMenu}>
              <div
                className={`flex items-center px-4 py-3 rounded-lg ${isActive("/") ? "bg-[#f7f7f5]" : ""
                  }`}
              >
                <div className="[font-family:'DM_Mono',Helvetica] font-normal text-[#222f30] text-sm tracking-[0] leading-[14px]">
                  HOME
                </div>
              </div>
            </Link>

            <Link to="/journey" className="no-underline" onClick={closeMobileMenu}>
              <div
                className={`flex items-center px-4 py-3 rounded-lg ${isActive("/journey") ? "bg-[#f7f7f5]" : ""
                  }`}
              >
                <div className="[font-family:'DM_Mono',Helvetica] font-normal text-[#222f30] text-sm tracking-[0] leading-[14px]">
                  THE JOURNEY
                </div>
              </div>
            </Link>

            <Link to="/case-studies" className="no-underline" onClick={closeMobileMenu}>
              <div
                className={`flex items-center px-4 py-3 rounded-lg ${isActive("/case-studies") ? "bg-[#f7f7f5]" : ""
                  }`}
              >
                <div className="[font-family:'DM_Mono',Helvetica] font-normal text-[#222f30] text-sm tracking-[0] leading-[14px]">
                  CASE STUDIES
                </div>
              </div>
            </Link>

            <a
              href="https://cal.com/frank-lautenschutz-cq6op4"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline mt-2"
              onClick={closeMobileMenu}
            >
              <div className="flex items-center justify-center px-5 py-3 bg-[#222f30] rounded-lg cursor-pointer transition-all hover:bg-[#15353c]">
                <div className="[font-family:'Roboto_Mono',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-[14px]">
                  WORK WITH US
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
