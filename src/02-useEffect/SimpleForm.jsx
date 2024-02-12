import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Goli',
        email: 'goligonzalez@google.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState(({...formState, [name]:value}))
    }

    useEffect(() => {

    }, [username])
  
    useEffect(() => {

    }, [email])

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className='form-control mt-2'
                placeholder='shordana@gmail.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'Goli') && <Message/>
            }
        </>
    )
}
