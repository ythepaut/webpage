import Error from "../../../src/components/sections/Error";
import {render, screen} from "@testing-library/react";
import {NextIntlProvider} from "next-intl";
import "../../mocks/router.mock";

describe("Error Section Component", () => {
    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <Error title="Title" description="Description" />
            </NextIntlProvider>
        );

        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Description")).toBeInTheDocument();
    });
});
