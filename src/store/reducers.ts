import { State, ReducerFn } from './types';

export function Increment(incrementBy: number): ReducerFn {
  return (prev: State) => ({
    ...prev,
    count: prev.count + incrementBy
  });
}
