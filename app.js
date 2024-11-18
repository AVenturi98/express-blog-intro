console.log('Blog');

const express = require('express');
const ricepts = require('./ricepts')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Server del mio blog`)
});

app.listen (port, () => {
    console.log(`Prova express su porta ${port}`)
})

