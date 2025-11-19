import {blackBoard} from './app';

let board = document.querySelector('.blackboard');
let projectList = document.querySelector('.project-list');
let projectButton = document.querySelector('#add-project');


const domMaker = function () {
    
    

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
        let editButton = document.createElement('button');
        editButton.setAttribute('class','edit');
        editButton.innerHTML= 'EDIT';

        let delButton = document.createElement('button');
        delButton.setAttribute('class','delete');
        delButton.innerHTML = 'DELETE';
        
        let taskObject = project.tasks[project.tasks.length-1];
        
        task.setAttribute('class','task');
        task.innerHTML = `${taskObject.title}<br>  ${taskObject.dueDate}`;
        task.appendChild(editButton);
        task.appendChild(delButton);
        
        projectElement.appendChild(task);


    }

    const userInput = function (e) {
        
        let form = document.createElement('form');
        let submit = document.createElement('button');
        if(e.target.id == 'add-project'){
            submit.addEventListener('click',addProject);

            form.innerHTML = 'Title:<input id="title" type="text"> <br> Description:<input id="desc" type="text"> <br> dueDate:<input id="date" type="text"><br>Priority:<input id="priority">'; 
        
        
            form.style.color = 'white';
            form.appendChild(submit);
            board.appendChild(form);
        
        }
        else {

            submit.addEventListener('click',addTask);
            form.innerHTML = 'Title:<input id="title" type="text"> <br> Description:<input id="desc" type="text"> <br> dueDate:<input id="date" type="text"><br>Priority:<input id="priority">';
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

    

    return {addProject,addTask,userInput};
}();

projectButton.addEventListener('click', domMaker.userInput);

export default domMaker;