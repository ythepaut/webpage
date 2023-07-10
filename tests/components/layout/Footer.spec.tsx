import Footer from "../../../src/components/layout/Footer";
import { render, screen } from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import "../../mocks/router.mock";
import "../../mocks/intersection-observer.mock";

describe("Footer Layout Component", () => {
    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <Footer />
            </NextIntlProvider>
        );

        expect(screen.getByText("footer.privacy_policy")).toBeInTheDocument();
    });
});
