import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import FotoBlock from "../../components/Modules/FotoBlock";

describe('FotoBlock Module', ()=>{
    test('should render empty', async ()=>{
        render(<FotoBlock info={''}
                          direction={'left'}
                          alt={'text'}
                          path={'/static/Vladyslav_Todorchuk.webp'}/>)
        const component = await screen.findByTestId('fotoBlockModule')
        expect(component).toBeInTheDocument()

    })
    test('should render html', async ()=>{
        render(<FotoBlock info={<div>Text</div>}
                          direction={'left'}
                          alt={'text'}
                          path={'/static/Vladyslav_Todorchuk.webp'}/>)
        const component = await screen.findByTestId('fotoBlockModule')
        expect(component).toBeInTheDocument()
    })
    test('should render with left direction', async ()=>{
        render(<FotoBlock info={<div>Text</div>}
                          direction={'left'}
                          alt={'text'}
                          path={'/static/Vladyslav_Todorchuk.webp'}/>)
        const component = await screen.findByTestId('fotoBlockModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('IMG')
    })
    test('should render with right direction', async ()=>{
        render(<FotoBlock info={<div>Text</div>}
                          direction={'right'}
                          alt={'text'}
                          path={'/static/Vladyslav_Todorchuk.webp'}/>)
        const component = await screen.findByTestId('fotoBlockModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).not.toBe('IMG')

    })
})