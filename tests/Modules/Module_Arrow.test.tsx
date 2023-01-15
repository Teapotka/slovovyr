import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Arrow from "../../components/Modules/Arrow";

describe('Arrow Module', ()=>{
    test('should render', async ()=>{
        render(<Arrow className='className text' onClick={()=>{}}/>)
        const component = await screen.findByTestId('arrowModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})