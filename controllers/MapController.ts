import {readTodayResultFromLS} from "../data/LocalStorage";

export class MapController{
    /**
     * Get flags object with regions and results
     * @return flag object
     * */
    static get flag():TFlag{
        const resultArray = readTodayResultFromLS()
        const condition = this.condition(resultArray)
        return {
            east: condition('east'),
            west: condition('west'),
            center: condition('center')
        }
    }
    /**
     * Finds result by region from LS data
     * @param result - today results data from LS
     * @return string result
     * */
    private static condition(result: TResult[]){
        return (region: Exclude<TRegion, 'none'>) => {
            return result.find(i => i.region == region) ?
                result.find(i => i.region == region)!.result
                :
                'none'
        }
    }
}