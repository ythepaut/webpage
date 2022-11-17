import handler from "../../../src/pages/api/projects";
import {createMocks} from "node-mocks-http";
import {GraphQLClient} from "graphql-request";

describe("Project list", () => {
    it("should fetch pinned projects from GitHub profile", async () => {

        const requestSpy = jest.spyOn(GraphQLClient.prototype, "request")
            .mockReturnValue(Promise.resolve({
                user: {
                    pinnedItems: {
                        nodes: []
                    }
                }
            }));

        const { req, res } = createMocks({method: "GET"});
        await handler(req, res);

        expect(requestSpy).toHaveBeenCalled();
    });
});
