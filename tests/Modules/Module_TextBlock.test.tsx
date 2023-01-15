import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import TextBlock from "../../components/Modules/TextBlock";

describe('TextBlock Module', ()=>{
    test('should render empty', async ()=>{
        render(<TextBlock text={''} className={''}/>)
        const component = await screen.findByTestId('textBlockModule')
        expect(component).toBeInTheDocument()
    })
    test('should render with string', async ()=>{
        render(<TextBlock text={'Text'} className={'className text'}/>)
        const component = await screen.findByTestId('textBlockModule')
        expect(component).toBeInTheDocument()
    })
    test('should render with html', async ()=>{
        render(<TextBlock text={<div>Text</div>} className={'className text'}/>)
        const component = await screen.findByTestId('textBlockModule')
        expect(component).toBeInTheDocument()
    })
})