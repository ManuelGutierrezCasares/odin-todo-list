import Project from "./ClassProject";
import Todo from "./ClassTodo";
import { display } from "./main";

export function updateProjectsInLocalStorage(){
    localStorage.removeItem('projects');
    return localStorage.setItem('projects', JSON.stringify(display.projects));
}

export function updateTodosInLocalStorage(){
    localStorage.removeItem('todos');
    return localStorage.setItem('todos', JSON.stringify(display.todos));
}

export function updateLocalStorage(){
    updateProjectsInLocalStorage();
    updateTodosInLocalStorage();
}

export function initializeLocalStorage(display){
    // > 2 because '[]' is the value that localStorage keeps
    if (localStorage.getItem('projects') !== null && localStorage.getItem('projects').length > 2){
        display.projects = JSON.parse(localStorage.getItem('projects'));
        addMethodsDisplayProjects();
        console.log(localStorage.getItem('projects'))
        console.log(display.projects)
        Project.autoincrementId(display.projects[display.projects.length-1].id);
        //Project.initializeId = display.projects[-1].id;
    }
    
    if (localStorage.getItem('todos') !== null && localStorage.getItem('todos').length > 2){
        display. todos = JSON.parse(localStorage.getItem('todos'));
        addMethodsDisplayTodos();
        Todo.autoincrementId(display.todos[display.todos.length-1].id);
        //Todo.id = display.todos[-1].id;
    }
}

function addMethodsDisplayProjects(){
    display.projects.forEach(e => {
        Object.setPrototypeOf(e, Project.prototype)
    })
}

function addMethodsDisplayTodos(){
    display.todos.forEach(e => {
        Object.setPrototypeOf(e, Todo.prototype)
    })
}