import { getStaticProps } from "../../src/pages/legal";
import { expect } from "@jest/globals";

describe("Legal Page", () => {
    it("should fetch i18n messages", async () => {
        const response = (await getStaticProps({ locale: "en" })) as any;
        expect(response.props.messages).toBeTruthy();
    });
});
