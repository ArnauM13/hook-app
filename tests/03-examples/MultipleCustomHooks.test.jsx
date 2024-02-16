// @ts-nocheck
import React from 'react'
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks';

// hem de fer un mock del hook per poder fer proves
jest.mock( '../../../src/hooks/useFetch');
jest.mock( '../../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Get Random Quotes'}) // si posem un nom aleatori, rollo "A", ens dirà (per consola) els noms dels components
        expect(nextButton.disabled).toBeTruthy();

    });

    test('debe de llamar a la función de incrementar', () => {
        
        useFetch.mockReturnValue({
            data: [{author: 'Arnau', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Get Random Quotes'}) // si posem un nom aleatori, rollo "A", ens dirà (per consola) els noms dels components
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });

})