const express = require ('express');

const app = express();

const path = require('path');

const router = express.Router();

/* Usando pasta estática para acessar outros arquivos */
app.use('/public', express.static('public'));

router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log(__dirname);
    console.log('index');
})

router.get('/cat-camisetas', function(req, res) {
    console.log("Categoria Camisetas");
    res.sendFile(path.join(__dirname + '/camisetas.html'))
})

router.get('/cat-chapeus', function(req, res) {
    console.log("Categoria Chapéus");
    res.sendFile(path.join(__dirname + '/chapeus.html'))
})

router.get('/cat-tenis', function(req, res) {
    console.log("Categoria Camisetas");
    res.sendFile(path.join(__dirname + '/tenis.html'))
})

app.use('/', router);
app.listen(3000);

console.log("Server está no ar");