import axios from 'axios'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cross from '../../assets/Cross'
import { CHOISE_KEY, getData, readAllData, recordData } from '../../data/localMemory'
import { getWord } from '../../data/words'
import { RootState } from '../../store'
import { toggle } from '../../store/modalSlice'
import style from './Modals.module.css'

const WinModal:FC<{calculate: ()=>number}> = ({calculate}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [word, setword] = useState({word: '', meaning: ''})
    const controllers = useSelector((state: RootState) => state.animations)
    const { template, result, header,
        label, cross, content, center, win} = style


    // axios.post(`${process.env.SECRET_API_KEY}`,{ region: getData(CHOISE_KEY) })
    // .then((d)=>setword({...word, word: d.data.word, meaning: d.data.meaning}))

    useEffect(() => {
        // document.getElementById('logo')!.click()
        // console.log(document.getElementById('timer')?.style.strokeDashoffset.slice(0, -2))
        controllers.remove('#timer')
        recordData(calculate(), true)
        // readAllData()
        setTimeout(()=>{
            document.querySelector('.modal')?.classList.add('anim-appear')
          })
    }, []);
    const close = () => {
        document.querySelector('.modal')?.classList.remove('anim-appear')
        document.querySelector('.modal')?.classList.add('anim-hide')
        setTimeout(()=>{
        console.log('before click')
        dispatch(toggle('none'))
        router.push('/')
        },800)
    }
    return (
         <div className={classNames('border', template, result, win)}>
         <div className={header}>
             <div className={label}>Вітаю !</div>
             <div className={cross} onClick={close}><Cross /></div>
         </div>
         <div className={classNames(content,center)}>
         <div>Шукане слово - {getWord(getData(CHOISE_KEY)).word}</div>
            <div>Значення - {getWord(getData(CHOISE_KEY)).meaning}</div>
         </div>
     </div>
    )
}

export default WinModal