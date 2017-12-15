import { createStore, Increment } from './store';
import * as React from 'react';
import { Connect } from './components/Connect';

const store = createStore(); // Injectable via context?

class App extends React.Component {
  render() {
    return (
      <Connect store={store}>
        {(state, dispatch) => (
          <div>
            <button onClick={() => dispatch(Increment(1))}>Increment</button>
            <div className="App">{state.count}</div>
          </div>
        )}
      </Connect>
    );
  }
}

export default App;
