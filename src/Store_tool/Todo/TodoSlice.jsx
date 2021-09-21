import { createSlice } from "@reduxjs/toolkit"; 

export const todolist = createSlice({
    name: "todolist",
    initialState: {
        value : ["Buy a Coffe","Go to Shop","wash car"]
    },
    reducers: {
        addingtodo: (state,action) => {
            // console.log(action.payload);
            state.value = state.value.concat([action.payload])
        },
        deletingtodo: (state,action) => {
            state.value = state.value.concat([action.payload])
        }
    }
})
export const { addingtodo,  deletingtodo } = todolist.actions
export default todolist.reducer