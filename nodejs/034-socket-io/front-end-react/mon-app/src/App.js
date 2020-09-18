import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputChat from './InputChat/InputChat';
import Messages from './Messages/Messages';
import Global from './Global/Global';

function App() {
  const [list, setList] = useState([]);

  function addNewMessage(message) {
    const newList = [...list];

    newList.push({ id: list.length + 1,  item: message });

    setList(newList);
  }

  return (
    <div className="App">
      <Global></Global>

      <header className="">
      </header>

      <Messages list={ list } addNewMessage={ addNewMessage }></Messages>
      <InputChat addNewMessage={ addNewMessage }></InputChat>
    </div>
  );
}

export default App;
