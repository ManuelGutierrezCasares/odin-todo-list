export default class Project {
  static id = 0;
  static type = 'project';

  static autoincrementId (number = 1) {
    Project.id = Project.id + number;
    return Project.id;
  }

  constructor (title, description, dueDate) {
    Project.autoincrementId();
    this.id = this.constructor.id,
    this.type = this.constructor.type,
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.checklist = false;
  }

  done () {
    this.checklist ? this.checklist = false : this.checklist = true;
  }
}
