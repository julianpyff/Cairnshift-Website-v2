import { Container } from "./sections/Container";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Section } from "./sections/Section";
import { TextBlock } from "./sections/TextBlock";

export const CaseStudy = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-[#ffffff]">
      <Frame />
      <TextBlock />
      <FrameWrapper />
      <DivWrapper />
      <Section />
      <Container />
    </div>
  );
};
