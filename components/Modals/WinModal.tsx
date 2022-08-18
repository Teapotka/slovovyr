import axios from 'axios'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cross from '../../assets/Cross'
import { CHOISE_KEY, getData, readAllData, recordData } from '../../data/localMemory'
import { RootState } from '../../store'
import { toggle } from '../../store/modalSlice'

const WinModal:FC<{calculate: ()=>number}> = ({calculate}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [word, setword] = useState({word: '', meaning: ''})
    const controllers = useSelector((state: RootState) => state.animations)

    axios.post(`${process.env.SECRET_API_KEY}`,{ region: getData(CHOISE_KEY) })
    .then((d)=>setword({...word, word: d.data.word, meaning: d.data.meaning}))

    useEffect(() => {
        // document.getElementById('logo')!.click()
        // console.log(document.getElementById('timer')?.style.strokeDashoffset.slice(0, -2))
        recordData(calculate(), true)
    readAllData()
        controllers.pause()
    }, []);
    const close = () => {
        console.log('before click')
        dispatch(toggle('none'))
        router.push('/')
    }
    return (
        <div className='win-modal'>
            <div className='header-modal'>
                <div className='label-modal'>Вітаю !</div>
                <div className='cross-modal' onClick={close}><Cross /></div>
            </div>
            <div className='win-content-modal'>
                <div className='word-modal'>Шукане слово - {word.word}</div>
                <div className='def-modal'>Значення - {word.meaning}</div>
            </div>
        </div>
    )
}

export default WinModal