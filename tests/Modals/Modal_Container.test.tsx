import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import ModalContainer from "../../components/Modal/ModalContainer";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {switchModal} from "../../redux/modalSlice";
import Timer from "../../components/Modules/Timer";
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

describe('Modal Container', ()=>{
    const renderTemplate = async (type?: TModals) => {
        type && store.dispatch(switchModal(type));
        (type == "win" || type == "lose") && writeRegionToLS('center');
        render(
            <Provider store={store}>
                {(type == "win" || type == "lose") && <Timer className='className text'/>}
                <ModalContainer/>
            </Provider>
        )
        const modalType = (type == "win" || type == "lose") ? 'result' : type
        const modal = await screen.findByTestId(`${modalType || 'container'}Modal`)
        expect(modal).toBeInTheDocument()
    }

    test('should render', async ()=>{
        await renderTemplate()
    })
    test('should render settings', async ()=>{
        await renderTemplate('settings')
    })
    test('should render info', async ()=>{
        await renderTemplate('info')
    })
    test('should render win', async ()=>{
        await renderTemplate('win')
    })
    test('should render lose', async ()=>{
        await renderTemplate('lose')
    })
})