import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../store'
import Game from './Game'

describe('Game', () => { 
    beforeEach(()=>{
        render(
            <Provider store={store}>
            <Game/>
            </Provider>
            )
    })
    test('should fill field', () => { 
        fireEvent.keyUp(window, {key: 'а'})
        const fieldItem = screen.queryByTestId('field')?.childNodes[0] as HTMLDivElement
        expect(fieldItem.innerHTML).toBe('а')
     })
    test('should clear field', () => { 
        fireEvent.keyUp(window, {key: 'а'})
        const fieldItem = screen.queryByTestId('field')?.childNodes[0] as HTMLDivElement
        fireEvent.keyUp(window, {key: 'Backspace'})
        expect(fieldItem.innerHTML).toBe('')
     })

 })