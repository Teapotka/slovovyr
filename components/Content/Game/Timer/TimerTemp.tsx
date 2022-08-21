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
    const router = useRouter()
    const dispatch = useDispatch()
    const modal = useSelector((state: RootState) => state.modals.modal)
    const anim = useSelector((state: RootState) => state.animations)
    useEffect(() => {
        console.log('mount')
        dispatch(setFunctions({ play: 'none', pause: 'none' }))
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
            animation.finished.then(() => {
                console.log('try to end')
                if(new URL(document.URL).pathname == '/game')
                dispatch(toggle('lose'))
            })
            dispatch(setFunctions({ play: animation.play, pause: animation.pause }))
        }
        if (animation != null){
            console.log('modal here', anim, modal, animation)
            modal == 'none' ?
            animation.play() : animation.pause()
        }
    }, [animation, modal])
    return (
        <div className='temp-timer'>
            <TimerItem />
        </div>
    )
}

export default TimerTemp