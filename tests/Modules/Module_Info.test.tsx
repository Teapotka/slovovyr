import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Info from "../../components/Modules/Info";

describe('Info Module', ()=>{
    test('should render', async ()=>{
        render(<Info className='className text' onClick={()=>{}}/>)
        const component = await screen.findByTestId('infoModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})