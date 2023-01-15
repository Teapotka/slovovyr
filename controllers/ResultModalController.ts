import {readDataFromLS, SLOVOVYR_REGION_KEY, writeResultToLS} from "../data/LocalStorage";
import {getWord} from "../data/words";

export class ResultModalController{
    /**
     * Write game result to the LocalStorage
     * @param type - type of modal
     * */
    static writeResult(type:TModals){
        const date = new Date()
        const region = readDataFromLS(SLOVOVYR_REGION_KEY)
        const time = this.calcTime
        const result = type == 'win' ? 'win' : 'lose'
        const item:TResult = {date, region, time, result}
        writeResultToLS(item)
    }
    /**
     * Calculate the remaining time
     * @return time in seconds
     * */
    static get calcTime(){
        const timer = document.getElementById('timer')!
        const dashOffsetValue = +timer.style.strokeDashoffset.replace('px', '')
        const coefficient = dashOffsetValue / 248.186
        const seconds = Math.round(coefficient * 300)
        return seconds
    }
    /**
     * Get the current game word
     * @return object with word and meaning
     * */
    static get word(){
        const region = readDataFromLS(SLOVOVYR_REGION_KEY)
        return getWord(region)
    }
}