import { dispatch, createStore, Increment } from './';

describe('Store', () => {
	test('Dispatch Reducers', () => {
		const store = createStore();

		dispatch(Increment(5));
		dispatch(Increment(5));
		dispatch(Increment(2));

		store.toArray().subscribe(stateHistory => expect(stateHistory).toBe([{ count: 5 }, { count: 10 }, { count: 12 }]));
	});
});
