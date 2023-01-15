import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Cross from "../../components/Modules/Cross";

describe('Cross Module', ()=>{
    test('should render', async ()=>{
        render(<Cross className='className text' onClick={()=>{}}/>)
        const component = await screen.findByTestId('crossModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})