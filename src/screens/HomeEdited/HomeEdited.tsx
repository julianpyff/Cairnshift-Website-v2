import { Header } from "../../components/Header";
import { Cards } from "./sections/Cards";
import { DifferentiatorSection } from "./sections/DifferentiatorSection";
import { Container } from "./sections/Container";
import { FrameWrapper } from "./sections/FrameWrapper";
import { HowWeWork } from "./sections/HowWeWork";
import { Section } from "./sections/Section";
import { TextBlock } from "./sections/TextBlock";
import waterImage from "../../../images/water.jpg";

export const HomeEdited = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white w-full"
      data-model-id="35:1476"
    >
      <div className="relative w-full bg-[#f3f3f3] flex flex-col overflow-x-clip">
        {/* Navigation */}
        <div className="w-full z-20">
          <Header />
        </div>

        {/* Hero Section - Desktop */}
        <div className="hidden lg:block relative w-full h-[800px] overflow-clip">
          {/* Hero Image - No rounded corners */}
          <div className="absolute top-[32px] left-[17px] w-[1407px] h-[698px]">
            <img
              className="w-full h-full object-cover"
              alt="Hero Visual"
              src={waterImage}
            />
          </div>

          {/* Hero Card - Overlapping with rounded corners */}
          <div className="absolute top-[376px] left-[calc(50%+7px)] w-[697px] h-[408px] bg-[#15353c] rounded-lg p-10 flex flex-col justify-between">
            <p className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-5xl tracking-[-3px] leading-[56px]">
              AI-First Go-to-Market Orchestration &amp; Execution
            </p>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base leading-5 w-[408px]">
              CairnShift helps scale-ups, corporates, and enterprises organise their sales foundation to consistently create new business.
            </p>
          </div>
        </div>

        {/* Hero Section - Mobile/Tablet */}
        <div className="lg:hidden w-full px-4 md:px-10 pb-10 pt-8">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-sm">
            {/* Image Area */}
            <div className="w-full aspect-video relative">
              <img
                className="w-full h-full object-cover"
                alt="Hero Visual"
                src={waterImage}
              />
            </div>

            {/* Card Area */}
            <div className="bg-[#15353c] p-6 md:p-10 flex flex-col gap-6">
              <p className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-3xl md:text-4xl tracking-[-0.03em] leading-tight">
                AI-First Go-to-Market Orchestration &amp; Execution
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base leading-relaxed">
                CairnShift helps scale-ups, corporates, and enterprises organise their sales foundation to consistently create new business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TextBlock />
      <HowWeWork />
      <FrameWrapper />
      <DifferentiatorSection />
      <Cards />
      <Section />
      <Container />
    </div>
  );
};
