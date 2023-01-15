import {ResultModalController} from "../../controllers/ResultModalController";
import {writeRegionToLS} from "../../data/LocalStorage";
import Timer from "../../components/Modules/Timer";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

describe('ResultModal Controller', ()=>{
    test('should return word', ()=>{
        writeRegionToLS('center')
        const word = ResultModalController.word

        expect(word).not.toBeNull()
    })
    test('should calculate time', async ()=>{
        render(
            <Provider store={store}>
                <Timer className='className text'/>
            </Provider>
        )
        const time = ResultModalController.calcTime

        expect(time).not.toBeNull()
        expect(typeof time).toBe('number')

        await new Promise((r)=>setTimeout(r, 2000))
        const newTime = ResultModalController.calcTime

        expect(newTime).toBeGreaterThan(time)
    })
    test('should write result', ()=>{
        writeRegionToLS('center')
        render(
            <Provider store={store}>
                <Timer className='className text'/>
            </Provider>
        )
        ResultModalController.writeResult('win')
    })
})