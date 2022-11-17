import {getStaticProps} from "../../src/pages";

describe("Home Page", () => {
    it("should fetch i18n messages", async () => {
        const response = await getStaticProps({locale: "en"}) as any;
        expect(response.props.messages).toBeTruthy();
    });
});
