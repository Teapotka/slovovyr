import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Button from "../../components/Modules/Button";

describe('Button Module', ()=>{
    test('should render', async ()=>{
        render(<Button text='text' className='className text' onClick={()=>{}}/>)
        const component = await screen.findByTestId('buttonModule')
        expect(component).toBeInTheDocument()
    })
})