import { prepareTitle, prepareDueDate, prepareDescription, prepareChecklist } from './prepareCardHelpers';

export function createProjectCard (project) {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const containerBody = document.createElement('div');

  container.classList.add('card', `project-${project.id}`);
  container.style = 'width: 18rem;';
  containerBody.classList.add('card-body');

  containerBody.appendChild(prepareTitle(project));
  containerBody.appendChild(prepareDueDate(project));
  containerBody.appendChild(prepareDescription(project));
  containerBody.appendChild(prepareChecklist(project));

  container.appendChild(containerBody);
  content.appendChild(container);

  return content;
}
