import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import ConterContext from './components/counter/CounterProvider';


class Main extends React.Component {
  render() {
    return (
      <>
        <ConterContext>
          <App />
        </ConterContext>
      </>
    );    
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
