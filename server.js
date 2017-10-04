const express = require('express');
const dirTree = require('directory-tree');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Send request to <a href="http://localhost:3000/data">http://localhost:3000/data</a></h1>')
});

app.get('/data', (req, res) => {
    res.status(200).json(dirTree('/home/baldvegeta/Desktop/hello'));
});

app.listen(4040, () => {
    console.log('Listening At Port : 4040');
});