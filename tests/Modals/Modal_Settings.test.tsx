import {fireEvent, screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import SettingsModal from "../../components/Modal/SettingsModal";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

describe('Settings Modal', ()=>{
    test('should render', async ()=>{
        render(<SettingsModal/>)
        const component = await screen.findByTestId('settingsModal')
        expect(component).toBeInTheDocument()
    })
    test('should toggle switches', async ()=>{
        render(
            <Provider store={store}>
                <SettingsModal/>
            </Provider>
        )
        const component = await screen.findByTestId('settingsModal')
        
        const darkSwitch = component.children[0].children[1]
        expect(darkSwitch.classList).toContain('is-inactiveSVG')
        fireEvent.click(darkSwitch)
        expect(darkSwitch.classList).not.toContain('is-inactiveSVG')

        const colorblindSwitch = component.children[1].children[1]
        expect(colorblindSwitch.classList).toContain('is-inactiveSVG')
        fireEvent.click(colorblindSwitch)
        expect(colorblindSwitch.classList).not.toContain('is-inactiveSVG')
    })
})