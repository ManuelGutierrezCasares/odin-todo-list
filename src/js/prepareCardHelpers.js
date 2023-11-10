export function prepareTitle (obj) {
  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.innerText = obj.title;
  return title;
}

export function prepareDueDate (obj) {
  const dueDate = document.createElement('h6');
  dueDate.classList.add('card-subtitle', 'mb-2', 'text-body-secondary');
  dueDate.innerText = obj.dueDate;
  return dueDate;
}

export function prepareDescription (obj) {
  const description = document.createElement('p');
  description.classList.add('card-text');
  description.innerText = obj.description;
  return description;
}

export function preparePriority (obj) {
  const priority = document.createElement('p');
  priority.classList.add('card-text');
  priority.innerText = obj.priority;
  return priority;
}

export function prepareNotes (obj) {
  const notes = document.createElement('p');
  notes.classList.add('card-text');
  notes.innerText = obj.notes;
  return notes;
}

export function prepareTodoParent (obj) {
  const todoParent = document.createElement('p');
  todoParent.classList.add('card-text', 'text-info');
  todoParent.innerText = `${obj.todoParentId} - ${obj.todoParentTitle}`;
  return todoParent;
}

export function prepareChecklist (obj) {
  const checklistDiv = document.createElement('div');
  const checklistInput = document.createElement('input');
  const checklistLabel = document.createElement('label');

  checklistDiv.classList.add('form-check');

  checklistInput.classList.add('form-check-input');
  checklistInput.type = 'checkbox';
  checklistInput.id = `flexCheck-${obj.type}-${obj.id}`;
  checklistInput.checked = reviewChecklistSelected(obj);

  checklistLabel.classList.add('form-check-label');
  checklistLabel.htmlFor = `flexCheck-${obj.type}-${obj.id}`;
  checklistLabel.innerText = reviewChecklist(obj);

  checklistDiv.appendChild(checklistInput);
  checklistDiv.appendChild(checklistLabel);

  return checklistDiv;
}

export function prepareDeleteBtnTodo (obj) {
  const btn = document.createElement('button');

  btn.classList.add('btn', 'btn-danger');
  btn.type = 'button';
  btn.innerText = 'Delete';
  btn.id = `delete-todo-${obj.id}`;

  return btn;
}

function reviewChecklist (obj) {
  if (obj.checklist) {
    return 'Done';
  }
  return 'Not Done';
}

function reviewChecklistSelected (obj) {
  if (obj.checklist) {
    return true;
  }
  return false;
}
