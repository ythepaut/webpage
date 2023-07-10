import { getStaticProps } from "../../src/pages/privacy-policy";
import { expect } from "@jest/globals";

describe("Privacy policy Page", () => {
    it("should fetch i18n messages", async () => {
        const response = (await getStaticProps({ locale: "en" })) as any;
        expect(response.props.messages).toBeTruthy();
    });
});
