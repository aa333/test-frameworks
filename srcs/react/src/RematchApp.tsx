let timeStart = performance.now()
import 'ts-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store, { AppState, Dispatch } from './rematchStore'
import TODO from './Todo'
import { ITodoData, getHoursMinutesSecondsFromString } from '../../shared/initialState'
import '../../shared/main.scss'

export interface IProps {
  time: string,
  requestInFlight: boolean,
  selectedItem: string | null,
  items: string[],
  todos?: ITodoData[],
  submit: () => void,
  setTime: (val: string) => void,
  setSelectedItem: (val: string) => void,
  todoChange: (id: number, val: boolean) => void
}

class App extends React.Component<IProps, { error?: string, }> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
    this.onTodoChange = this.onTodoChange.bind(this)
    this.onSelectedItemChange = this.onSelectedItemChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onTimestampChange = this.onTimestampChange.bind(this)
  }

  onTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.todoChange(parseInt(event.target.dataset['id'] || '0'), event.target.checked)
  }

  onTimestampChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ error: '' })
    this.props.setTime(event.target.value)
  }

  onSelectedItemChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.setSelectedItem(event.target.value)
  }

  componentDidMount() {
    console.log("Rirst render complete, time:", performance.now() - timeStart)
  }

  onSubmit() {
    let hms = getHoursMinutesSecondsFromString(this.props.time)
    if (!hms) {
      this.setState({ error: 'Invalid time format' })
    } else {
      this.props.submit()
    }
  }

  getButton() {
    return <button className="request" disabled={this.props.requestInFlight} onClick={this.onSubmit}>
      {this.props.requestInFlight ? "Processing" : "Submit"}
    </button>
  }

  render() {
    return <div className="app">
      <input className={'time' + (this.state.error ? ' error' : '')} value={this.props.time} onChange={this.onTimestampChange}></input>
      {this.state.error ? <div className="errorMsg">{this.state.error}</div> : null}
      <input className="items" value={this.props.selectedItem || ''} onChange={this.onSelectedItemChange}></input>
      {this.getButton()}
      {this.props.todos ? <ul className="todos">
        {this.props.todos.map((t, i) => <TODO checked={t.enabled} name={t.name} key={i} id={i} onChange={this.onTodoChange}></TODO>)}
      </ul> : null}
    </div>
  }
}

const mapStateToProps = ({ main: { time, selectedItem, items, todos, requestInFlight } }: AppState) => {
  return { time, selectedItem, items, todos, requestInFlight }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submit: dispatch.main.submit,
  todoChange: (id: number, val: boolean) => dispatch.main.setTodo({ id, val }),
  setSelectedItem: dispatch.main.setSelectedItem,
  setTime: dispatch.main.setTime
})

// @ts-ignore
const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App)

const rootElement = document.getElementById("mount")
ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  rootElement
)

