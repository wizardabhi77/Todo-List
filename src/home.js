import batal from './Assets/Batal-leaves.jpg';

const homeLoad = function () {
    
    let content = document.querySelector('#content');
    let heading = document.createElement('h1');
    let image = document.createElement('img');
    let para = document.createElement('p');

    heading.innerHTML = 'Thamalapaku Restaurant';
    image.src = batal;
    para.innerHTML = 'We have extensive Menu of South Indian Cuisine. Every item you will contain the holy leaves - THAMALAPAKU.';
    
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(para);
}

export default homeLoad;