import {fireEvent, screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import ModalHeader from "../../components/Modal/ModalHeader";

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
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe('Header Modal', ()=>{
    const renderTemplate = async (type: TModals, toBe: string) =>{
        render(
            <Provider store={store}>
                <ModalHeader type={type}/>
            </Provider>
        )
        const component = await screen.findByTestId('headerModal')
        expect(component).toBeInTheDocument()
        expect(component.children[1].innerHTML).toBe(toBe)
    }
    test('should render with type none', async ()=>{
        await renderTemplate('none', '')
    })
    test('should render with type settings', async ()=>{
        await renderTemplate('settings', 'Налаштування')
    })
    test('should render with type info', async ()=>{
        await renderTemplate('info', 'Як грати ?')
    })
    test('should render with type win', async ()=>{
        await renderTemplate('win', 'Вітаю !')
    })
    test('should render with type lose', async ()=>{
        await renderTemplate('lose', 'Дідько !')
    })
    test('should navigate with type lose', async ()=>{
        await renderTemplate('lose', 'Дідько !')
        const cross = await screen.findByTestId('crossModule')
        fireEvent.click(cross)
        expect(useRouter).toHaveBeenCalled()
    })
})