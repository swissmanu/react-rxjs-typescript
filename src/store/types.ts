import * as Rx from 'rxjs';

export type DispatchFn = (reducerFn: ReducerFn) => void;

export type ReducerFn = (prev: State) => State;

export interface State {
	count: number;
}

export type Store = Rx.Observable<State>;
