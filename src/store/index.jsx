// import { createStore } from "redux";
// import rootReducer from "./reducer";
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// export default store

import { configureStore } from '@reduxjs/toolkit'
import todo from './reducer/TodoReduce'

export default configureStore({
    reducer: {
        todos: todo
    }
})