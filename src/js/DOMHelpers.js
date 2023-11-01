import Project from './ClassProject';
import Todo from './ClassTodo'
import { createTodoCard } from './prepareCardTodos';
import { createProjectCard } from './prepareCardProjects';
import { createTodoForm } from './prepareFormTodos';
import { createProjectForm } from './prepareFormProjects';
import { getCustomDate } from './date';


export function reloadTodos(display){
    clearAll();
    display.todos.map(e => createTodoCard(e));
}

export function reloadProjects(display){
    clearAll();
    display.projects.map(e => createProjectCard(e));
}

export function reloadAll(display){
    clearAll();
    display.projects.map(e => createProjectCard(e));
    display.todos.map(e => createTodoCard(e));
}

export function reloadProjectForm(display){
    clearAll();
    createProjectForm();
    const submitForm = document.getElementById('submit');

    submitForm.addEventListener('click', function(e){
        e.preventDefault();
        sendProjectForm(display);
    }) 
}

function sendProjectForm(display){
    const form = document.getElementsByTagName('form');
        console.log(form);
        
        //FUNCIONA PERO REFACTORIZAR PORQUE ES HORRIBLE
        let values = [];
        getValues(form);
        // Project (title, description, dueDate)
        display.addProject(new Project(values[0],values[1],getCustomDate(values[2])));
        success(display.projects[display.projects.length-1].title, display.projects[display.projects.length-1].type);
        
        function getValues(array){
            Array.from(array).forEach(function(e){
                if (e.nodeName === 'INPUT'){
                    values.push(e.value);
                }
                getValues(e);
            })            
        };
}

export function reloadTodoForm(display){
    clearAll();
    createTodoForm();
    const submitForm = document.getElementById('submit');

    submitForm.addEventListener('click', function(e){
        e.preventDefault();
        sendTodoForm(display);
    })
}

function sendTodoForm(display){
    const form = document.getElementsByTagName('form');
        
        //FUNCIONA PERO REFACTORIZAR PORQUE ES HORRIBLE
        let values = [];
        getValues(form);
        // Todo(title, description, dueDate, priority, notes, project = null)
        display.addTodo(new Todo(values[0],values[1],getCustomDate(values[2]),values[3],values[4]));
        success(display.todos[display.todos.length-1].title, display.todos[display.todos.length-1].type);
        
        function getValues(array){
            Array.from(array).forEach(function(e){
                if (e.checked){
                    values.push(e.id);
                }
                else if (e.nodeName === 'INPUT' && e.type !== 'radio'){
                    values.push(e.value);
                }
                else if (e.nodeName === 'TEXTAREA'){
                    values.push(e.value);
                }
                getValues(e);
            })            
        };
}

function clearAll(){
    const content = document.getElementById('content');
    const alerts = document.getElementById('alerts');
    content.replaceChildren();
    alerts.replaceChildren();
}

function success(title, type){
    const alerts = document.getElementById('alerts');
    const div = document.createElement('div');

    div.role = 'alert';
    div.classList.add('alert', 'alert-success');
    type === 'project' ? div.innerText = `The "${title}" Project has been created.`: div.innerText = `The "${title}" Todo has been created.`;

    alerts.appendChild(div);
    return alerts;
}

