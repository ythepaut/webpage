import Layout from "../../../src/components/layout/Layout";
import { render, screen } from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import "../../mocks/router.mock";
import "../../mocks/intersection-observer.mock";

describe("Layout Layout Component", () => {
    it("should render", () => {
        render(
            <NextIntlProvider messages={{}} locale={"fr"}>
                <Layout>
                    <>TEST</>
                </Layout>
            </NextIntlProvider>
        );

        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
});
