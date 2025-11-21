
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
        blackBoard.populateStorage();
    }

    deleteTask(delTask) {
        
       let changeArr = this.tasks.filter(task => task !== delTask);
       this.tasks = changeArr;
        blackBoard.populateStorage();
    }
    
    setCheckBox(){
        this.checkBox = true;
        blackBoard.populateStorage();
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
        blackBoard.populateStorage();
    }

    setNotes(text){
        this.notes = text;
        blackBoard.populateStorage();
    }
    
    delete(){

    }

    display() {
        console.log(`Task:${this.title} ${this.description} Date:${this.dueDate} Priority: ${this.priority} Done Status:${this.checkBox} Notes:${this.notes}`);
    }
}



export const blackBoard = function () {
    
    let projects = [];
    
    const addProject = function (inputArray) {
        
        let [title,description,dueDate] = inputArray.slice(0,3);
        let project = new Project(title, description, dueDate);
        projects.push(project);
        populateStorage();
    }

    const deleteProject = function (delProject) {
        
        let changeArr = this.projects.filter(project => project !== delProject);
        projects = changeArr;
        
        populateStorage();
        
    }

    const populateStorage = function (){
        
        localStorage.setItem("projects",JSON.stringify(projects));
    }

    return { projects, addProject, deleteProject, populateStorage};
}();


