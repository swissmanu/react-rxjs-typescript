import { createStore, Increment } from './store';
import * as React from 'react';
import { Connect } from './components/Connect';

const store = createStore(); // Injectable via context?

class App extends React.Component<{}, { show: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Connect store={store}>
          {(state, dispatch) => (
            <div>
              <button onClick={() => dispatch(Increment(1))}>Increment</button>
              <div className="App">{state.count}</div>
            </div>
          )}
        </Connect>
        <button onClick={() => this.setState(p => ({ show: !p.show }))}>Show</button>
        {show && (
          <Connect store={store}>
            {state => (
              <div>
                <div className="App">{state.count}</div>
              </div>
            )}
          </Connect>
        )}
      </div>
    );
  }
}

export default App;
