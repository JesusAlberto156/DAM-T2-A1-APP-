import React from 'react';
import { useState } from 'react';

export const Contador = () => {
    
    const [valor, setValor] = useState(1);
    
    const acumular = (numero) => {
        setValor(valor+numero);
    }

    return(
        <div>
            <h2 style={{color:'white'}}>Aprender useState</h2>
            <h3 style={{color:'white'}}>Contador: <small>{valor}</small> </h3>
            <button onClick={() => acumular(1)}>Sumar (+1)</button>
            &nbsp;
            <button onClick={() => acumular(-1)}>Restar (-1)</button>
        </div>
    );
};