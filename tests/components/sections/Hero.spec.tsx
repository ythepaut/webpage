import Hero from "../../../src/components/sections/Hero";
import {render, screen} from "@testing-library/react";
import {NextIntlProvider} from "next-intl";
import "../../mocks/router.mock";
import "../../mocks/intersection-observer.mock";

describe("Hero Section Component", () => {
    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <Hero />
            </NextIntlProvider>
        );

        expect(screen.getByText("index.hero.subtitle")).toBeInTheDocument();
    });
});
