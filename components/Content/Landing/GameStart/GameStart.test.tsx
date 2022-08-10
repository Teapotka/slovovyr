import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../../store'
import GameStart from './GameStart'

describe('GameStart', () => {
    beforeEach(()=> {
        render(
            <Provider store={store}>
                <GameStart navigate={jest.fn}/>
            </Provider>
        )
    })
    function choose(region:string){
        expect(screen.getByTestId(region).classList.contains('is-chosen')).toBeFalsy()
        fireEvent.click(screen.getByTestId(region))
        //@ts-ignore
        expect(screen.getByTestId(region).classList.contains('is-chosen')).toBeTruthy()
    }
  test('should render GameStart', () => {
    //@ts-ignore
    expect(screen.getByTestId('logoSVG')).toBeInTheDocument()
    //@ts-ignore
    expect(screen.getByTestId('mapSVG')).toBeInTheDocument()
    //@ts-ignore
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })
  test('should choose westSVG', () => {
    choose('westSVG')
  })
  test('should choose eastSVG', () => {
    choose('eastSVG')
  })
  test('should choose centerSVG', () => {
    choose('centerSVG')
  })
})