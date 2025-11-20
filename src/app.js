
export class Project {
    constructor(title, description, dueDate) {
        this.tasks = [];
        this.uuid = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checkBox = false;
    }
    
    addTask(inputArray) {

        let [title,description,dueDate,priority] = inputArray;
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
        this.uuid = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = "";
        this.checkBox = false;
    }

    setCheckBox(check){
        this.checkBox = check;
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



export const blackBoard = function () {
    let defaultProject = new Project('Default', 'Default','00/00/00');
    let projects = [defaultProject];
    
    const addProject = function (inputArray) {
        
        let [title,description,dueDate] = inputArray.slice(0,3);
        let project = new Project(title, description, dueDate);
        projects.push(project);
        
    }

    return {defaultProject, projects, addProject};
}();


