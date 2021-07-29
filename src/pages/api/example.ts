import {NextApiRequest, NextApiResponse} from "next";

function Example(req: NextApiRequest, res: NextApiResponse): void {
    res.status(200).json({status: "success"});
}

export default Example;
