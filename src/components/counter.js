import React from 'react';

import { CounterContext } from './counter/CounterProvider';

export default class Counter extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
        <>
          <span style={this.context.styles.counter}>{this.context.count}</span>
        </>
    );
  }
}
