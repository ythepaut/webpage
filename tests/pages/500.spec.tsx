import { getStaticProps } from "../../src/pages/500";
import { expect } from "@jest/globals";

describe("500 Error Page", () => {
    it("should fetch i18n messages", async () => {
        const response = (await getStaticProps({ locale: "en" })) as any;
        expect(response.props.messages).toBeTruthy();
    });
});
