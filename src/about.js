const aboutLoad = function () {
    
    let content = document.querySelector('#content');
    let heading = document.createElement('h1');
    let contact = document.createElement('div');
    let para = document.createElement('p');

    heading.innerHTML = 'ABOUT ...Thamalapaku Restaurant';
    para.innerHTML = 'We have extensive Menu of South Indian Cuisine. Every item you will contain the holy leaves - THAMALAPAKU.We make leaves and you eat it. Thats about it. Nothing more Nothing Less';
    
    contact.innerHTML = '<h2>PHONE:</h2>0000000000<br> <h2>EMAIL:</h2> HappyMeal@youy.com';
    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(contact);
}

export default aboutLoad;