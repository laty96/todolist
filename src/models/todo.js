export default class Todo {
    constructor(todo) {
        this.id = todo.id;
        this.name = todo.name;
        this.startDate = todo.startDate;
        this.completeDate = todo.completedDate;
        this.isCompleted = todo.isCompleted;
    }
}

