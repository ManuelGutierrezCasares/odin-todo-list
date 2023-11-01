export default class Todo {
    static id = 0;
    static type = 'todo';

    static autoincrementId(){
        return Todo.id++;
    }

    constructor(title, description, dueDate, priority, notes, project = null){
        Todo.autoincrementId();
        this.id = this.constructor.id,
        this.type = this.constructor.type,
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes,
        this.checklist = false,
        this.project = project
    }

    done(){
        this.checklist = true;
    }

}