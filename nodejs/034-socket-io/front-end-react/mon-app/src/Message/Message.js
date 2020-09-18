import React from 'react';
import './Message.css';

export default function Message(props) {
    return (
        <div className={ props.item.from }>{ props.item.content }</div>
    );
}