export function successProject (display) {
  const alerts = document.getElementById('alerts');
  const div = document.createElement('div');
  const title = display.projects[display.projects.length - 1].title;

  div.role = 'alert';
  div.classList.add('alert', 'alert-success');
  div.innerText = `The "${title}" Project has been created.`;

  alerts.appendChild(div);
  return alerts;
}

export function successTodo (display) {
  const alerts = document.getElementById('alerts');
  const div = document.createElement('div');

  const title = display.todos[display.todos.length - 1].title;

  div.role = 'alert';
  div.classList.add('alert', 'alert-success');
  div.innerText = `The "${title}" Todo has been created.`;

  alerts.appendChild(div);
  return alerts;
}
