import React, { useEffect } from 'react';
import './InputChat.css';
import messageService from '../Services/MessageService';

export default function InputChat(props) {
    function sendMessage(e) {
        const content = e.target[0].value;
        messageService.send(content, props.addNewMessage);
        e.target[0].value = '';
        e.preventDefault();
    }

    function sendTyping(e) {
        messageService.sendTyping(e.target.value.trim() != '');
    }

    return (
        <form id="sendForm" action="" onSubmit={ sendMessage }>
            <input id="message" onKeyUp={ sendTyping } /><button>Send</button>
        </form>
    );
}