import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Vyr from "../../components/Modules/Vyr";

describe('Vyr Module', ()=>{
    test('should render', async ()=>{
        render(<Vyr className='className text'/>)
        const component = await screen.findByTestId('vyrModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})