import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import TableItem from "../../components/Modules/TableItem";

const mockData:TResult = {
    result: 'win',
    region: 'center',
    time: 120,
    date: new Date()
}
describe('Arrow Module', ()=>{
    test('should render', async ()=>{
        render(<TableItem item={mockData}/>)
        const component = await screen.findByTestId('tableItemModule')
        expect(component).toBeInTheDocument()
        expect(component.children.length).toBe(2)
        expect(component.children[0].children.length).toBe(4)
    })
})