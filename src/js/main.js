// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import my classes
import Project from './ClassProject';
import Todo from './ClassTodo';

// Import my Date
import { getCustomDate } from './date';

// Import DOM Processor
import './DOMNavProcessor';
import { reloadAll } from './DOMHelpers';

import { initializeLocalStorage } from './storage';
import { cardAllListener } from './DOMCardProcessor';

import Display from './ClassDisplay';

// const project1 = new Project('Título de Project', 'Esta es la decripción del project', getToday());
//const project2 = new Project('Título de 2', 'Descrp 2', getCustomDate('2022-12-31'));
// const todo1 = new Todo('Titulo de Todo1', 'Description de TOdo1', getToday(),'High','');
// const todo2 = new Todo('Titulo de Todo2', 'Description de 2', getToday(),'Low','');

// project1.checklist = true;
// console.log(project1);
//console.log(project2);
// console.log(todo1.checklist);
// todo1.done();
// console.log(todo1.checklist);

//const todo1 = new Todo();

//displayProject(project1);

export const display = new Display();
// display.addProject(project1);
//display.addProject(project2);
// display.addTodo(todo1);
// display.addTodo(todo2);
initializeLocalStorage(display);

//display.deleteProject(project1);
//display.deleteTodo(todo1)

//console.log(Project);
//console.log(display);

if (display.projects.length === 0  && display.todos.length === 0){
    reloadAll(display);
}else{
    cardAllListener();
}


