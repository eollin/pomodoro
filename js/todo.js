import { state } from "./state.js";

const titleElem = document.querySelector('.title');

const getTodo = () => {
  const todoList = JSON.parse(localStorage.getItem('pomodoro') || '[]');

  if (!todoList.length) {
    todoList.push({
      id: 'default',
      pomodoro: 0,
      title: 'Помодоро',
    });
  }

  return todoList;
}

const showTodo = () => {
  titleElem.textContent = state.activeTodo.title;
}

export const initTodo = () => {
  const todoList = getTodo();
  state.activeTodo = todoList[0];

  showTodo();
}
