const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addUser":
      return action.payload
    case "removeUser":
      return null
    default:
      return state
  }
}

export default reducer;
