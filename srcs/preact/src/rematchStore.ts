import { init, Middleware, createModel } from '@rematch/core'
import InitialState, { delay, IState } from '../../shared/initialState';

const logger: Middleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const storeSaver: Middleware = store => next => action => {
  let result = next(action)
  if (action.type == 'main/setTime') localStorage.setItem('storedTime', action.payload)
  return result
}

const main = createModel({
  state: InitialState,
  reducers: {
    setTime(state: IState, time: string) {
      return { ...state, time }
    },
    setSelectedItem(state: IState, selectedItem: string) {
      return { ...state, selectedItem }
    },
    setRequestInFlight(state: IState, val: boolean) {
      return { ...state, requestInFlight: val }
    },
    setTodo(state: IState, { val, id }: { val: boolean, id: number }) {
      return {
        ...state, todos: state.todos.map((item, i) =>
          i === id ? { ...item, enabled: val } : item)
      }
    },
  },
  effects: {
    async submit() {
      this.setRequestInFlight(true)
      await delay(2000)
      this.setTime('')
      this.setSelectedItem('')
      this.setRequestInFlight(false)
    }
  }
})

const store = init({
  models: { main },
  redux: {
    middlewares: [logger, storeSaver]
  }
})


let time = localStorage.getItem('storedTime') || InitialState.time
store.dispatch({ type: 'main/setTime', payload: time })
const appState = store.getState()

export type Store = typeof store
export type AppState = typeof appState

export default store;