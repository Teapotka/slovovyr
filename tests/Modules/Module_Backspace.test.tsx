import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Backspace from "../../components/Modules/Backspace";

describe('Backspace Module', ()=>{
    test('should render', async ()=>{
        render(<Backspace className='className text'/>)
        const component = await screen.findByTestId('backspaceModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})