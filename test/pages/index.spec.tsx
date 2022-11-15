import { render, screen } from "@testing-library/react";
import HomePage, {getStaticProps} from "../../src/pages";
import "@testing-library/jest-dom";
import {IntlProvider} from "use-intl";

const intlWrapper = {
    wrapper: ({children}: any) => <IntlProvider locale="fr">{children}</IntlProvider>
};

describe("Home Page", () => {

    it("should render all sections", () => {

        render(<HomePage />, intlWrapper);
        const hero = screen.getByRole("hero", {
            name: "test"
        });

        expect(hero).toBeInTheDocument();
    });

    it("should fetch i18n messages", async () => {
        const response = await getStaticProps({locale: "en"}) as any;
        expect(response.props.messages).toBeTruthy();
    });

});
