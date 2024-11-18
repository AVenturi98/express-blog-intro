console.log('Blog');

const express = require('express');
const ricepts = require('./ricepts')
const app = express();
const port = 3000;

app.use(express.static('pubblic'))

app.get('/', (req, res) => {
    res.send(`Server del mio blog`)
});

app.get('/bacheca', (req, res) => {
    res.json({
        posts: ricepts,
        count: ricepts.length
    })
});


app.listen (port, () => {
    console.log(`Prova express su porta ${port}`)
})

