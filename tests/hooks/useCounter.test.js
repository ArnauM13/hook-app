import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks'

describe('Pruebas en el useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        
        const {result} = renderHook(() => useCounter());
        const {counter, increment, decrement, reset} = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('debe de generar el counter con el valor de 100', () => {
        
        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);
        
    })

    test('debe de incrementar el contador', () => {
        
        const {result} = renderHook(() => useCounter());
        const {increment} = result.current;

        act(()=>{ // modificacions d'estat s'envolten dins un act
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(13); // si agafessim el counter del result.current inicial, no tindriem el valor actualitzat

    });

    test('debe de decrementar el contador', () => {
        
        const {result} = renderHook(() => useCounter());
        const {decrement} = result.current;

        act(()=>{
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(7);

    });

    test('debe de resetear el contador', () => {
        
        const {result} = renderHook(() => useCounter());
        const {reset, decrement} = result.current;

        act(()=>{
            decrement();
            reset();
        });

        expect(result.current.counter).toBe(10);

    });
});