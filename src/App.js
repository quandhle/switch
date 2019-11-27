import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Gmail from './components/gmail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Switch
        <Gmail/>
      </header>
    </div>
  );
}

export default App;
