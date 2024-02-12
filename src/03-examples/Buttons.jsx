import React from 'react'
import { Button } from './Button'

export const Buttons = ({isLoading, getQuotes, increment, decrement}) => {
    
    return (
        <>
            <Button 
                isLoading={isLoading}
                onClick={increment}
                text={'+1'}
            />
            <Button 
                isLoading={isLoading}
                onClick={decrement}
                text={'-1'}
            />
            <Button 
                isLoading={isLoading}
                onClick={getQuotes}
                text={'Get Random Quotes'}
            />
        </>

    )
}
