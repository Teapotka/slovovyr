import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Logo from "../../components/Modules/Logo";

describe('Logo Module', ()=>{
    test('should render', async ()=>{
        render(<Logo className='className text'/>)
        const component = await screen.findByTestId('logoModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})