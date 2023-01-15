import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Field from "../../components/Modules/Field";

describe('Field Module', ()=>{
    test('should render', async ()=>{
        render(<Field className='className text'/>)
        const component = await screen.findByTestId('fieldModule')
        expect(component).toBeInTheDocument()
        expect(component.children.length).toBe(30)
        expect(component.children[0].nodeName).toBe('DIV')
    })
})