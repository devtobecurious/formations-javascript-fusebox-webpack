import React, { useEffect } from 'react';
import './InputChat.css';
import messageService from '../Services/MessageService';

export default function InputChat() {
    function sendMessage(e) {
        messageService.send(e.target.value);
        console.log(messageService);
        e.preventDefault();
    }

    function sendTyping(e) {
        messageService.sendTyping(e.target.value.trim() != '');
    }

    useEffect(() => {
        messageService.init();        
    });

    return (
        <form id="sendForm" action="" onSubmit={ sendMessage }>
            <input id="message" onKeyUp={ sendTyping } /><button>Send</button>
        </form>
    );
}