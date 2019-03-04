import React from 'react'
import { shallow, render, mount } from 'enzyme'
import App from './App'
import MainMenu from './components/MainMenu/Container'
import Game from './components/Game/Game'
import GameOver, {
  GET_QUIZ as GET_QUIZ_FOR_GO,
} from './components/GameOver/GameOver'
import ModeSelector from './components/ModeSelector/Component'
import PreGameOptions, { GET_QUIZ } from './components/PreGame/Container'
import { Provider } from 'react-redux'
import { MockedProvider as ApolloProvider } from 'react-apollo/test-utils'
import configureStore from 'redux-mock-store'
import {
  MAIN_MENU,
  QUIZ_SELECTION,
  MODE_SELECTION,
  IN_GAME,
  GAME_OVER,
} from './constants/gameStates'
import {
  LOCAL_MULTIPLAYER_CORE,
  SINGLEPLAYER_CORE,
} from './constants/gameModes'
import Singleplayer, {
  GET_QUIZ as GET_QUIZ_FOR_SPC,
} from './components/Game/Singleplayer/Container'
import Multiplayer, {
  GET_QUIZ as GET_QUIZ_FOR_LMPC,
} from './components/Game/Multiplayer/Container'
import QuizSelector from './components/PreGame/QuizSelector'

const createMockStore = configureStore()

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders MainMenu component when gameState is MAIN_MENU', () => {
  const store = createMockStore({ gameState: MAIN_MENU })
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  expect(wrapper.contains(<MainMenu />)).toEqual(true)
})

it('renders PreGameOptions component when gameState is QUIZ_SELECTION', () => {
  const store = createMockStore({ gameState: QUIZ_SELECTION })
  const mocks = [
    {
      request: {
        query: null,
      },
      result: {
        data: {
          quiz: [
            {
              id: 1,
              label: 'Ett qvizz',
            },
          ],
        },
      },
    },
  ]
  const wrapper = render(
    <Provider store={store}>
      <ApolloProvider mocks={mocks}>
        <App />
      </ApolloProvider>
    </Provider>,
  )
  console.log(wrapper)
  expect(wrapper.contains(<QuizSelector />)).toEqual(true)
})

it('renders ModeSlector component when gameState is MODE_SELECTION', () => {
  const store = createMockStore({ gameState: MODE_SELECTION })
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  expect(wrapper.contains(<ModeSelector />)).toEqual(true)
})

it('renders Singleplayer game component when gameState is IN_GAME and mode is SINGLEPLAYER_CORE', () => {
  const store = createMockStore({ gameState: IN_GAME, mode: SINGLEPLAYER_CORE })
  const mocks = [
    {
      request: {
        query: GET_QUIZ_FOR_SPC,
      },
      result: {
        data: {
          quiz: [
            {
              id: 1,
              label: 'Ett qvizz',
              questions: [
                {
                  label: 'Fråga ett',
                  options: ['val 1', 'val 2'],
                },
              ],
            },
          ],
        },
      },
    },
  ]
  const wrapper = mount(
    <Provider store={store}>
      <ApolloProvider mocks={mocks}>
        <App />
      </ApolloProvider>
    </Provider>,
  )
  expect(wrapper.contains(<Game />)).toEqual(true)
  expect(wrapper.contains(<Singleplayer />)).toEqual(true)
})

it('renders Multiplayer couch game component when gameState is IN_GAME and mode is LOCAL_MULTIPLAYER_CORE', () => {
  const store = createMockStore({
    gameState: IN_GAME,
    mode: LOCAL_MULTIPLAYER_CORE,
  })
  const mocks = [
    {
      request: {
        query: GET_QUIZ_FOR_LMPC,
      },
      result: {
        data: {
          quiz: [
            {
              id: 1,
              label: 'Ett qvizz',
              questions: [
                {
                  id: 1,
                  label: 'Fråga ett',
                  freeTextSolutions: ['Svar 1', 'Svar 2'],
                },
              ],
            },
          ],
        },
      },
    },
  ]
  const wrapper = mount(
    <Provider store={store}>
      <ApolloProvider mocks={mocks}>
        <App />
      </ApolloProvider>
    </Provider>,
  )
  expect(wrapper.contains(<Game />)).toEqual(true)
  expect(wrapper.contains(<Multiplayer />)).toEqual(true)
})

it('should render GameOver component when gameState is GAME_OVER', () => {
  const store = createMockStore({ gameState: GAME_OVER })
  const mocks = [
    {
      request: {
        query: GET_QUIZ_FOR_GO,
      },
      result: {
        data: {
          quiz: [
            {
              id: 1,
              label: 'Ett qvizz',
              optionsSolutions: [0, 1, 2, 0],
            },
          ],
        },
      },
    },
  ]
  const wrapper = mount(
    <Provider store={store}>
      <ApolloProvider mocks={mocks}>
        <App />
      </ApolloProvider>
    </Provider>,
  )
  expect(wrapper.contains(<GameOver />)).toEqual(true)
})
