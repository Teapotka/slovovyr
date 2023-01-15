import {MapController} from "../../controllers/MapController";
import {writeResultToLS} from "../../data/LocalStorage";

describe('Map Controller', ()=>{
    afterEach(()=>{
        window.localStorage.clear()
    })
    const mockData = (region: Exclude<TRegion, 'none'>, result: 'win' | 'lose') =>{
        const item:TResult = {
            date: new Date(),
            region,
            time: 120,
            result
        }
        writeResultToLS(item)
    }
    test('should return all results empty', ()=>{
        const flag = MapController.flag
        const result:TFlag = {
            center: 'none',
            east: 'none',
            west: 'none'
        }
        expect(flag).toEqual(result)
    })
    test('should return one result not empty and others empty', ()=>{
        mockData('center', 'lose')
        const flag = MapController.flag
        const result:TFlag = {
            center: 'lose',
            east: 'none',
            west: 'none'
        }
        expect(flag).toEqual(result)
    })
    test('should return all results not empty', ()=>{
        mockData('center', 'lose')
        mockData('east', 'win')
        mockData('west', 'lose')
        const flag = MapController.flag
        const result:TFlag = {
            center: 'lose',
            east: 'win',
            west: 'lose'
        }
        expect(flag).toEqual(result)
    })
})