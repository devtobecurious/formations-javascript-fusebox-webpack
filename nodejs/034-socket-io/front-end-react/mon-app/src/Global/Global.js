import React, { useEffect } from 'react';
import messageService from '../Services/MessageService';

export default function Global() {
    const useMountEffect = (fun) => useEffect(fun, []); // loading one time

    useMountEffect(() => {
        messageService.init();        
    });

    return (null);
}