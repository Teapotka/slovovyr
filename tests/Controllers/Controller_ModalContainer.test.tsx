import {ModalContainerController} from "../../controllers/ModalContainerController";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import Timer from "../../components/Modules/Timer";
import ModalContainer from "../../components/Modal/ModalContainer";
import {screen} from "@testing-library/dom";
import {writeRegionToLS} from "../../data/LocalStorage";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: "",
            asPath: "",
            push: ()=>{}
        };
    },
}));
describe('ModalContainer Controller', ()=>{
    afterEach(()=>{
        jest.clearAllMocks();
    })
    const renderTemplate = (type: TModals) =>{
        (type == "win" || type == "lose") && writeRegionToLS('center');
        render(
            <Provider store={store}>
                {(type == "win" || type == "lose") && <Timer className='className text'/>}
                <ModalContainer/>
            </Provider>
        )
    }
    test('should not work', ()=>{
        ModalContainerController.type = 'none'
        const type = 'none'
        const showSpy = jest.spyOn(ModalContainerController, 'show')
        const hideSpy = jest.spyOn(ModalContainerController, 'hide')

        renderTemplate(ModalContainerController.type)
        ModalContainerController.animate(type)

        expect(showSpy).not.toHaveBeenCalled()
        expect(hideSpy).not.toHaveBeenCalled()
    })
    test('should show', async ()=>{
        ModalContainerController.type = 'none'
        const type:TModals = 'settings'
        const showSpy = jest.spyOn(ModalContainerController, 'show')

        renderTemplate(ModalContainerController.type)
        const modal = await screen.findByTestId('containerModal')
        ModalContainerController.animate(type)
        await new Promise((r) => setTimeout(r, 2000));

        expect(showSpy).toHaveBeenCalled()
        expect(ModalContainerController.type).toBe(type)
        expect(modal.classList).toContain('is-appearedModal')
    })
    test('should hide', async ()=>{
        ModalContainerController.type = 'settings'
        const type:TModals = 'none'
        const hideSpy = jest.spyOn(ModalContainerController, 'hide')

        renderTemplate(ModalContainerController.type)
        const modal = await screen.findByTestId('containerModal')
        ModalContainerController.animate(type)
        await new Promise((r) => setTimeout(r, 2000));

        expect(hideSpy).toHaveBeenCalled()
        expect(ModalContainerController.type).toBe(type)
        expect(modal.classList).toContain('is-hiddenModal')
    })
    test('should not animate', ()=>{
        ModalContainerController.type = 'win'
        const type:TModals = 'none'
        const hideSpy = jest.spyOn(ModalContainerController, 'hide')
        const showSpy = jest.spyOn(ModalContainerController, 'show')

        renderTemplate(ModalContainerController.type)
        ModalContainerController.animate(type)

        expect(hideSpy).not.toHaveBeenCalled()
        expect(showSpy).not.toHaveBeenCalled()
        expect(ModalContainerController.type).toBe(type)
    })
})