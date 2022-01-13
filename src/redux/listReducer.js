const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addListItem":
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer;
