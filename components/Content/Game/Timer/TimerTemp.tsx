import anime from 'animejs'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TimerItem from '../../../../assets/TimerItem'
import { RootState } from '../../../../store'
import { setFunctions } from '../../../../store/animationSlice'
import { toggle } from '../../../../store/modalSlice'
import { TimerAnimation } from './TimerAnim'


const TimerTemp = () => {
    const [animation, setanimation] = useState<any>(null)
    const dispatch = useDispatch()
    const modal = useSelector((state: RootState) => state.modals.modal)
    const anim = useSelector((state: RootState) => state.animations)
    const [end, setend] = useState(false)
    useEffect(() => {
        console.log('mount')
        console.log('end',end)
        dispatch(setFunctions({ play: 'none', pause: 'none', remove: 'none' }))
        console.log('step 1')
        setanimation(TimerAnimation())
        console.log('step 2')
        return () => {
            console.log('kill')
        }
    }, [])
    useEffect(() => {
        if (animation != null && anim.pause == 'none') {
            console.log('START', modal, anim , animation)
            animation.add({
                targets: '#timer',
                strokeDashoffset: [0, anime.setDashoffset],
            })
            animation.finished.then(()=>{
                dispatch(toggle('lose'))
            })
            dispatch(setFunctions({ play: animation.play, pause: animation.pause, remove: animation.remove }))
        }
        if (animation != null){
            if(modal == 'win' || modal == 'lose')
            {
                console.log('remove')
                animation.remove('#timer')
                setend(true)
            }
            else{
                if(!end){
                    console.log('controll')
                    modal == 'none' ?
                    animation.play() : animation.pause()
                }
            }
        }
    }, [animation, modal])
    return (
        <div className='temp-timer'>
            <TimerItem />
        </div>
    )
}

export default TimerTemp