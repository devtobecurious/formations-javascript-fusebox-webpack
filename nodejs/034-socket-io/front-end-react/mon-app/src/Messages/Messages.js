import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import './Messages.css';
import messageService from '../Services/MessageService';

export default function Messages(props) {
    const childs = props.list?.map(message => <Message key={message.id} item={message.item}></Message>);

    useEffect(() => {
        messageService.onReceiveMessage((emitter, message) => {
            props.addNewMessage(message);
        });
    });

    return (
        <div id="messages">{ childs }</div>
    );
}