import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { toggle } from '../../store/modalSlice'
import Header from './HeaderTemp'

describe('HeaderTemp', () => { 
    test('should render Header.tsx landing version', () => { 
        render(
            <Provider store={store}>
            <Header type='landing'/>
            </Provider>
            )
        const nav = screen.queryByTestId('temp-l-navigation')
        expect(nav).toBeInTheDocument()
        const icons = screen.queryByTestId('temp-l-icons')
        expect(icons).toBeInTheDocument()
     })
    test('should render Header.tsx game version', () => { 
        render(
            <Provider store={store}>
            <Header type='game'/>
            </Provider>
            )
            const icons = screen.queryByTestId('temp-l-icons')
            expect(icons?.childNodes.length).toBe(2)
     })
    test('should render Header.tsx alt version', () => { 
        render(
            <Provider store={store}>
            <Header type='alternative'/>
            </Provider>
            )
        const icons = screen.queryByTestId('temp-l-icons')
        expect(icons?.childNodes.length).toBe(1)
     })
 })