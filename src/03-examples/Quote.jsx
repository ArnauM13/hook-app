// @ts-nocheck
import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({author, quote}) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => { // podem fer servir també useEffect en funció del quote
        const {height, width} = pRef.current.getBoundingClientRect()
        setBoxSize({height, width})
    }, [])

    return (
        <blockquote
            className='blockquote text-right'
            style={{display: 'flex'}}>
                <p ref={pRef} className='mb-1'>{quote}</p>
                <footer className='blockquote-footer mt-1'>{author}</footer>
        </blockquote>
    ) 
}
