import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>Login Page</h1>
            <hr />

            <pre aria-label='pre'>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button 
                aria-label='set-user-button'
                className='btn btn-primary'
                onClick={() => setUser({id: user?.id, name: user?.name, email: user?.email})}>
                    Set User
            </button>
        </>
    )
}
