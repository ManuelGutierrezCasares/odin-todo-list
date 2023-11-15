import { prepareFormContainer, prepareFormH3, prepareFormTitle, prepareFormDueDate, prepareFormDescription, prepareFormNote, prepareFormPriority, prepareFormTodoParent, prepareFormButton } from './prepareFormHelpers';

export function createTodoForm () {
  const content = document.getElementById('content');

  const form = prepareFormContainer();
  const h3 = prepareFormH3('Todo');
  const title = prepareFormTitle();
  const dueDate = prepareFormDueDate();
  const description = prepareFormDescription();
  const priority = prepareFormPriority();
  const notes = prepareFormNote();
  const todoParent = prepareFormTodoParent();
  const btn = prepareFormButton();

  form.appendChild(h3);
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(notes);
  form.appendChild(todoParent);
  form.appendChild(btn);

  content.appendChild(form);

  return content;
}
