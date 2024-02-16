import React from 'react'
import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp />', () => {
    test('debe de mostrar el Home Page', () => {
        
        // Hem de fer servir el MemoryRouter com a alternativa al BrowserRouter, per poder fer servir els Link i Route sense que es carregui una pàgina real.
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('Home Page')).toBeTruthy();

    });

    test('debe de mostrar el Login Page', () => {
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeTruthy();

    });

});