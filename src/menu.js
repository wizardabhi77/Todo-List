import salad from './Assets/salad.jpg';
import leaves from './Assets/leaves.jpg';

const menuLoad = function () {
    
    const content = document.querySelector('#content');
    let heading = document.createElement('h1');
    let item1 = document.createElement('div');
    let item2 = document.createElement('div');
    let item1Name = document.createElement('h2');
    let item2Name = document.createElement('h2');
    let item1img = document.createElement('img');
    let item2img = document.createElement('img');

    heading.innerHTML = 'Thamalapaku Restaurant (MENU)';
    
    item1Name.innerHTML = 'SPECIAL SALAD WITH BATAL LEAVES';
    item1img.src = salad;
    item1.appendChild(item1Name);
    item1.appendChild(item1img);
    
    item2Name.innerHTML = 'Just Batal Leaves - Nothing Else';
    item2img.src = leaves;
    item2.appendChild(item2Name);
    item2.appendChild(item2img);

    content.appendChild(heading);
    content.appendChild(item1);
    content.appendChild(item2);
}

export default menuLoad;