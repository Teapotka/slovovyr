import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { toggle } from '../../store/modalSlice'
import HeaderTemp from '../Header/HeaderTemp'
import Grid from './GridTemp'

describe('Grid', () => { 
    beforeEach(()=>{
        render(
            <Provider store={store}>
            <Grid state=''>
                <HeaderTemp type='landing'/>
                <div></div>
            </Grid>
            </Provider>
            )
    })
    test('should render Grid', () => { 
        const header = screen.queryByTestId('header')
        expect(header).toBeInTheDocument()
     })
    test('should toggle modal', () => { 
        const icon = screen.queryByTestId('temp-l-icons')?.childNodes[0] as HTMLElement
        fireEvent.click(icon)
        expect(screen.queryByTestId('temp-l-icons')?.childNodes.length).not.toBe(0)
     })
 })