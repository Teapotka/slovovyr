import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import GridComponent from "../../components/Grid/GridComponent";


describe('Grid Component', ()=>{
    test('should render', async ()=>{
        render(<GridComponent
            header={<div>Header</div>}
            content={<div>Content</div>}/>
        )
        const component = await screen.findByTestId('gridComponent')
        expect(component).toBeInTheDocument()
        expect(component.children.length).toBe(2)
    })
})