export default class Project {
    static id = 0;
    static type = 'project';

    static autoincrementId(){
        return Project.id++;
    }

    constructor(title, description, dueDate){
        Project.autoincrementId();
        this.id = this.constructor.id,
        this.type = this.constructor.type,
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.checklist = false
    }

    done(){
        this.checklist = true;
    }

}