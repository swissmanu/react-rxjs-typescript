import * as Rx from 'rxjs';
import { State, ReducerFn, Store } from './types';

export const defaultState: State = {
  count: 0
};

const action$ = new Rx.Subject<ReducerFn>();

export function createStore(initialState: State = defaultState): Store {
  const store = new Rx.Subject<State>();
  const store$ = store.startWith(initialState);

  // Connect action$ stream with the store$ stream
  action$.withLatestFrom(store$, (reduce, prev) => reduce(prev)).subscribe(store);

  return store$;
}

export function dispatch(reducerFn: ReducerFn): void {
  action$.next(reducerFn);
}
