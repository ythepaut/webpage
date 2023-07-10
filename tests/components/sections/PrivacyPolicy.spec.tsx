import PrivacyPolicy from "../../../src/components/sections/PrivacyPolicy";
import { render, screen } from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import "../../mocks/router.mock";
import "../../mocks/intersection-observer.mock";

describe("PrivacyPolicy Section Component", () => {
    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <PrivacyPolicy />
            </NextIntlProvider>
        );

        expect(screen.getByText("privacy_policy.title")).toBeInTheDocument();
    });
});
