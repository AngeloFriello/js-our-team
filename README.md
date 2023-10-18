# Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
# Ogni membro è caratterizzato dalle seguenti informazioni:
  
  nome
  ruolo
  foto

- MILESTONE 0:
- Creare l’array di oggetti con le informazioni fornite. (come abbiamo fatto insieme in classe con l’array di studenti)

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

- MILESTONE 1:
- Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

consol.log(utenti)

- MILESTONE 2:
- Stampare le stesse informazioni su DOM sottoforma di stringhe

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

- BONUS 1:
- Trasformare la stringa foto in una immagine effettiva


- BONUS 2:
- Organizzare i singoli membri in card/schede (vedi screenshot)
