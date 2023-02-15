import React, { FC, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux'
import { TypedDispatchThunk, useTypedDispatchThunk } from '../hooks/useTypedDispatch'
import { fetchTodos, setTodoPage } from '../redux/actions/todo';
import { useActions } from '../hooks/useActions';


type TodoListProps = {

};

const TodoList: FC<TodoListProps> = () => {
    const { limit, page, todos, loading, error } = useTypedSelector(state => state.todo);
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    console.log(todos);
    return (
        <div>
            {todos.map(todo => {
                return <h1 key={todo.id} >{todo.id}. {todo.title}</h1>
            })}
            <div style={{ display: 'flex' }}>
                {pages.map(p => {
                    return <div style={{
                        cursor: 'pointer',
                        border: p === page ? '2px solid green' : '1px solid grey',
                        padding: '10px'
                    }}
                    onClick={() => setTodoPage(p)}
                    >
                        {p}
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodoList