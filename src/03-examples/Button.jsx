import React from 'react'

export const Button = ({isLoading, onClick, text}) => {
    return (
        <button
            disabled={isLoading}
            onClick={onClick}
            className='btn btn-primary mt-2'>
                {text}
        </button>   
    )
}
