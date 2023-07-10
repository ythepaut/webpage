import ContentTransition from "../../../src/components/layout/ContentTransition";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { AnimatePresence } from "framer-motion";

jest.mock("react-intersection-observer", () => ({
    useInView: jest.fn(() => [null, true]),
}));

describe("BackButton Component", () => {
    it("should render", () => {
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
