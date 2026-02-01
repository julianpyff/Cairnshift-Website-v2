import { Cards } from "./sections/Cards";
import { Component } from "./sections/Component";
import { ComponentWrapper } from "./sections/ComponentWrapper";
import { Container } from "./sections/Container";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { HowWeWork } from "./sections/HowWeWork";
import { Section } from "./sections/Section";
import { TextBlock } from "./sections/TextBlock";

export const HomeEdited = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative bg-white"
      data-model-id="35:1476"
    >
      <Frame />
      <TextBlock />
      <HowWeWork />
      <FrameWrapper />
      <Component />
      <ComponentWrapper />
      <DivWrapper />
      <Div />
      <Cards />
      <Section />
      <Container />
    </div>
  );
};
