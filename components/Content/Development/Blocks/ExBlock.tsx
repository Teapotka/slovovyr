import classNames from 'classnames'
import React, { FC } from 'react'
import Link from '../../../../assets/Link'
import style from './Blocks.module.css'

const ExBlock = () => {
    const {block, json, box} = style
    const data = [
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
        `${process.env.API_KEY}легінь`,
        `${process.env.API_KEY}блаблабла`,
        `${process.env.API_KEY}огірок/1`,
        `${process.env.API_KEY}огірок/100`,
    ]
    console.log(data, links)
    return (
        <div className='l-gap-grid'>
            <div className='header-label'>Приклади</div>
            <div className={classNames('border', block)}>
                <a href={links[0]}>{links[0]}</a>
                <div className={json} style={{ whiteSpace: 'pre-line' }}>
                    <pre>{JSON.stringify(data[0], null, 4)}</pre>
                </div>
                <div>
                    existing - існування слова<br />
                    count - кількість визначень<br />
                    index - індекс визначення<br />
                    info - визначення
                </div>
            </div>
            <div className={classNames('border', block)}>
                <a href={links[1]}>{links[1]}</a>
                <div className={json} style={{ whiteSpace: 'pre-line' }}>
                    <pre>{JSON.stringify(data[1], null, 4)}</pre>
                </div>
            </div>
            <div className={box}>
                <div>https://slovovyr.vercel.com/api/ваше_слово/індекс</div>
                <div onClick={() => navigator.clipboard.writeText('https://slovovyr.vercel.com/api/ваше_слово/індекс')}><Link /></div>
            </div>
            <div className={classNames('border', block)}>
                <a href={links[2]}>{links[2]}</a>
                <div className={json} style={{ whiteSpace: 'pre-line' }}>
                    <pre>{JSON.stringify(data[2], null, 4)}</pre>
                </div>
            </div>
            <div className={classNames('border', block)}>
                <a href={links[3]}>{links[3]}</a>
                <div className={json} style={{ whiteSpace: 'pre-line' }}>
                    <pre>{JSON.stringify(data[3], null, 4)}</pre>
                </div>
            </div>
        </div>
    )
}

export default ExBlock