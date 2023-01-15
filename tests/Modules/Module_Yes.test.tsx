import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Yes from "../../components/Modules/Yes";

describe('Yes Module', ()=>{
    test('should render', async ()=>{
        render(<Yes className='className text'/>)
        const component = await screen.findByTestId('yesModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})