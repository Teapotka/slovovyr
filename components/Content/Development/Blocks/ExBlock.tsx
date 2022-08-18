import React, { FC } from 'react'
import Link from '../../../../assets/Link'

const ExBlock:FC<{data: any[], links: string[]}> = ({data, links}) => {
    console.log(data, links)
    return (
        <div className='block-ex'>
        <div className='block-header'>Приклади</div>
        <>
        {
            data.map((d,i) =>
            (
            <div className='block-content' key={i}>
            {
                i == 2 && <div className='block-box'>
                    <div className='block-link'>https://slovovyr.vercel.com/api/ваше_слово/індекс</div>
                    <div className='block-icon' onClick={()=>navigator.clipboard.writeText('https://slovovyr.vercel.com/api/ваше_слово/індекс')}><Link/></div>
                    </div>   
                }
                        <a className='block-link' href={links[i]}>{links[i]}</a>
                        <div className='block-json' style={{whiteSpace: 'pre-line'}}><pre>{JSON.stringify(d, null, 4)}</pre></div>
                         { i == 1 && <>
                         <div className='block-def'>
                            existing - існування слова<br/>
                            count - кількість визначень<br/>
                            index - індекс визначення<br/>
                            info - визначення
                            </div>
                         </>
                        }
            </div>
            ))
        }
         </>
    </div>
  )
}

export default ExBlock