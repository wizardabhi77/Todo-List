import './styles.css';
import {Project} from './app';


let project1 = new Project('first Project','test', '28 SEP');
project1.display();

project1.addTask('Task1','Big hope', '1 Sep', 'high');
project1.display();
project1.tasks[0].display();



