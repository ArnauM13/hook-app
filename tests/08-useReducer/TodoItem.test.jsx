import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el componente <TodoItem />', () => {

    const initialTodo = {
        id: 1,
        description: 'Demo Todo',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
 
    test('debe de hacer match con el snapshot', () => {

        const {container} = render(
            <TodoItem
                todo={initialTodo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el Todo pendiente de completar', () => {
        
        render(
            <TodoItem
                todo={initialTodo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('debe de mostrar el Todo completado', () => {
        
        const doneTodo = {
            ...initialTodo,
            done: true
        };

        render(
            <TodoItem
                todo={doneTodo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('el span debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render(
            <TodoItem
                todo={initialTodo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(initialTodo.id);

    });

    test('el button debe de llamar el DeleteTodo cuando se hace click', () => {
        
        render(
            <TodoItem
                todo={initialTodo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const btnElement = screen.getByLabelText('delete-button');
        fireEvent.click(btnElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(initialTodo.id);

    });

});