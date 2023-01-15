import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Link from "../../components/Modules/Link";

describe('Link Module', ()=>{
    test('should render', async ()=>{
        render(<Link className='className text' onClick={()=>{}}/>)
        const component = await screen.findByTestId('linkModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})