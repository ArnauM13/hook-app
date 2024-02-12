// @ts-nocheck
import React, { useEffect } from 'react'
import { useFetch, useCounter } from '../hooks'
import { Buttons, LoadingQuote, Quote } from './'


export const MultipleCustomHooks = () => {

    const {data, isLoading, getFetch} = useFetch()
    const {counter, increment, decrement} = useCounter(1)

    const getRandomQuote = () => {
        getFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    }

    const displayData = (data) => {
        const displayData = []
        data.forEach(({author, quote}) => 
            displayData.push(
                <Quote 
                    author={author}
                    quote={quote}
                />
            )
        )
        return displayData
    }

    useEffect(() => {
        getRandomQuote()
    }, [])

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                ? <LoadingQuote />
                : displayData(data)
            }

            <Buttons 
                isLoading={isLoading}
                getQuotes={getRandomQuote}
                increment={() => increment(1)}
                decrement={() => decrement(1)}
            />

            <p className='mt-3'>Number of quotes to be displayed in next fetch: {counter}</p>

        </>
    )
}
