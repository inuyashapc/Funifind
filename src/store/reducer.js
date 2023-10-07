import { LOGIN, SET_TODO_INPUT } from "./constants";
const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        todoInput: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
