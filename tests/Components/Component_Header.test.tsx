import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import HeaderComponent from "../../components/Header/HeaderComponent";

describe('Header Component', ()=>{
    test('should render without props', async ()=>{
        render(<HeaderComponent/>)
        const component = await screen.findByTestId('headerComponent')
        expect(component).toBeInTheDocument()
    })
    test('should render with >1 node', async ()=>{
        render(<HeaderComponent
            left={<div>text</div>}
            center={<div>text</div>}
            right={<div>text</div>}
        />)
        const component = await screen.findByTestId('headerComponent')
        expect(component).toBeInTheDocument()
    })
    test('should render with type', async ()=>{
        const type = 'test-type'
        render(<HeaderComponent
            type={type}
        />)
        const component = await screen.findByTestId('headerComponent')
        expect(component.classList[component.classList.length-1]).toBe(type)
    })
})