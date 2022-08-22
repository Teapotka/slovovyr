import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cross from '../../assets/Cross';
import { CHOISE_KEY, getData, recordData } from '../../data/localMemory';
import { RootState } from '../../store';
import { toggle } from '../../store/modalSlice';

const LoseModal:FC<{calculate: ()=>number}> = ({calculate}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [word, setword] = useState({word: '', meaning: ''})
    const controllers = useSelector((state: RootState) => state.animations)

    axios.post(`${process.env.SECRET_API_KEY}`,{ region: getData(CHOISE_KEY) })
    .then((d)=>setword({...word, word: d.data.word, meaning: d.data.meaning}))

    useEffect(() => {
        // document.getElementById('timer')!.remove()
        controllers.remove('#timer')
        // console.log(document.getElementById('timer')?.getAttribute('stroke-dasharray'))
        recordData(calculate(), false)
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
        <div className='lose-modal'>
            <div className='header-modal'>
                <div className='label-modal'>Дідько !</div>
                <div className='cross-modal' onClick={close}><Cross /></div>
            </div>
            <div className='win-content-modal'>
                <div className='word-modal'>Шукане слово - {word.word}</div>
                <div className='def-modal'>Значення - {word.meaning}</div>
            </div>
        </div>
    )
}

export default LoseModal