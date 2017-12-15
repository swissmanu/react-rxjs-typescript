import { createStore, Increment } from './store';
import * as React from 'react';
import { Connect } from './components/Connect';

const appStore = createStore();

class App extends React.Component {
	render() {
		return (
			<div>
				<Connect store={appStore}>
					{(state, dispatch) => (
						<div>
							<button onClick={() => dispatch(Increment(1))}>Increment</button>
							<div className="App">{state.count}</div>
						</div>
					)}
				</Connect>
			</div>
		);
	}
}

export default App;
