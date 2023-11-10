import { prepareTitle, prepareDueDate, prepareDescription, prepareChecklist, preparePriority, prepareNotes, prepareTodoParent, prepareDeleteBtnTodo } from './prepareCardHelpers';

export function createTodoCard (todo) {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const containerBody = document.createElement('div');

  container.classList.add('card', `todo-${todo.id}`, 'bg-success');
  container.style = 'width: 18rem;';
  containerBody.classList.add('card-body');

  containerBody.appendChild(prepareTitle(todo));
  containerBody.appendChild(prepareDueDate(todo));
  containerBody.appendChild(prepareDescription(todo));
  containerBody.appendChild(preparePriority(todo));
  containerBody.appendChild(prepareNotes(todo));
  containerBody.appendChild(prepareTodoParent(todo));
  containerBody.appendChild(prepareChecklist(todo));
  containerBody.appendChild(prepareDeleteBtnTodo(todo));

  container.appendChild(containerBody);
  content.appendChild(container);

  return content;
}
