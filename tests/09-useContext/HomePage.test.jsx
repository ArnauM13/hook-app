import React from 'react'
import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => {

    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('debe de mostrar el componente con el usuario', () => {
        
        const user = {name: 'Arnau', id: 1};

        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const smallTag = screen.getByLabelText('small');
        expect(smallTag.innerHTML).toBe('Arnau');

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
        
    });

});