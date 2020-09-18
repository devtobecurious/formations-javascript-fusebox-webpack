import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputChat from './InputChat/InputChat';
import Messages from './Messages/Messages';

function App() {
  return (
    <div className="App">
      <header className="">
      </header>

      <Messages></Messages>
      <InputChat></InputChat>
    </div>
  );
}

export default App;
