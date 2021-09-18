
const todos = (state = [] , action) => {
    switch (action.type) {
        case "ADD_TODO":{
          return state.concat([action.payload])
        }
        case "DELETE_TODO" : {
          return state = state.slice(action.payload)
        }
        default:
            return state
    }
}
export default todos