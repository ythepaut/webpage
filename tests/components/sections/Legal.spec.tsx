import Legal from "../../../src/components/sections/Legal";
import {render, screen} from "@testing-library/react";
import {NextIntlProvider} from "next-intl";
import "../../mocks/translate.mock";
import "../../mocks/intersection-observer.mock";

describe("Legal Section Component", () => {
    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <Legal />
            </NextIntlProvider>
        );

        expect(screen.getByText("legal.title")).toBeInTheDocument();
    });
});
