import { render, screen } from '@testing-library/react'
import GameLanding from './GameLand'

describe('GameLand', () => {
  test('should render GameLand', () => {
    render(< GameLanding startGame={jest.fn}/>)
    //@ts-ignore
    expect(screen.getByTestId('logoSVG')).toBeInTheDocument()
    //@ts-ignore
    expect(screen.getByTestId('vyrSVG')).toBeInTheDocument()
    //@ts-ignore
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })
})
