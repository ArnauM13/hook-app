import React from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({onNewTodo}) => {

    // @ts-ignore
    const {description, onInputChange, onResetForm} = useForm({
        description: '' // passem com a form unicament el description i el recuperem
    });

    const onFormSubmit = (event) => { // creem una funció que al fer el submit s'executi
        event.preventDefault(); // fem que no s'envii per default

        if (!description.length) return; // si no tenim re no fem re
        const newTodo = { // creem un nou todo
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo); // executem funcio que ve del parent
        onResetForm(); // resetejem l'input del form
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder='¿Que hay que hacer?'
                className='form-control'
                name='description' // afegim el name i el value per poderlos processar
                value={description}
                onChange={onInputChange} // quan faci canvi s'executarà la funció que gestiona des del hook
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}
