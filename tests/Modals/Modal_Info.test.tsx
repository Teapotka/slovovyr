import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import InfoModal from "../../components/Modal/InfoModal";

describe('Info Modal', ()=>{
    test('should render', async ()=>{
        render(<InfoModal/>)
        const component = await screen.findByTestId('infoModal')
        expect(component).toBeInTheDocument()
    })
})