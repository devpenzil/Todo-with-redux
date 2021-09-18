import {combineReducers} from 'redux'
import todos from './TodoReduce'
const rootReducer = combineReducers({
    todos
})
export default rootReducer