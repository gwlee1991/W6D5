import React from 'react';
import ReactDom from 'react-dom';

import Clock from './clock';
import Weather from './weather';

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock/>
        <Weather/>
      </div>
    );
  }
}

export default App;
