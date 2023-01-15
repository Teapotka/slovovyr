import {fireEvent, screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Keyboard from "../../components/Modules/Keyboard";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import Field from "../../components/Modules/Field";
import {writeRegionToLS} from "../../data/LocalStorage";

describe('Keyboard Module', ()=>{
    test('should render', async ()=>{
        render(
            <Provider store={store}>
                <Keyboard/>
            </Provider>
        )
        const component = await screen.findByTestId('keyboardModule')
        expect(component).toBeInTheDocument()
        expect(component.children.length).toBe(35)
        expect(component.children[0].nodeName).toBe('DIV')
    })

    test('should input value by clickEvent', async ()=>{
        render(
            <Provider store={store}>
                <Field className='className text' />
                <Keyboard/>
            </Provider>
        )
        const component = await screen.findByTestId('keyboardModule')
        const field = await screen.findByTestId('fieldModule')
        const index = 11
        fireEvent.click(component.children[index])
        expect(field.children[0].innerHTML).toBe(component.children[index].innerHTML)
    })
    test('should input value by keyUpEvent', async ()=>{
        render(
            <Provider store={store}>
                <Field className='className text' />
                <Keyboard/>
            </Provider>
        )
        const component = await screen.findByTestId('keyboardModule')
        const field = await screen.findByTestId('fieldModule')
        const index = 11
        fireEvent.keyUp(window, {key: 'ї', code: 'BracketRight'})
        expect(field.children[0].innerHTML).toBe(component.children[index].innerHTML)
    })

    test('should clear value', async ()=>{
        render(
            <Provider store={store}>
                <Field className='className text' />
                <Keyboard/>
            </Provider>
        )
        const component = await screen.findByTestId('keyboardModule')
        const field = await screen.findByTestId('fieldModule')
        const index = 11
        const backspaceIndex = 23
        fireEvent.click(component.children[index])
        expect(field.children[0].innerHTML).toBe(component.children[index].innerHTML)
        fireEvent.click(component.children[backspaceIndex])
        expect(field.children[0].innerHTML).toBe('')
    })

    test('should enter word', async ()=>{
        render(
            <Provider store={store}>
                <Field className='className text' />
                <Keyboard/>
            </Provider>
        )
        const component = await screen.findByTestId('keyboardModule')
        const field = await screen.findByTestId('fieldModule')
        const indices = [27, 19, 18, 14, 18]
        const enterIndex = 34
        writeRegionToLS('center')

        for (let i = 0; i < 5; i++)
            fireEvent.click(component.children[indices[i]])

        for (let i = 0; i < 5; i++)
            expect(field.children[i].innerHTML).toBe(component.children[indices[i]].innerHTML)

        fireEvent.click(component.children[enterIndex])

        for (let i = 0; i < 5; i++)
            expect(field.children[i].classList).toContain('is-fetching')
    })
})