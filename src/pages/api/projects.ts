import {NextApiRequest, NextApiResponse} from "next";
import {gql, GraphQLClient} from "graphql-request";
import {Project} from "../../components/sections/Projects";
import getConfig from "next/config";

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {

    const {serverRuntimeConfig} = getConfig();

    return new Promise((resolve, reject) => {
        if (req.method === "GET") {
            if (serverRuntimeConfig.environment === "production") {
                getProjects().then(projects => {
                    res.status(200).json(projects);
                    res.end();
                    resolve({});
                });
            } else {
                res.status(200).json([]);
                res.end();
                resolve({});
            }
        } else {
            res.status(405).end();
            reject();
        }
    });
}

async function getProjects(): Promise<Project[]> {
    const {serverRuntimeConfig} = getConfig();
    const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
        headers: {
            authorization: "bearer " + serverRuntimeConfig.githubToken,
        },
    });
    const query = gql`
        {
            user(login: "ythepaut") {
                pinnedItems(first: 4, types: REPOSITORY) {
                    nodes {
                        ... on Repository {
                            name
                            description
                            url
                            primaryLanguage {
                                name
                            }
                        }
                    }
                }
            }
        }
    `;
    return (await graphQLClient.request(query)).user.pinnedItems.nodes.map((node: any) => {
        return {
            name: node.name,
            description: node.description,
            url: node.url,
            language: node.primaryLanguage.name
        };
    });
}
