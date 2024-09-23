import React from 'react';
import { useState } from 'react';
import { useCounter } from './hooks/useCounter';

export const ContadorHook = () => { 

    const {valor,acumular} = useCounter();

    return(
        <div>
            <h2 style={{color:'white'}}>Aprender useState</h2>
            <h3 style={{color:'white'}}>Contador Hook: <small>{valor}</small> </h3>
            <button onClick={() => acumular(1)}>Sumar (+1)</button>
            &nbsp;
            <button onClick={() => acumular(-1)}>Restar (-1)</button>
        </div>
    );
};