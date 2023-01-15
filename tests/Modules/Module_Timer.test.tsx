import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Timer from "../../components/Modules/Timer";
import {store} from "../../redux/store";
import {Provider} from "react-redux";

describe('Timer Module', ()=>{
    test('should render', async ()=>{
        render(
            <Provider store={store}>
                <Timer className='className text'/>
            </Provider>
        )
        const component = await screen.findByTestId('timerModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
    test('should work', async ()=>{
        render(
            <Provider store={store}>
                <Timer className='className text'/>
            </Provider>
        )
        const component = await screen.findByTestId('timerModule')
        const path = component.children[0].children[0] as HTMLElement
        const oldOffset = +path.style.strokeDashoffset.replace('px', '')
        await new Promise((r) => setTimeout(r, 2000));
        const newOffset = +path.style.strokeDashoffset.replace('px', '')
        expect(oldOffset).toBeLessThan(newOffset)
    })
})