import { useState } from 'react'

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)
   
    const increment = (value = 1) => {
        setCounter((current) => current + value); // ho deixem així perquè agafi sempre l'últim valor
    }

    const decrement = (value = 1) => {
        counter > 0 ? setCounter((current) => current - value) : alert('No se puede disminuir valor');
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
