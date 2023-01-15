import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import ContentComponent from "../../components/Container/ContentComponent";

describe('Content Component', ()=>{
    test('should render with 1 node', async ()=>{
        render(
        <ContentComponent>
            <div>text</div>
        </ContentComponent>)
        const component = await screen.findByTestId('contentComponent')
        expect(component).toBeInTheDocument()
    })
    test('should render with >1 node and no props', async ()=>{
        render(
        <ContentComponent>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </ContentComponent>)
        const component = await screen.findByTestId('contentComponent')
        expect(component).toBeInTheDocument()
    })
    test('should render with >1 node and props', async ()=>{
        render(
        <ContentComponent scroll className='className text'>
            <div>text</div>
            <div>text</div>
            <div>text</div>
        </ContentComponent>)
        const component = await screen.findByTestId('contentComponent')
        expect(component).toBeInTheDocument()
    })
})