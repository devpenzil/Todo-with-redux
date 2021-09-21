// import { configureStore } from '@reduxjs/toolkit'
// import { todolist } from './Todo/TodoSlice'
// export default configureStore({
//     reducer: {
//         todo : todolist
//     }
// })
import { configureStore  , applyMiddleware } from '@reduxjs/toolkit'
import TodoSlice from './Todo/TodoSlice'
import createSagaMiddleware from '@redux-saga/core'
import {sagaworking} from './sagas'
const middleware = applyMiddleware(createSagaMiddleware)
const sagaMiddleware = createSagaMiddleware()
export default configureStore({
    reducer: {
        todos: TodoSlice
    },
    middleware:[ sagaMiddleware]
    

    
})
sagaMiddleware.run(sagaworking)