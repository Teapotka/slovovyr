import { NextApiRequest, NextApiResponse } from "next/types";
import axios from 'axios'
import * as cheerio from 'cheerio'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const input = req.query.word!
    const finder = input[0]
    const index = input.length == 2 ? input[1] : 0
    const url = encodeURI(`https://slovnyk.ua/index.php?swrd=${finder}`)
    let length = 0
  
    console.log(url)
    axios.get(url)
      .then((d) => cheerio.load(d.data, { decodeEntities: true }))
      .then(($) => {
        const html = $('div.toggle-sum p')
        length = html.length

        if (length == 0)
          return { exsisting: false }

        if (index >= length)
          return 'out of range'


        return {
          exsisting: true,
          count: length,
          word: {
            index: index,
            info: html.eq(+index).text()
          }
        }
      })
      .then((d) => res.json(d))
      .catch(()=> res.send(`something went wrong`))
}