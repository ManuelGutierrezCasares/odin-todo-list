
import { display } from './main';
import { reloadTodos, reloadProjects, reloadAll, reloadTodoForm, reloadProjectForm } from './DOMHelpers';


const showHome = document.getElementById('nav-home')
const showProjects = document.getElementById('nav-projects');
const showTodos = document.getElementById('nav-todos');
const addProject = document.getElementById('nav-add-project');
const addTodo = document.getElementById('nav-add-todo');


showHome.addEventListener('click', e => reloadAll(display))

showProjects.addEventListener('click', function (e){
    return reloadProjects(display);
})

showTodos.addEventListener('click', function (e){
    return reloadTodos(display);
})

addProject.addEventListener('click', function (e){
    return reloadProjectForm(display);
})

addTodo.addEventListener('click', function (e){
    return reloadTodoForm(display);
})

