import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import InputChat from './InputChat/InputChat';
import Messages from './Messages/Messages';
import Global from './Global/Global';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('coucou :>> ', list);
  });

  function addNewMessage(message) {
    const newList = [...list];

    newList.push({ id: list.length + 1,  item: message });

    setList(newList);
  }

  function addTyping(message) {
    const result = getTyping();

    if (! result) {
      addNewMessage(message);
    }
  }

  function getTyping() {
    const resultArray = list.filter(message => { 
      return message.item.from.includes('typing');
    });

    return resultArray.length > 0 ? resultArray[0] : null;
  }

  function removeTyping() {
    const result = getTyping();

    if (result) {
      const index = list.indexOf(result);
      
      const newList = [...list];
  
      newList.splice(index);

      setList(newList);
    }
  }

  return (
    <div className="App">
      <Global></Global>

      <header className="">
      </header>

      <Messages list={ list } addTyping={ addTyping } removeTyping={ removeTyping } addNewMessage={ addNewMessage }></Messages>
      <InputChat addNewMessage={ addNewMessage }></InputChat>
    </div>
  );
}

export default App;
