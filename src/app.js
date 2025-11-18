
export class Project {
    constructor(title, description, dueDate) {
        this.tasks = [];
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checkBox = false;
    }
    
    addTask(title, description, dueDate, priority) {
        let task = new Task(title, description, dueDate, priority);
        this.tasks.push(task);
    }
    
    setCheckBox(){
        this.checkBox = true;
    }


    display() {
        console.log(`Project:${this.title} ${this.description} Date:${this.dueDate} Done Status:${this.checkBox} Task List:${this.tasks}`);
    }
}

export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = "";
        this.checkBox = false;
    }

    setCheckBox(){
        this.checkBox = true;
    }

    setNotes(text){
        this.notes = text;
    }
    
    delete(){

    }

    display() {
        console.log(`Task:${this.title} ${this.description} Date:${this.dueDate} Priority: ${this.priority} Done Status:${this.checkBox} Notes:${this.notes}`);
    }
}



