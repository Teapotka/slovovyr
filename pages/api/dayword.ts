import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST'){
        // console.log(JSON.parse(req.body))
        //return data
        res.json({word: 'замок'})
    }
}