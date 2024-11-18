console.log('Blog');

const express = require('express');
const app = express()
const port = 3000;

app.listen (port, () => {
    console.log(`Prova con express in porta ${port}`)
})

