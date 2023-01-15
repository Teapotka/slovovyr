import {fireEvent, screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Map from "../../components/Modules/Map/Map";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

describe('Map Module', ()=>{
    test('should render', async ()=>{
        render(
            <Provider store={store}>
                <Map className='className text'/>
            </Provider>
        )
        const component = await screen.findByTestId('mapModule')
        expect(component).toBeInTheDocument()
        expect(component.children[0].nodeName).toBe('svg')
    })
    test('should choose region', async ()=>{
        render(
           <Provider store={store}>
               <Map className='className text'/>
           </Provider>
        )
        const component = await screen.findByTestId('mapModule')
        const child = component.children[0].children[0]
        fireEvent.click(child)
        expect(child.classList).toContain('is-chosenRegion')
    })
    test('should change region', async ()=>{
        render(
           <Provider store={store}>
               <Map className='className text'/>
           </Provider>
        )
        const component = await screen.findByTestId('mapModule')
        const child = component.children[0].children[0]
        const anotherChild = component.children[0].children[1]
        fireEvent.click(child)
        expect(child.classList).toContain('is-chosenRegion')
        fireEvent.click(anotherChild)
        expect(child.classList).not.toContain('is-chosenRegion')
        expect(anotherChild.classList).toContain('is-chosenRegion')
    })
})