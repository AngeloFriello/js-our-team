const utenti = [
    {
        nome: 'Antonio',
        ruolo: 'WebDeveloper',
        foto: './img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'francesco',
        ruolo: 'stuccatore',
        foto: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'michele',
        ruolo: 'pittore',
        foto: './img/barbara-ramos-graphic-designer.jpg',
    },
    {
        nome: 'gennaro',
        ruolo: 'muratore',
        foto: './img/scott-estrada-developer.jpg',
    },
    {
        nome: 'mike',
        ruolo: 'ladro',
        foto: './img/walter-gordon-office-manager.jpg',
    },
    {
        nome: 'michela',
        ruolo: 'saltimbanco',
        foto: './img/wayne-barnett-founder-ceo.jpg',
    }
]



const gridDOMElement = document.querySelector('.grid');


for (let i = 0; i < utenti.length; i++){
    n = i + 1;

    gridDOMElement.innerHTML += ` 
        <div class="card">
            <div class="foto">
                <img src="${utenti[i].foto}" alt="">
            </div>
            <p class="nome">
                ${utenti[i].nome}
            </p>
            <p class="ruolo">
                ${utenti[i].ruolo}
            </p>
        </div>`;

}