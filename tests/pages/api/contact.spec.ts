import handler from "../../../src/pages/api/contact";
import {createMocks} from "node-mocks-http";
import {expect} from "@jest/globals";

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

    it("should reject requests with missing token", async () => {
        const {req, res} = createMocks({method: "GET"});
        await handler(req, res);

        expect(res._getStatusCode()).toEqual(400);
    });

    it("should reject non GET requests", async () => {
        const {req, res} = createMocks({method: "POST"});
        await handler(req, res);

        expect(res._getStatusCode()).toEqual(405);
    });
});
