import { LOGIN, SET_TODO_INPUT } from "./constants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const checkLogin = (payload) => {
  type: LOGIN;
  payload;
};
