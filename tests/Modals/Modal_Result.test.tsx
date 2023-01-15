import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import ResultModal from "../../components/Modal/ResultModal";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import Timer from "../../components/Modules/Timer";
import {writeRegionToLS} from "../../data/LocalStorage";

describe('Result Modal', ()=>{
    test('should render', async ()=>{
        writeRegionToLS('center')
        render(
            <Provider store={store}>
                <Timer className='className text'/>
                <ResultModal/>
            </Provider>
        )
        const component = await screen.findByTestId('resultModal')
        expect(component).toBeInTheDocument()
    })
})