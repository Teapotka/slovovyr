import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Enter from "../../components/Modules/Enter";

describe('Enter Module', ()=>{
    test('should render', async ()=>{
        render(<Enter className='className text'/>)
        const component = await screen.findByTestId('enterModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})