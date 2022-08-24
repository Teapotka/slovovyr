import React from 'react'
import Link from '../../../../assets/Link'

const ApiBlock = () => {
  return (
    <div className='l-gap-grid'>
        <div className='header-label'>Апі</div>
        <div>Це апі використовує сайт <b><a href='https://slovnyk.ua/'>slovnyk.ua</a></b> як джерело інформації. За допомогою бібліотеки <b><a href='https://axios-http.com/'>Axios</a></b> виконується крос-домений запит, результат якого парситься завдяки <b><a href='https://cheerio.js.org/'>Cheerio</a></b></div>
        <div>https://slovovyr.vercel.com/api/ваше_слово</div>
        <div onClick={()=>navigator.clipboard.writeText('https://slovovyr.vercel.com/api/ваше_слово')}><Link/></div>
    </div>
  )
}

export default ApiBlock