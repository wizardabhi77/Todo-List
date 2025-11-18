
import {blackBoard,Project, Task} from './app';

let board = document.querySelector('.blackboard');
let projectList = document.querySelector('.project-list');
let projectButton = document.querySelector('#add-project');


const domMaker = function () {
    
    const addProject = function () {
        
        blackBoard.addProject('test','test','test');

        let project = document.createElement('div');
        let listItem = document.createElement('li');
        let projectObject = blackBoard.projects[blackBoard.projects.length-1];
        let title = projectObject.title;

        project.innerHTML = `${projectObject.title}`;
        project.id = title;
        board.appendChild(project);

        listItem.innerHTML = `<h2>${title}</h2>`;
        projectList.appendChild(listItem);
    } 

    return {addProject};
}();

projectButton.addEventListener('click', domMaker.addProject);

export default domMaker;