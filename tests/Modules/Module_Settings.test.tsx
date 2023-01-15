import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Settings from "../../components/Modules/Settings";

describe('Settings Module', ()=>{
    test('should render', async ()=>{
        render(<Settings className='className text' onClick={()=>{}}/>)
        const component = await screen.findByTestId('settingsModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
})