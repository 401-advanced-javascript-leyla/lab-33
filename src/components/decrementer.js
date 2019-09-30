import React, { useContext } from 'react';

import { CounterContext } from './counter/CounterProvider';

export default function Decrement() {
  const context = useContext(CounterContext);

  return (
      <>
        <button style={context.styles.button} onClick={context.decrement}> - </button>
      </>
  );
}
