import { createStore } from 'redux';

const preloadedState = [{
    id: 1,
    text: 'do something',
    completed: false
}]

/* const action = {
    type: 'create_todo',
    payload: {
        text: 'new todo',
        completed: false,
    }
} */

const reducer = (state, action) => {
    switch (action.type) {
        case 'create_todo':
            return [...state, {
                id: (+ new Date()),
                text: action.payload.text,
                completed: false
            }];
        case 'mark_as_completed':
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }

                return item;
            });
        default:
            return state;
    }
}

const store = createStore(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;