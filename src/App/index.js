import React from 'react';
import './App.scss';
import GoatCorral from '../components/GoatCorral';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Goat Yoga</h2>
        <GoatCorral />
      </div>
    );
  }
}

export default App;
