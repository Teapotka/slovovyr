import {NextApiRequest, NextApiResponse} from "next/types";
import NextCors from 'nextjs-cors'
import axios from "axios";
import * as cheerio from 'cheerio'

const initCORSMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD'],
        origin: "*",
    })
}
const parseURLMiddleware = async (req: TRequestParse, res: NextApiResponse) => {
    try {
        const {words} = req.query
        const [word, index] = Array(words!).flat()
        const url = encodeURI(`https://slovnyk.ua/index.php?swrd=${word}`)
        const response = await axios.get(url)
        req.responseData = response
        req.requestIndex = index
    } catch (e) {
        return res.status(500).json({status: 500, message: 'Parsing URL: Server error'})
    }
}
const parseHTMLMiddleware = async ({responseData, requestIndex }: TRequestParse, res: NextApiResponse) => {
    try {
        const $ = cheerio.load(responseData.data, {decodeEntities: true})
        const html = $('div.toggle-sum p')
        const length = html.length
        if (length == 0)
            return res.status(404).json({error: 'Not found'})

        if(requestIndex && isNaN(+requestIndex))
            return res.status(400).json({error: 'Bad index'})

        if(requestIndex && +requestIndex < 0)
            return res.status(400).json({error: 'Bad index'})

        if (requestIndex && +requestIndex >= length)
            return res.status(400).json({error: 'Out of range'})

        return res.status(200).json({
            count: length,
            index: Number(requestIndex) || 0,
            info: html.eq( Number(requestIndex) || 0).text(),
        })
    } catch (e) {
        return res.status(500).json({status: 500, message: 'Parsing HTML: Server error'})
    }
}

export default async function handler(req: TRequestParse, res: NextApiResponse ){
    await initCORSMiddleware(req, res)
    await parseURLMiddleware(req, res)
    await parseHTMLMiddleware(req, res)
}