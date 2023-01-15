import TimerSVG from '../../assets/TimerSVG'
import {FC, useEffect} from "react";
import TimerController from "../../controllers/TimerController";
import {useDispatch} from "react-redux";

const Timer: FC<{ className: string }> = ({className}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        TimerController.addDispatch(dispatch)
        TimerController.create(true)
    },[])
    return (
        <div className={className} data-testid='timerModule'>
            <TimerSVG/>
        </div>
    )
}

export default Timer