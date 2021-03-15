import store from './store.js'

console.log('1', store.getState())

store.dispatch({
    type: 'create_todo',
    payload: {
        text: 'do something else'
    }
})

console.log('2', store.getState())

store.dispatch({
    type: 'mark_as_completed',
    payload: {
        id: 1,
    }
})

console.log('3', store.getState())