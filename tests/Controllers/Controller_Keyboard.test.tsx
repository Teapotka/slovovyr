import {KeyboardController} from "../../controllers/KeyboardController";
import {render} from "@testing-library/react";
import Field from "../../components/Modules/Field";
import {screen} from "@testing-library/dom";
import {writeRegionToLS} from "../../data/LocalStorage";
import Keyboard from "../../components/Modules/Keyboard";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

describe('Keyboard Controller', ()=>{
    test('should add dispatch', ()=>{
        const spy = jest.spyOn(KeyboardController, 'addDispatch')
        const dispatch = jest.fn()

        KeyboardController.addDispatch(dispatch)

        expect(spy).toHaveBeenCalled()
    })
    test('should input value', async()=>{
        render(<Field className='className text'/>)
        const spy = jest.spyOn(KeyboardController, 'input')
        const key = 'ї'
        const component = await screen.findByTestId('fieldModule')

        KeyboardController.input(key)

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(key)
        expect(component.children[0].innerHTML).toBe(key)
    })
    test('should clear value', async ()=>{
        render(<Field className='className text'/>)
        const spy = jest.spyOn(KeyboardController, 'clear')
        const key = 'ї'
        const component = await screen.findByTestId('fieldModule')

        KeyboardController.input(key)
        KeyboardController.clear()

        expect(spy).toHaveBeenCalled()
        expect(component.children[0].innerHTML).toBe('')
    })
    const enterTemplate = async () =>{
        render(
            <Provider store={store}>
                <Field className='className text'/>
                <Keyboard/>
            </Provider>
        )
        const spy = jest.spyOn(KeyboardController, 'enter')
        const component = await screen.findByTestId('fieldModule')
        writeRegionToLS('center')

        return {spy, component}
    }
    test('should enter value', async ()=>{
        const keys = ['с', 'л', 'о', 'в', 'о']
        const {spy, component} = await enterTemplate()

        for (const key of keys)
            KeyboardController.input(key)

        for (let i = 0; i < 5; i++)
            expect(component.children[i].innerHTML).toBe(keys[i])

        await KeyboardController.enter()

        expect(spy).toHaveBeenCalled()
        for (let i = 0; i < 5; i++)
            expect(component.children[i].classList.length).toBe(2)
    })
    test('should not enter value', async ()=>{
        const keys = ['о', 'о', 'о', 'о', 'о']
        const {spy, component} = await enterTemplate()

        for (const key of keys)
            KeyboardController.input(key)

        for (let i = 0; i < 5; i++)
            expect(component.children[i].innerHTML).toBe(keys[i])

        await KeyboardController.enter()

        expect(spy).toHaveBeenCalled()
        for (let i = 0; i < 5; i++){
            expect(component.children[i].classList.length).toBe(1)
            expect(component.children[i].innerHTML).toBe('')
        }
    })
    test('should return all wrong', async ()=>{
        const word = 'ааааа'.split('')
        const answer = 'ооооо'.split('')

        const array = KeyboardController.matchLetters(word, answer)

        const equal = ["is-wrong", "is-wrong", "is-wrong", "is-wrong", "is-wrong"]
        expect(array).toEqual(equal)
    })
    test('should return all right', async ()=>{
        const word = 'ааааа'.split('')
        const answer = 'ааааа'.split('')

        const array = KeyboardController.matchLetters(word, answer)

        const equal = ["is-right", "is-right", "is-right", "is-right", "is-right"]
        expect(array).toEqual(equal)
    })
    test('should test semi', async ()=>{
        // template +____ => __+__
        (()=> {
            const word = 'оееее'.split('')
            const answer = 'ааоаа'.split('')

            const array = KeyboardController.matchLetters(word, answer)

            const equal = ["is-semiright", "is-wrong", "is-wrong", "is-wrong", "is-wrong"]
            expect(array).toEqual(equal)
        })();
        // template +___+ => __+__
        (()=> {
            const word = 'оееео'.split('')
            const answer = 'ааоаа'.split('')

            const array = KeyboardController.matchLetters(word, answer)

            const equal = ["is-semiright", "is-wrong", "is-wrong", "is-wrong", "is-wrong"]
            expect(array).toEqual(equal)
        })();
        // template +___+ => _+_+_
        (()=> {
            const word = 'оееео'.split('')
            const answer = 'аоаоа'.split('')

            const array = KeyboardController.matchLetters(word, answer)

            const equal = ["is-semiright", "is-wrong", "is-wrong", "is-wrong", "is-semiright"]
            expect(array).toEqual(equal)
        })();
        // template +_+_+ => _+_+_
        (()=> {
            const word = 'оеоео'.split('')
            const answer = 'аоаоа'.split('')

            const array = KeyboardController.matchLetters(word, answer)

            const equal = ["is-semiright", "is-wrong", "is-semiright", "is-wrong", "is-wrong"]
            expect(array).toEqual(equal)
        })();
        // template +_-__ => -_+__
        (()=> {
            const word = 'офафф'.split('')
            const answer = 'ашошш'.split('')

            const array = KeyboardController.matchLetters(word, answer)

            const equal = ["is-semiright", "is-wrong", "is-semiright", "is-wrong", "is-wrong"]
            expect(array).toEqual(equal)
        })();
        // template +_+_- => _+_-_
        (()=> {
            const word = 'афафо'.split('')
            const answer = 'шашош'.split('')

            const array = KeyboardController.matchLetters(word, answer)

            const equal = ["is-semiright", "is-wrong", "is-wrong", "is-wrong", "is-semiright"]
            expect(array).toEqual(equal)
        })();
        // template +_+-+ => -+_+_
        (()=> {
            const word = 'олово'.split('')
            const answer = 'возок'.split('')

            const array = KeyboardController.matchLetters(word, answer)

            const equal = ["is-semiright", "is-wrong", "is-semiright", "is-semiright", "is-wrong"]
            expect(array).toEqual(equal)
        })();

    })
})