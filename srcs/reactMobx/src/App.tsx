let timeStart = performance.now()
import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends React.Component {
  componentDidMount () {
    console.log("First render complete, time:", performance.now() - timeStart)
  }
  render () {
    return (
      <>
        <Form />
        <TodoList />
      </>
    );
  }
}

export default App;
