const utenti = [
    {
        nome: 'Antonio',
        ruolo: 'WebDeveloper',
        foto: './img/agela-caroll-chief-editor.jpg',
    },
    {
        nome: 'francesco',
        ruolo: 'stuccatore',
        foto: './img/agela-caroll-chief-editor.jpg',
    },
    {
        nome: 'michele',
        ruolo: 'pittore',
        foto: './img/agela-caroll-chief-editor.jpg',
    },
    {
        nome: 'gennaro',
        ruolo: 'muratore',
        foto: './img/agela-caroll-chief-editor.jpg',
    }
]



const gridDOMElement = document.querySelector('.grid');


for (let i = 0; i < utenti.length; i++){
    n = i + 1;

    gridDOMElement.innerHTML += ` 
        <div class="card">
            <div class="foto">
                ${utenti[i].foto}
            </div>
            <p class="nome">
                ${utenti[i].nome}
            </p>
            <p class="ruolo">
                ${utenti[i].ruolo}
            </p>
        </div>`;

}