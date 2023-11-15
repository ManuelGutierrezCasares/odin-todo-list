import { display } from './main';
import { reloadTodos, reloadProjects, reloadAll, reloadTodoForm, reloadProjectForm, navTabSelected } from './DOMHelpers';
import { cardAllListener, cardProjectListener, cardTodoListener } from './DOMCardProcessor';

const showHome = document.getElementById('nav-home');
const showProjects = document.getElementById('nav-projects');
const showTodos = document.getElementById('nav-todos');
const addProject = document.getElementById('nav-add-project');
const addTodo = document.getElementById('nav-add-todo');

showHome.addEventListener('click', e => {
  navTabSelected(e);
  reloadAll(display);
  cardAllListener();
});

showProjects.addEventListener('click', function (e) {
  navTabSelected(e);
  reloadProjects(display);
  cardProjectListener();
});

showTodos.addEventListener('click', function (e) {
  navTabSelected(e);
  reloadTodos(display);
  cardTodoListener();
});

addProject.addEventListener('click', function (e) {
  navTabSelected(e);
  reloadProjectForm(display);
});

addTodo.addEventListener('click', function (e) {
  navTabSelected(e);
  reloadTodoForm(display);
});
