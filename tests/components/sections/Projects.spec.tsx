import Projects from "../../../src/components/sections/Projects";
import { render, screen } from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import "../../mocks/router.mock";
import "../../mocks/intersection-observer.mock";
import { expect } from "@jest/globals";

describe("Projects Section Component", () => {
    beforeAll(() => {
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([]),
            })
        );
    });

    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <Projects />
            </NextIntlProvider>
        );

        expect(screen.getByText("index.projects.title")).toBeInTheDocument();
        expect(global.fetch).toHaveBeenCalledWith("/api/projects");
    });
});
