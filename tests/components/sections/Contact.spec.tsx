import Contact from "../../../src/components/sections/Contact";
import { render, screen } from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import "../../mocks/router.mock";
import "../../mocks/intersection-observer.mock";

describe("Contact Section Component", () => {
    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <Contact />
            </NextIntlProvider>
        );

        expect(screen.getByText("index.contact.title")).toBeInTheDocument();
    });
});
