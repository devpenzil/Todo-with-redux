import { createSlice } from "@reduxjs/toolkit"; 

export const todolist = createSlice({
    name: "todolist",
    initialState: {
        value : ["Buy a Coffe","Go to Shop","wash car"]
    },
    reducer: {
        addingtodo: (state,action) => {
            state.value = state.concat([action.payload])
        },
        deletingtodo: (state,action) => {
            state.value = state.concat([action.payload])
        }
    }
})
export const { addingtodo,  deletingtodo } = todolist.actions
export default todolist.reducer