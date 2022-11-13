import {NextApiRequest, NextApiResponse} from "next";
import getConfig from "next/config";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return new Promise((resolve) => {

        const {serverRuntimeConfig} = getConfig();

        if (req.method === "GET") {
            if (typeof req.query.token === "string") {
                verifyCaptcha(serverRuntimeConfig.recaptchaPrivate, req.query.token).then(success => {
                    if (success) {
                        res.status(200).json({
                            email: serverRuntimeConfig.contactEmail
                        });
                        res.end();
                        resolve({});
                    } else {
                        res.status(401).end();
                        resolve({});
                    }
                });
            } else {
                res.status(400).end();
                resolve({});
            }
        } else {
            res.status(405).end();
            resolve({});
        }
    });
}

function verifyCaptcha(secret: string, token: string): Promise<boolean> {
    return new Promise(async resolve => {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
            {method: "POST"}
        );
        resolve((await response.json()).success);
    });
}
