// import { configureStore } from '@reduxjs/toolkit'
// import { todolist } from './Todo/TodoSlice'
// export default configureStore({
//     reducer: {
//         todo : todolist
//     }
// })
import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './Todo/TodoSlice'

export default configureStore({
    reducer: {
        todos: TodoSlice
    }
})