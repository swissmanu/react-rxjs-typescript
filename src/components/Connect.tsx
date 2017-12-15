import { Store, State, dispatch, DispatchFn } from '../store';
import * as React from 'react';
import * as Rx from 'rxjs';

interface ConnectProps {
  store: Store;
  children: (state: State, dispatch: DispatchFn) => React.ReactChild;
}

interface ConnectState {
  state: State | null;
}

export class Connect extends React.Component<ConnectProps, ConnectState> {
  private subscription: Rx.Subscription | null;

  constructor(props: ConnectProps) {
    super(props);
    this.state = { state: null };
  }

  componentWillMount() {
    this.subscribeTo(this.props.store);
  }

  componentWillUnmount() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  render() {
    const { children: renderChild } = this.props;
    const { state } = this.state;

    return state && renderChild(state, dispatch);
  }

  private subscribeTo = (store: Store) => {
    store.subscribe(state => {
      this.setState(p => ({ ...p, state }));
    });
  };
}
