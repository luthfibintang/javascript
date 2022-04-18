import express from "express"
const app = express()
const port = 3000;
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {listContact, findContact} from './utils/contacts.mjs';

// EJS
app.set('view engine', 'ejs');

const __dirname = dirname(fileURLToPath(import.meta.url));

//built-in middleware
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('main', {title: 'Homepage',
                        contact,
                        content: 'index'});
})

app.get('/contact', function (req, res) {
    const contacts = listContact();
    res.render('main', {
        title: "Contact Page",
        content: "contact",
        contacts
    });
  })

app.get('/contact/:name', function (req, res) {
    const contact = findContact(req.params.name);
    res.render('main', {
        title: "Contact Detail Page",
        content: "detail-contact",
        contact
    });
  })

app.get('/about', function (req, res) {
    res.render('main', {
        title: "About Page",
        content: 'about'
    });
})

app.use('/', (req, res) => {
    res.status(404);
    res.send("<h1>404<h1>");
})

app.listen(port)