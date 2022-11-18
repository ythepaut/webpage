import ContentTransition from "../../../src/components/layout/ContentTransition";
import {render, screen} from "@testing-library/react";
import {expect} from "@jest/globals";
import {AnimatePresence} from "framer-motion";

describe("BackButton Component", () => {
    it("should render", () => {
        jest.spyOn(require("react-intersection-observer"), "useInView")
            .mockReturnValue([null, true]);

        const transitionWrapper = render(
            <AnimatePresence mode="wait">
                <ContentTransition>
                    <span>Test</span>
                </ContentTransition>
            </AnimatePresence>
        );
        expect(transitionWrapper).toBeTruthy();
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
