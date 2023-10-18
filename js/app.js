const utenti = [
    {
        name: 'Antonio',
        rule: 'WebDeveloper',
        photo: './img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'francesco',
        rule: 'stuccatore',
        photo: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'michele',
        rule: 'pittore',
        photo: './img/barbara-ramos-graphic-designer.jpg',
    },
    {
        name: 'gennaro',
        rule: 'muratore',
        photo: './img/scott-estrada-developer.jpg',
    },
    {
        name: 'mike',
        rule: 'ladro',
        photo: './img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'michela',
        rule: 'saltimbanco',
        photo: './img/wayne-barnett-founder-ceo.jpg',
    }
]



const gridDOMElement = document.querySelector('.grid');


for (let i = 0; i < utenti.length; i++){

    gridDOMElement.innerHTML += ` 
        <div class="card">
            <div class="photo">
                <img src="${utenti[i].photo}" alt="">
            </div>
            <p class="name">
                ${utenti[i].name}
            </p>
            <p class="rule">
                ${utenti[i].rule}
            </p>
        </div>`;

}