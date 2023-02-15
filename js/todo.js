import { state } from "./state.js";

const titleElem = document.querySelector('.title');
const todoListElem = document.querySelector('.todo__list');

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

const renderTodoList = (list) => {
  todoListElem.textContent = '';

  list.forEach((todo) => {
    if (todo.id !== 'default') {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo__item');

      const todoItemWrapper = document.createElement('div');
      todoItemWrapper.classList.add('todo__item-wrapper'),
        todoItem.append(todoItemWrapper);

      const todoBtn = document.createElement('button');
      todoBtn.classList.add('todo__btn');
      todoBtn.textContent = todo.title;

      const editBtn = document.createElement('button');
      todoBtn.classList.add('todo__edit');
      todoBtn.ariaLabel = 'Редактировать задачу';

      const delBtn = document.createElement('button');
      todoBtn.classList.add('todo__del');
      todoBtn.ariaLabel = 'Удалить задачу';

      todoItemWrapper.append(todoBtn, editBtn, delBtn);
      todoListElem.prepend(todoItem);
    }
  });
};

const showTodo = () => {
  titleElem.textContent = state.activeTodo.title;
  // вывести кол-во помодорок
};

export const initTodo = () => {
  const todoList = getTodo();
  state.activeTodo = todoList[0];
  showTodo();

  renderTodoList(todoList);
}
