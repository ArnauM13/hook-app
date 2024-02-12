import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(0);
    
    // const increment = useCallback(
    //    () => {
    //        setCounter(counter + 1);
    //    }, [counter]
    // )

    const increment = useCallback(
        (value) => {
            setCounter((c) => c + value);
        }, []
    )


    // const increment = () => {
    //    setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </>
    )
}
