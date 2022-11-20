import BackButton from "../../../src/components/shared/BackButton";
import {render} from "@testing-library/react";
import {NextIntlProvider} from "next-intl";
import {expect} from "@jest/globals";
import "../../mocks/translate.mock";

describe("BackButton Component", () => {

    it("should render", () => {
        const button = render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <BackButton />
            </NextIntlProvider>
        );

        expect(button).toBeTruthy();
    });
});
