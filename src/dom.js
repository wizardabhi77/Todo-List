
import {blackBoard} from './app';

let board = document.querySelector('.blackboard');
let projectList = document.querySelector('.project-list');
let projectButton = document.querySelector('#add-project');


const domMaker = function () {
    
    let taskButton = document.createElement('button');

    const addProject = function () {
        
        blackBoard.addProject('test','test','test');

        let project = document.createElement('div');
        let listItem = document.createElement('li');
        let projectObject = blackBoard.projects[blackBoard.projects.length-1];
        let id = projectObject.uuid;
        
        
        project.innerHTML = `${projectObject.title}`;
        project.id = id;
        project.appendChild(taskButton);

        board.appendChild(project);

        listItem.innerHTML = `<h2>${projectObject.title}</h2>`;
        projectList.appendChild(listItem);
    } 

    const addTask = function (e) {
        console.log(e.target.parentElement);
        let projectID = e.target.parentElement.id;
        let project = blackBoard.projects.find((project)=> project.uuid == projectID);
        project.addTask('test','test','test','test');

        let task = document.createElement('div');
        let editButton = document.createElement('button');
        let delButton = document.createElement('button');
        let taskObject = project.tasks[project.tasks.length-1];
        

        task.innerHTML = `${taskObject.title}<br>  ${taskObject.date}`;
        task.appendChild(editButton);
        task.appendChild(delButton);
        
        e.target.parentElement.appendChild(task);


    }

    taskButton.addEventListener('click',addTask);

    return {addProject,addTask};
}();

projectButton.addEventListener('click', domMaker.addProject);

export default domMaker;