import {SettingsModalController} from "../../controllers/SettingsModalController";
import {writeThemeToLS} from "../../data/LocalStorage";
import {render} from "@testing-library/react";
import SettingsModal from "../../components/Modal/SettingsModal";
import {screen} from "@testing-library/dom";

describe('SettingsModal Controller', ()=>{
    afterEach(()=>{
        jest.clearAllMocks();
        window.localStorage.clear()
    })
    test('should toggle switches', async()=>{
        render(
            <SettingsModal/>
        )
        const component = await screen.findByTestId('settingsModal')
        const darkSwitch = component.children[0].children[1] as HTMLElement
        const colorblindSwitch = component.children[1].children[1] as HTMLElement
        const spy = jest.spyOn(SettingsModalController, 'toggle')

        darkSwitch.click()
        colorblindSwitch.click()

        expect(darkSwitch.classList).not.toContain('is-inactiveSVG')
        expect(colorblindSwitch.classList).not.toContain('is-inactiveSVG')
        expect(document.body.classList).toContain('dark')
        expect(document.body.classList).toContain('colorBlind')
        expect(spy).toHaveBeenCalledTimes(2)
    })
    test('should load switches data', async()=>{
        writeThemeToLS({dark: true, colorBlind: true})
        render(
            <SettingsModal/>
        )
        const component = await screen.findByTestId('settingsModal')
        const darkSwitch = component.children[0].children[1]
        const colorblindSwitch = component.children[1].children[1]
        const spy = jest.spyOn(SettingsModalController, 'loadSwitchersData')

        SettingsModalController.loadSwitchersData()

        expect(darkSwitch.classList).not.toContain('is-inactiveSVG')
        expect(colorblindSwitch.classList).not.toContain('is-inactiveSVG')
        expect(spy).toHaveBeenCalled()
    })

})