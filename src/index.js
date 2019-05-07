import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

class Main extends React.Component {
  render () {
    return <App />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


