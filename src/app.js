import React from 'react';

import { CounterContext } from './components/counter/CounterProvider';

import Counter from './components/counter';
import Incrementer from './components/incrementer';
import Decrementer from './components/decrementer';

export default class App extends React.Component {
  static contextType = CounterContext;

  render() {
    return (
      <>
        <div style={this.context.styles.container}>
          <Decrementer />
          <Counter />
          <Incrementer />
        </div>
      </>
    );
  }
}
