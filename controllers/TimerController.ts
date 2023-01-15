import {switchModal} from "../redux/modalSlice";
import {Dispatch} from "redux";

export default class TimerController {
    /**
     * Current value of stroke-dashoffset
     * */
    private static current = 0
    /**
     * Timer flag value
     * */
    private static flag = false
    /**
     * Redux dispatch
     * */
    private static dispatch: Dispatch | undefined
    /**
     * Creates the timer
     * @param reset - reset flag
     * */
    static create(reset = false){
        const timer = document.getElementById('timer')!
        if(reset) {
            this.flag = false
            this.current = 0
        }
        this.tik(timer)
    }
    /**
     * Timer
     * @param timer - timer HTMl element
     * */
    private static tik(timer: HTMLElement){
        let i = 0
        const time = 248.186 / (5 * 60 * 2)
        if(this.current != 0)
            i = this.current
        timer.style.strokeDasharray = '248.186px'
        const interval = setInterval(()=>{
            if(this.flag){
                clearInterval(interval)
                return null
            }
            if(i < 246) {
                timer.style.strokeDashoffset = `${i}px`
                i += time
                this.current = i
            }
            else{
                timer.style.strokeDashoffset = '248.186px'
                clearInterval(interval)
                this.dispatch && this.dispatch(switchModal('lose'))
                return null
            }
        },500)
    }
    /**
     * Pauses the timer
     * */
    static pause(){
        this.flag = true
    }
    /**
     * Resumes the timer
     * */
    static resume(){
        this.flag = false
        this.create()
    }
    /**
     * Add redux dispatch
     * @param dispatch - redux dispatch
     * */
    static addDispatch(dispatch: Dispatch){
        this.dispatch = dispatch
    }
}
