import React from 'react';

import { CounterContext } from './counter/CounterProvider';

export default function Increment() {
  return (
    <CounterContext.Consumer>
      {(context) => (
        <>
          <button style={context.styles.button} onClick={context.increment}> + </button>
        </>
      )}
          
    </CounterContext.Consumer>
  );
}
