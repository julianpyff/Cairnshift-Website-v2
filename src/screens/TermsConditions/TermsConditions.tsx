import { Header } from "../../components/Header";
import { Container } from "./sections/Container";
import { Content } from "./sections/Content";

export const TermsConditions = (): JSX.Element => {
    return (
        <div className="flex flex-col items-start relative bg-white w-full">
            <div className="w-full bg-[#f3f3f3]">
                <Header />
            </div>
            <Content />
            <Container />
        </div>
    );
};
