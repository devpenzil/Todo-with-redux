export const addtodo = (todo) => {
   return{
    type:"ADD_TODO",
    payload: todo
   }
}

export const deletetodo = (id) => {
   return{
      type : "DELETE_TODO",
      payload : id
   }

}