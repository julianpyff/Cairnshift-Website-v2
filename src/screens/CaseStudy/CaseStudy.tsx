import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./sections/Container";
import { DivWrapper } from "./sections/DivWrapper";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Section } from "./sections/Section";
import { TextBlock } from "./sections/TextBlock";

export const CaseStudy = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="flex flex-col items-start relative bg-[#ffffff]">
      <Header />
      <TextBlock />
      <FrameWrapper />
      <DivWrapper />
      <Section />
      <Container />
    </div>
  );
};
