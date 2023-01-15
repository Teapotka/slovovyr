import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import No from "../../components/Modules/No";

describe('No Module', ()=>{
    test('should render', async ()=>{
        render(<No className='className text'/>)
        const component = await screen.findByTestId('noModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})