import { render, screen } from '@testing-library/react'
import HeaderGame from './HeaderGame'
import Header from './Header'

describe('Headers', () => {
  test('should render HeaderGame', () => {
    render(< HeaderGame/>)
    //@ts-ignore
    expect(screen.getByTestId('settingsSVG')).toBeInTheDocument()
  })
  test('should render Header', () => {
    render(< Header/>)
    //@ts-ignore
    expect(screen.getByTestId('settingsSVG')).toBeInTheDocument()
  })
})
