import handler from "../../../src/pages/api/contact";
import {createMocks} from "node-mocks-http";

describe("Contact details", () => {
    const unmockedFetch = global.fetch;

    beforeAll(() => {
        global.fetch = () =>
            (Promise.resolve({
                json: () => Promise.resolve([])
            }) as any);
    });

    afterAll(() => {
        global.fetch = unmockedFetch;
    });

    it("should verify CAPTCHA and return contact details", async () => {

        const requestSpy = jest.spyOn(global, "fetch");

        const { req, res } = createMocks({
            method: "GET",
            query: {
                token: "abc"
            }
        });
        await handler(req, res);

        expect(requestSpy).toHaveBeenCalled();
    });
});
