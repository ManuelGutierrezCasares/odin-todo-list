// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

// Import my classes

// Import my Date

// Import DOM Processor
import './DOMNavProcessor';
import { reloadAll } from './DOMHelpers';

import { initializeLocalStorage } from './storage';
import { cardAllListener } from './DOMCardProcessor';

import Display from './ClassDisplay';

export const display = new Display();

initializeLocalStorage(display);

if (display.projects.length === 0 && display.todos.length === 0) {
  reloadAll(display);
} else {
  cardAllListener();
}
