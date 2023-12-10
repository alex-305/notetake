const express = require("express");
const fs = require("fs");

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('test');
})

app.get('/:id', (req, res) => {
    res.send(req.params.id + " is the id");
})

app.post('/create', (req, res) => {
    
})

app.listen(port);