import { useState } from 'react';

export const useCounter = (inicial = 100) => {
 
    const [valor, setValor] = useState(inicial);
    
    const acumular = (numero) => {
        setValor(valor+numero);
    }
   
    return{
        valor,
        acumular
    }
}
