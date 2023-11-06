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
    if (localStorage.getItem('projects')){
        display.projects = JSON.parse(localStorage.getItem('projects'));
        console.log(display.projects[display.projects.length-1].id);
        Project.autoincrementId(display.projects[display.projects.length-1].id);
        
        //Project.initializeId = display.projects[-1].id;
    
    }
    
    if (localStorage.getItem('todos')){
        display. todos = JSON.parse(localStorage.getItem('todos'));
        Todo.autoincrementId(display.todos[display.todos.length-1].id);
        //Todo.id = display.todos[-1].id;
    }
}