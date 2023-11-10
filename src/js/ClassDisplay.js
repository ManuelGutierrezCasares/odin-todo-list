export default class Display {
  projects = [];
  todos = [];

  addProject (project) {
    this.projects.push(project);
  }

  deleteProject (id) {
    const indexOfProject = this.projects.findIndex(e => e.id === id);
    this.projects.splice(indexOfProject, 1);
  }

  addTodo (todo) {
    this.todos.push(todo);
  }

  deleteTodo (id) {
    const indexOfTodo = this.todos.findIndex(e => e.id === id);
    this.todos.splice(indexOfTodo, 1);
  }
}
