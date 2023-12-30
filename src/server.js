const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:1000/your-db-name', {
})

app.post('/api/notes', async(res,req) => {
    try {
        const newNote = await 
    }
})