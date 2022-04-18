import express from "express"
const app = express()
const port = 3000;
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
})

app.get('/contact', function (req, res) {
    // res.send('This is contact page')
    // res.json({
    //     nane: "azisya luthfi bintang",
    //     email: "luthfibintang8@gmail.com",
    //     phoneNumber: "085157500804"
    // })
    res.sendFile('./contact.html', {root: __dirname});
  })

app.get('/about', function (req, res) {
    res.sendFile('./about.html', {root: __dirname});
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category : ${req.query.category}`);
})

app.use('/', (req, res) => {
    res.status(404);
    res.send("<h1>404<h1>");
})

app.listen(port, () => {
    console.log(`Listening to port : ${port}`)
})