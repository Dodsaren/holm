import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow, render, mount } from 'enzyme'
import App from './App'
import MainMenu from '../MainMenu/Container'
import { MAIN_MENU } from '../../constants/gameStates'

const createMockStore = configureStore()

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders MainMenu component when gameState is MAIN_MENU', () => {
  const store = createMockStore({ gameState: MAIN_MENU })
  store.dispatch = jest.fn()
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  expect(wrapper.contains(<MainMenu />)).toEqual(true)
  wrapper.find('button').simulate('click')
  expect(store.dispatch).toHaveBeenCalledWith({ type: 'GAME_INITIALIZED' })
})

it('fires the correct action when the start new game button is clicked', () => {
  const store = createMockStore({ gameState: MAIN_MENU })
  store.dispatch = jest.fn()
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  wrapper.find('button').simulate('click')
  expect(store.dispatch).toHaveBeenCalledWith({ type: 'GAME_INITIALIZED' })
})
