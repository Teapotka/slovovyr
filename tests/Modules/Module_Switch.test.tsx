import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Switch from "../../components/Modules/Switch";

describe('Switch Module', ()=>{
    test('should render', async ()=>{
        render(<Switch className='className text' onClick={()=>{}} id='id'/>)
        const component = await screen.findByTestId('switchModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})