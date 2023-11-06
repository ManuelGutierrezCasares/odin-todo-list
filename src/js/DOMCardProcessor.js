import { reloadProjects, reloadTodos, reloadAll } from './DOMHelpers';
import { display } from './main';

export function cardAllListener(){
    const cardLabel = document.getElementsByClassName('form-check-label');
    const cardInput = document.getElementsByClassName('form-check-input');
    //deleteTask
    const cardDeletion = document.getElementsByClassName('btn-danger');
    reloadAll(display);

    // Labels
    Array.from(cardLabel).forEach(e => {
        e.addEventListener('click', function (e){
            const type = getType(e.target.htmlFor);
            const id = getId(e.target.htmlFor);

            //change checklist
            if (type === 'project'){
                const projectIndex = getDisplayProjectIndex(id);
                display.projects[projectIndex].done();
            }
            else{
                const todoIndex = getDisplayTodoIndex(id);
                display.todos[todoIndex].done();
            }
            cardAllListener();
        })
    })

    // Input
    Array.from(cardInput).forEach(e => {
        e.addEventListener('click', function (e){
            const type = getType(e.target.id);
            const id = getId(e.target.id);

            //change checklist
            if (type === 'project'){
                const projectIndex = getDisplayProjectIndex(id);
                console.log(`Project index: ${projectIndex}`);
                console.log(`display.projects[projectIndex]: ${display.projects[projectIndex].done}`);
                console.log(`display.projects[2].done: ${display.projects[2].done}`);
                console.log(`display.projects: ${display.projects}`);
                console.log(`display: ${display}`);
                display.projects[projectIndex].done();
            }
            else{
                const todoIndex = getDisplayTodoIndex(id);
                display.todos[todoIndex].done();
            }
            cardAllListener();
        })   
    })

    //delete todo
    Array.from(cardDeletion).forEach(e => {
        e.addEventListener('click', function (e){
            const id = getId(e.target.id);
            display.deleteTodo(id);

            cardAllListener();
        })
    })
}

export function cardProjectListener(){
    const cardLabel = document.getElementsByClassName('form-check-label');
    const cardInput = document.getElementsByClassName('form-check-input');
    reloadProjects(display);

    Array.from(cardLabel).forEach(e => {
        e.addEventListener('click', function (e){
            const id = getId(e.target.htmlFor);
            //change checklist
            const projectIndex = getDisplayProjectIndex(id);
            display.projects[projectIndex].done();
            cardProjectListener();
        })
    })

    Array.from(cardInput).forEach(e => {
        e.addEventListener('click', function (e){
            const id = getId(e.target.id);
            //change checklist
            const projectIndex = getDisplayProjectIndex(id);
            display.projects[projectIndex].done();
            cardProjectListener();
        })   
    })
}

export function cardTodoListener(){
    const cardLabel = document.getElementsByClassName('form-check-label');
    const cardInput = document.getElementsByClassName('form-check-input');
    //deleteTask
    const cardDeletion = document.getElementsByClassName('btn-danger');
    reloadTodos(display);

    Array.from(cardLabel).forEach(e => {
        e.addEventListener('click', function (e){
            const id = getId(e.target.htmlFor);
            //change checklist
            const todoIndex = getDisplayTodoIndex(id);
            display.todos[todoIndex].done();
            cardTodoListener();
        })
    })

    Array.from(cardInput).forEach(e => {
        e.addEventListener('click', function (e){
            const id = getId(e.target.id);
            //change checklist
            const todoIndex = getDisplayTodoIndex(id);
            display.todos[todoIndex].done();
            cardTodoListener();
        })   
    })

    //delete todo
    Array.from(cardDeletion).forEach(e => {
        e.addEventListener('click', function (e){
            const id = getId(e.target.id);
            display.deleteTodo(id);

            cardTodoListener();
        })
    })
}

function getDisplayProjectIndex(projectId){
    let i;
    display.projects.forEach(function (value, index) {
        if (value.id.toString() == projectId){
            i = index;
        }
    })
    return i;
}

function getDisplayTodoIndex(todoId){
    let i;
    display.todos.forEach(function (value, index) {
        if (value.id.toString() == todoId){
            i = index;
        }
    })
    return i;
}

function getType(eTargetType){
    const type = eTargetType.split('-');
    return type[1];
}

function getId(eTargetId){
    const id = eTargetId.split('-');
    return Number(id[2]);
}