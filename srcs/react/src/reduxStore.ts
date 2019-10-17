import { createStore, AnyAction, Middleware, applyMiddleware, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import InitialState, { delay } from '../../shared/initialState';

const logger: Middleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}


const storeSaver: Middleware = store => next => action => {
  let result = next(action)
  if (action.type == 'setTime') localStorage.setItem('storedTime', result.payload)
  return result
}

export const asyncSubmit = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'setRequestInFlight', payload: true })
  await delay(2000)
  dispatch({ type: 'setTime', payload: '' })
  dispatch({ type: 'setSelectedElement', payload: '' })
  dispatch({ type: 'setRequestInFlight', payload: false })
}


// NOTE: no autocomplete of state out of the box
function baseReducer(state = InitialState, action: AnyAction) {
  switch (action.type) {
    case 'setTime': {
      return { ...state, time: action.payload }
    }
    case 'setSelectedItem': {
      return { ...state, selectedItem: action.payload }
    }
    case 'setRequestInFlight': {
      return { ...state, requestInFlight: action.payload }
    }
    case 'setTodo': {
      return {
        ...state, todos: state.todos.map((item, i) =>
          i === action.payload.id ? { ...item, enabled: action.payload.val } : item)
      }
    }
    default:
      return state
  }
}


const store = createStore(baseReducer, applyMiddleware(thunk, storeSaver, logger))

let time = localStorage.getItem('storedTime') || InitialState.time
store.dispatch({ type: 'setTime', payload: time })

const appState = store.getState()
export type Store = typeof store
export type AppState = typeof appState

export default store;