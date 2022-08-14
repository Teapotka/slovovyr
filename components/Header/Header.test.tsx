import { render, screen } from '@testing-library/react'
import HeaderGame from './HeaderGame'
import Header from './Header'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Headers', () => {
  test('should render HeaderGame', () => {
    render(
      <Provider store={store}>
        < HeaderGame/>
      </Provider>
    )
    //@ts-ignore
    expect(screen.getByTestId('settingsSVG')).toBeInTheDocument()
  })
  test('should render Header', () => {
    render(
    <Provider store={store}>
      < Header/>
    </Provider>
    )
    //@ts-ignore
    expect(screen.getByTestId('settingsSVG')).toBeInTheDocument()
  })
})
