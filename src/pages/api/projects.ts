import {NextApiRequest, NextApiResponse} from "next";
import {gql, GraphQLClient} from "graphql-request";
import {Project} from "../../components/sections/Projects";
import getConfig from "next/config";

const projectMocks: Project[] = [1, 2, 3, 4].map(i => ({
    name: `Projet ${i}`,
    description: `Description ${i}`,
    language: "Langage",
    url: "#"
}));

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {

    const {serverRuntimeConfig} = getConfig();

    return new Promise(resolve => {
        if (req.method === "GET") {
            if (serverRuntimeConfig.environment === "production") {
                getProjects().then(projects => {
                    res.status(200).json(projects);
                    res.end();
                    resolve({});
                });
            } else {
                res.status(200).json(projectMocks);
                res.end();
                resolve({});
            }
        } else {
            res.status(405).end();
            resolve({});
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
