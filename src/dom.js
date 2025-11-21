import {blackBoard} from './app';

let board = document.querySelector('.blackboard');
let projectList = document.querySelector('.project-list');
let projectButton = document.querySelector('#add-project');


const domMaker = function () {
    
    
    const domInit = function () {
       let projectArray = JSON.parse(localStorage.getItem("projects"));
        
        console.log(projectArray);
       projectArray.forEach((project) => {

            //addProject Redundant
            let inputArray = [project.title, project.description, project.dueDate];
            blackBoard.addProject(inputArray);

            let projectObject = blackBoard.projects[blackBoard.projects.length-1];

            let taskButton = document.createElement('button');
            taskButton.setAttribute('class','taskButton');
            taskButton.innerHTML = '+';
            taskButton.addEventListener('click',userInput);
            let projectElement = document.createElement('div');
            board.appendChild(projectElement);

            let deleteProject = document.createElement('button');
            deleteProject.id = 'del-project';
            deleteProject.innerHTML = 'X';
            deleteProject.addEventListener('click',handleDelete);

            let listItem = document.createElement('li');
            
            let id = projectObject.uuid;
            projectElement.setAttribute('class','project');
            projectElement.innerHTML = `${projectObject.title}`;
            projectElement.id = id;
            projectElement.appendChild(taskButton);

            projectElement.appendChild(deleteProject);

            listItem.innerHTML = `<h2>${projectObject.title}</h2>`;
            projectList.appendChild(listItem);




            //addTask Redundant
            project.tasks.forEach((task)=>{
                
                let inputArray = [task.title,task.description,task.dueDate,task.priority];
                projectObject.addTask(inputArray);

                let taskElement = document.createElement('div');
                
                let done = document.createElement('input');
                done.type = 'checkbox';
                
                let expandButton = document.createElement('button');
                expandButton.innerHTML= '>>>';
                expandButton.setAttribute('class','expand');

                let editButton = document.createElement('button');
                editButton.setAttribute('class','edit');
                editButton.innerHTML= 'EDIT';
                editButton.addEventListener('click',handleEdit);

                let delButton = document.createElement('button');
                delButton.setAttribute('class','delete');
                delButton.innerHTML = 'DELETE';
                delButton.addEventListener('click',handleDelete);

                done.addEventListener('change',(e) => {
                    if(e.target.checked) {
                        task.setCheckBox(true);
                    }
                    else {
                        task.setCheckBox(false);
                    }
                });
                
                taskElement.setAttribute('class','task');
                setColor(taskElement,task.priority);
                taskElement.innerHTML = ` <h2>${task.title}</h2> <br> ${task.dueDate}`;
                
                taskElement.appendChild(expandButton);
                taskElement.appendChild(editButton);
                taskElement.appendChild(delButton);
                taskElement.appendChild(done);

                expandButton.addEventListener('click',() => {
            
                    let expandByID = document.getElementById('expand');
                    
                    if(taskElement.contains(expandByID)){
                        taskElement.removeChild(expandByID);
                    }

                    else{
                        let expand = document.createElement('div');
                        expand.id = 'expand';
                        expand.innerHTML = `<br>Description : ${task.description}<br>Priority: ${task.priority}<br>Notes: ${task.notes}<br>Did u finish the task?: ${task.checkBox}`;
                        taskElement.appendChild(expand);
                    }
                });

                projectElement.appendChild(taskElement);
                
            })
        })
    } 


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

        let deleteProject = document.createElement('button');
        deleteProject.id = 'del-project';
        deleteProject.innerHTML = 'X';
        deleteProject.addEventListener('click',handleDelete);
        
        let listItem = document.createElement('li');
        let projectObject = blackBoard.projects[blackBoard.projects.length-1];
        let id = projectObject.uuid;
        
        project.setAttribute('class','project');
        project.innerHTML = `${projectObject.title}`;
        project.id = id;
        project.appendChild(taskButton);
        project.appendChild(deleteProject);
        

        listItem.innerHTML = `<h2>${projectObject.title}</h2>`;
        projectList.appendChild(listItem);

        
    } 

    const addTask = function (e) {
        
        e.preventDefault();

        let projectElement = (e.target.parentElement).parentElement;
        let projectID = projectElement.id;
        console.log(blackBoard.projects[0]);
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
        expandButton.setAttribute('class','expand');

        let editButton = document.createElement('button');
        editButton.setAttribute('class','edit');
        editButton.innerHTML= 'EDIT';
        editButton.addEventListener('click',handleEdit);

        let delButton = document.createElement('button');
        delButton.setAttribute('class','delete');
        delButton.innerHTML = 'DELETE';
        delButton.addEventListener('click',handleDelete);
        
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
        
        if(e.target.parentElement.contains(document.getElementById('notes'))){
            return null;
        }

        else{

        
            //getting project and taske element and object
            let taskElement = e.target.parentElement;
            let projectElement = taskElement.parentElement;
            let projectObject = blackBoard.projects.find((project)=> project.uuid == projectElement.id);
            let taskObject = projectObject.tasks.find((task) => task.uuid == taskElement.id);
            
            let notes = document.createElement('textarea');
            notes.id = 'notes';
            notes.style.backgroundColor = 'white';
            let endButton = document.createElement('button');
            endButton.innerHTML = 'END';
            endButton.addEventListener('click', (e)=>{
                taskObject.setNotes(notes.value);
                e.target.parentElement.removeChild(notes);
                e.target.parentElement.removeChild(endButton);
            })
            taskElement.appendChild(notes);
            taskElement.appendChild(endButton);
        }
        
    }

    function handleDelete(e) {

        if(e.target.id == 'del-project'){
            let projectElement = e.target.parentElement;
            let projectObject = blackBoard.projects.find((project)=> project.uuid == projectElement.id);
            

            blackBoard.deleteProject(projectObject);
            board.removeChild(projectElement);
            
        }
        else{
            //getting project and task element and object
            let taskElement = e.target.parentElement;
            let projectElement = taskElement.parentElement;
            let projectObject = blackBoard.projects.find((project)=> project.uuid == projectElement.id);
            let taskObject = projectObject.tasks.find((task) => task.uuid == taskElement.id);

            projectObject.deleteTask(taskObject);
            projectElement.removeChild(taskElement); 

        }
    }

    return {addProject,addTask,userInput,domInit};
}();

projectButton.addEventListener('click', domMaker.userInput);


export default domMaker;