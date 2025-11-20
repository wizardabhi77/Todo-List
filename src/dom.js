import {blackBoard} from './app';

let board = document.querySelector('.blackboard');
let projectList = document.querySelector('.project-list');
let projectButton = document.querySelector('#add-project');


const domMaker = function () {
    
    
//Two functions for Dom Manipulation to create Project and add tasks to it
    const addProject = function (e) {
        
        e.preventDefault();
        
        
        blackBoard.addProject(setInput());
    
        let form = document.querySelector('form');
        board.removeChild(form);
        
        let taskButton = document.createElement('button');
        taskButton.setAttribute('class','taskButton');
        taskButton.innerHTML = '+';
        taskButton.addEventListener('click',userInput);
        let project = document.createElement('div');
        board.appendChild(project);
        
        let listItem = document.createElement('li');
        let projectObject = blackBoard.projects[blackBoard.projects.length-1];
        let id = projectObject.uuid;
        
        project.setAttribute('class','project');
        project.innerHTML = `${projectObject.title}`;
        project.id = id;
        project.appendChild(taskButton);

        

        listItem.innerHTML = `<h2>${projectObject.title}</h2>`;
        projectList.appendChild(listItem);
    } 

    const addTask = function (e) {
        
        e.preventDefault();

        let projectElement = (e.target.parentElement).parentElement;
        let projectID = projectElement.id;
        let project = blackBoard.projects.find((project)=> project.uuid == projectID);

        project.addTask(setInput());

        let form = document.querySelector('form');
        projectElement.removeChild(form);

        let task = document.createElement('div');
        let id = (project.tasks[project.tasks.length-1]).uuid;
        task.id = id;

        let done = document.createElement('input');
        done.type = 'checkbox';
        
        let expandButton = document.createElement('button');
        expandButton.innerHTML= '>>>';
        

        let editButton = document.createElement('button');
        editButton.setAttribute('class','edit');
        editButton.innerHTML= 'EDIT';
        editButton.addEventListener('click',handleEdit);

        let delButton = document.createElement('button');
        delButton.setAttribute('class','delete');
        delButton.innerHTML = 'DELETE';
        
        let taskObject = project.tasks[project.tasks.length-1];
        
        done.addEventListener('change',(e) => {
            if(e.target.checked) {
                taskObject.setCheckBox(true);
            }
            else {
                taskObject.setCheckBox(false);
            }
        });
        
        task.setAttribute('class','task');
        setColor(task,taskObject.priority);
        task.innerHTML = ` <h2>${taskObject.title}</h2> <br> ${taskObject.dueDate}`;
        
        task.appendChild(expandButton);
        task.appendChild(editButton);
        task.appendChild(delButton);
        task.appendChild(done);
        
        expandButton.addEventListener('click',() => {
            
            let expandByID = document.getElementById('expand');
            
            if(task.contains(expandByID)){
                task.removeChild(expandByID);
            }

            else{
                let expand = document.createElement('div');
                expand.id = 'expand';
                expand.innerHTML = `<br>Description : ${taskObject.description}<br>Priority: ${taskObject.priority}<br>Notes: ${taskObject.notes}<br>Did u finish the task?: ${taskObject.checkBox}`;
                task.appendChild(expand);
            }
        });

        projectElement.appendChild(task);


    }

// Two functions take Input from the User as a 'form' Element and set it to the Objects
    const userInput = function (e) {
        
        let form = document.createElement('form');
        let currDate = new Date();
        let priorityList = document.createElement('select');
        let submit = document.createElement('button');

        submit.innerHTML='ADD';

        if(e.target.id == 'add-project'){
            submit.addEventListener('click',addProject);

            form.innerHTML = `Title:<input id="title" type="text"> <br> Description:<input id="desc" type="text"> <br> dueDate:<input id="date" min="${currDate}" type="date"><input type="hidden" id="priority">`; 
            
            form.style.color = 'white';
            form.appendChild(submit);
            board.appendChild(form);
        
        }
        else {

            submit.addEventListener('click',addTask);
            form.innerHTML = `Title:<input id="title" type="text"> <br> Description:<input id="desc" type="text"> <br> dueDate:<input id="date" min="${currDate}" type="date">`;

            priorityList.id = 'priority';
            priorityList.innerHTML = '<option value="very high">VERY HIGH</option><option value="high">HIGH</option><option value="medium">MEDIUM</option><option value="low">LOW</option>';

            form.appendChild(priorityList);
            form.appendChild(submit);

            e.target.parentElement.appendChild(form);

        }
    
        

    }


    function setInput () {
        let title = document.querySelector('#title').value;
        let desc = document.querySelector('#desc').value;
        let date = document.querySelector('#date').value;
        let priority = document.querySelector('#priority').value;
        
        let inputArray = [title,desc,date,priority];
        return inputArray;
    }

    function setColor (task,priority) {

        switch(priority) {

            case "very high" : task.style.backgroundColor = 'red';
                            break;
            case "high" : task.style.backgroundColor = 'orange';
                            break;
            case "medium" : task.style.backgroundColor = 'yellow';
                            break;
            case "low" : task.style.backgroundColor = 'green';
                            break;
        }
    }

//Button handlers for task Object
    function handleEdit(e) {
        
        //getting project and taske element and object
        let taskElement = e.target.parentElement;
        let projectElement = taskElement.parentElement;
        let projectObject = blackBoard.projects.find((project)=> project.uuid == projectElement.id);
        let taskObject = projectObject.tasks.find((task) => task.uuid == taskElement.id);
        
        let notes = document.createElement('textarea');
        notes.style.backgroundColor = 'white';
        let endButton = document.createElement('button');
        endButton.addEventListener('click', (e)=>{
            taskObject.setNotes(notes.value);
            e.target.parentElement.removeChild(notes);
            e.target.parentElement.removeChild(endButton);
        })
        taskElement.appendChild(notes);
        taskElement.appendChild(endButton);

    }

    return {addProject,addTask,userInput};
}();

projectButton.addEventListener('click', domMaker.userInput);

export default domMaker;