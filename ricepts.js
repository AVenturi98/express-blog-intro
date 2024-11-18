/*

Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”

Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.

Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

Testare su postman

*/

const ricepts = [
    {
        title: 'Ciambellone',
        content: '',
        img: 'ciambellone.jpeg',
        tags: ['', '', '']
    },
    {
        title: 'Cracker barbabietola',
        content: '',
        img: 'cracker_barbabietola.jpeg',
        tags: ['', '', '']
    },
    {
        title: 'Pane fritto dolce',
        content: '',
        img: 'pane_fritto_dolce.jpeg',
        tags: ['', '', '']
    },
    {
        title: 'Pasta barbietola',
        content: '',
        img: 'pasta_barbabietola.jpeg',
        tags: ['', '', '']
    },
    {
        title: 'Torta paesana',
        content: '',
        img: 'torta_paesana.jpeg',
        tags: ['', '', '']
    }
]

module.exports = ricepts