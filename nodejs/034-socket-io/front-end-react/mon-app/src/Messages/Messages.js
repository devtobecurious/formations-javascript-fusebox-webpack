import React from 'react';
import Message from '../Message/Message';
import './Messages.css';

export default function Messages(props) {
    const childs = props?.messages?.forEach(message => {
        return <Message content={message}></Message>
    });
    return (
        <div id="messages">{ childs }</div>
    );
}