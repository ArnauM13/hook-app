import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en componente <LoginPage />', () => {

    const user = {
        name: 'Arnau',
        id: 1,
        email: 'email'
    }

    test('debe de mostrar información sin user', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider >
        );

        expect(screen.getByLabelText('pre').innerHTML).toBe('null');

    });

    test('debe de mostrar información con user', () => {
        

        render(
            <UserContext.Provider value={{user}}>
                <LoginPage />
            </UserContext.Provider>
        )

        expect(screen.getByLabelText('pre').innerHTML).toEqual(JSON.stringify(user, null, 3));

    });

    test('debe de llamar a setUser en clicar el botón', () => {
        
        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{user, setUser}}>
                <LoginPage />
            </UserContext.Provider >
        );

        const setUserButton = screen.getByLabelText('set-user-button');
        fireEvent.click(setUserButton);

        expect(setUser).toHaveBeenCalledWith(user);

    });

})