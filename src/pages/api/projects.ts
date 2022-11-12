import {NextApiRequest, NextApiResponse} from "next";
import {gql, GraphQLClient} from "graphql-request";
import {Project} from "../../components/sections/Projects";
import getConfig from "next/config";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any[]>
) {
    if (req.method === "GET") {
        getProjects().then(projects => {
            return res.status(200).json(projects);
        });
    } else {
        return res.status(405);
    }
}

async function getProjects(): Promise<Project[]> {
    const {publicRuntimeConfig} = getConfig();
    const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
        headers: {
            authorization: "bearer " + publicRuntimeConfig.githubToken,
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
