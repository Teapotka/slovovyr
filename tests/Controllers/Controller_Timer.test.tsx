import TimerController from "../../controllers/TimerController";
import Timer from "../../components/Modules/Timer";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {screen} from "@testing-library/dom";

describe('Timer Controller', () => {
    test('should add dispatch', () => {
        const spy = jest.spyOn(TimerController, 'addDispatch')
        const dispatch = jest.fn()
        TimerController.addDispatch(dispatch)

        expect(spy).toHaveBeenCalled()
    })
    test('should create timer',  () => {
        const spy = jest.spyOn(TimerController, 'create')
        render(
            <Provider store={store}>
                <Timer className='className text'/>
            </Provider>
        )

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(true)
    })
    test('should pause timer',  async () => {
        const spy = jest.spyOn(TimerController, 'pause')
        render(
            <Provider store={store}>
                <Timer className='className text'/>
            </Provider>
        )

        TimerController.pause()

        expect(spy).toHaveBeenCalled()

        const component = await screen.findByTestId('timerModule')
        const firstOffset = (component.children[0].children[0] as HTMLElement)
            .style.strokeDashoffset

        await new Promise((r)=>setTimeout(r, 2000))

        const secondOffset = (component.children[0].children[0] as HTMLElement)
            .style.strokeDashoffset

        expect(firstOffset).toBe(secondOffset)

    })
    test('should resume timer', async ()=>{
        const spy = jest.spyOn(TimerController, 'resume')
        render(
            <Provider store={store}>
                <Timer className='className text'/>
            </Provider>
        )

        TimerController.pause()

        const component = await screen.findByTestId('timerModule')
        const firstOffset = +(component.children[0].children[0] as HTMLElement)
            .style.strokeDashoffset.replace('px', '')

        TimerController.resume()

        await new Promise((r)=>setTimeout(r, 2000))

        const secondOffset = +(component.children[0].children[0] as HTMLElement)
            .style.strokeDashoffset.replace('px', '')

        expect(spy).toHaveBeenCalled()
        expect(firstOffset).toBeLessThan(secondOffset)
    })
})