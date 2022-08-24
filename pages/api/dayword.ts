import { NextApiRequest, NextApiResponse } from "next/types";
import words, { time } from "../../data/words";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST'){
        let dw = words
        .filter(w => w.region == req.body.region)
        [0].words[time]
        res.json(dw)
    }
}