import { NextApiRequest, NextApiResponse } from "next/types";
import NextCors from 'nextjs-cors';
import axios from 'axios'
import * as cheerio from 'cheerio'

// const cors = Cors({
//   methods: ['POST', 'GET', 'HEAD'],
//   origin: '*'
// })

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: Function
// ) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }
//       console.log('cors')

//       return resolve(result)
//     })
//   })
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',    
  });
  // await runMiddleware(req, res, cors)
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
        return { existing: false }

      if (index >= length)
        return 'out of range'

      return {
        existing: true,
        count: length,
        word: {
          index: index,
          info: html.eq(+index).text()
        }
      }
    })
    .then((d) => { res.status(200).json(d) })
    .catch(() => res.send(`something went wrong`))
}
