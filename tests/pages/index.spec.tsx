import HomePage from "../../src/pages/index";
import {getStaticProps} from "../../src/pages";
import {expect} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {NextIntlProvider} from "next-intl";
import "../mocks/router.mock";
import "../mocks/intersection-observer.mock";

describe("Home Page", () => {
    it("should render", () => {
        jest.mock("../../src/components/sections/Hero", () => ({
            Hero: () => <>HERO</>
        }));
        jest.mock("../../src/components/sections/Projects", () => ({
            Projects: () => <>PROJECTS</>
        }));
        jest.mock("../../src/components/sections/Contact", () => ({
            Contact: () => <>CONTACT</>
        }));

        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <HomePage />
            </NextIntlProvider>
        );

        expect(screen.getByText("HERO")).toBeInTheDocument();
        expect(screen.getByText("PROJECTS")).toBeInTheDocument();
        expect(screen.getByText("CONTACT")).toBeInTheDocument();
    });

    it("should fetch i18n messages", async () => {
        const response = await getStaticProps({locale: "en"}) as any;
        expect(response.props.messages).toBeTruthy();
    });
});
