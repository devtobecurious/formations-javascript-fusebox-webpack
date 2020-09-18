import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import './Messages.css';
import messageService from '../Services/MessageService';

export default function Messages(props) {
    const useMountEffect = (fun) => useEffect(fun, []); // loading one time
    const childs = props.list?.map(message => <Message key={message.id} item={message.item}></Message>);

    useEffect(() => {
        messageService.onReceiveMessage((emitter, message) => {
            props.addNewMessage(message);
        });

        messageService.onReceiveTyping((emitter, message) => {
            props.addTyping(message);
        });

        messageService.onReceiveEndTyping((emitter, message) => {
            props.removeTyping();
        });
    });

    return (
        <div id="messages">{ childs }</div>
    );
}