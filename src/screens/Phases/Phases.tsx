import { Header } from "../../components/Header";
import { Container } from "./sections/Container";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Section } from "./sections/Section";
import { TextBlock } from "./sections/TextBlock";

export const Phases = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-[#f3f3f3]">
      <Header />
      <TextBlock />
      <img
        className="relative self-stretch w-full flex-[0_0_auto]"
        alt="Text block"
        src="https://c.animaapp.com/ml3r5025flOZYU/img/text-block.svg"
      />

      <FrameWrapper />
      <Section />
      <Container />
    </div>
  );
};
