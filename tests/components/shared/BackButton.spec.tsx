import BackButton from "../../../src/components/shared/BackButton";
import {render} from "@testing-library/react";
import {NextIntlProvider} from "next-intl";
import {expect} from "@jest/globals";

describe("BackButton Component", () => {

    beforeAll(() => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter");
        useRouter.mockImplementationOnce(() => ({
            query: { locale: "fr" }
        }));
    });

    it("should render", () => {
        const button = render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <BackButton />
            </NextIntlProvider>
        );

        expect(button).toBeTruthy();
    });
});
