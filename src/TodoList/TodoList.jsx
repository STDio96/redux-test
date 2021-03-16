import React, { useState } from 'react'
import { connect } from 'react-redux';

const TodoList = ({ items, createTodo, changeStatus }) => {
    const [value, setValue] = useState('')

    const submitHandler = e => {
        e.preventDefault();

        createTodo(value);
        setValue('');
    }

    return <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button type="submit">Add</button>
        </form>
        <h2>TodoList</h2>
        <ul>
            {items.map((item) => <li key={item.id} onClick={changeStatus}>{item.text} :: ({item.completed ? '+' : '-'})</li>)}
        </ul>
    </div>
}

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = dispatch => ({
    createTodo: (text) => dispatch({
        type: 'create_todo',
        payload: {
            text
        }
    }),
    changeStatus: (t) => dispatch({
        type: 'mark_as_completed',
        payload: {
            id: 1,
        }
    })

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
