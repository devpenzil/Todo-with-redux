
// const todos = (state = [] , action) => {
//     switch (action.type) {
//         case "ADD_TODO":{
//           return state.concat([action.payload])
//         }
//         case "DELETE_TODO" : {
//           return state = state.slice(action.payload)
//         }
//         default:
//             return state
//     }
// }
// export default todos

import { createSlice } from "@reduxjs/toolkit"

export const todos = createSlice({
  name: "todo",
  initialvalue: {
      value : ["gh"]
  },
  reducer: {
      add_todo: (state,action) => {
          state = state.concat([action.payload])
      },
      delete_todo: (state,action) => {
          state = state.concat([action.payload])
      }
  }
})
export const {addtodo} = todos.add_todo.action
export const delettodo = delete_todo.action  
export default todos.reducer

