import React, { FC } from 'react'
import Link from '../../../../assets/Link'

const ExBlock = () => {
    const data =[
        {
            "existing": true,
            "count": 1,
            "word": {
                "index": 0,
                "info": "ЛЕГІНЬ, геня, ч., діал. Юнак, парубок. Іван був уже легінь, стрункий і міцний, як смерічка (Коцюб., II, 1955, 313); Шляхом урочисто, в ритм пісні, проходять дівчата і легіні (Стельмах, Над Черемошем.., 1952, 120)."
            }
        },
        {
            "existing": false
        },
        {
            "existing": true,
            "count": 2,
            "word": {
                "index": "1",
                "info": "2. Довгастий зелений плід цієї рослини. Він обговорював з нею докладно, що нову діжку треба вимочить добре, щоб огірки не пахли (Коцюб., II, 1955, 285); Стіл увесь був заставлений тарілками і блюдами з їжею.. Далі зеленіли пругкі ніжинські огірки, щойно вийняті з розсолу (Мик., II, 1957, 290); * У порівн. Не в шутку молодець був жвавий, Товстий, високий, кучерявий, Обточений, як огірок (Котл., І, 1952, 166)."
            }
        },
        "out of range"
    ]
    const links = [
        "http://localhost:3000/api/легінь",
        "http://localhost:3000/api/блаблабла",
        "http://localhost:3000/api/огірок/1",
        "http://localhost:3000/api/огірок/100"
    ]
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