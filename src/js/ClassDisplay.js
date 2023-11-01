export default class Display {
    
    projects = [];
    todos = [];

    
    addProject(project){
        this.projects.push(project);
    }

    deleteProject(project){
        const indexOfProject = this.projects.findIndex(e => e.id === project.id);
        this.projects.splice(indexOfProject,1);
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    deleteTodo(todo){
        const indexOfTodo = this.todos.findIndex(e => e.id === todo.id);
        this.todos.splice(indexOfTodo,1);
    }

}