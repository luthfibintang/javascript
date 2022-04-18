import express from "express"
const app = express()
const port = 3000;
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {listContact, findContact, addContact, checkDuplicate} from './utils/contacts.mjs';
import { body, validationResult, check } from 'express-validator';
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.render('main', {title: 'Homepage',
                        content: 'index'});
})

// Halaman list contact
app.get('/contact', function (req, res) {
    const contacts = listContact();
    res.render('main', {
        title: "Contact Page",
        content: "contact",
        contacts,
        msg: req.flash('msg')
    });
  })

// Halaman from tambah contact
app.get('/contact/add', function (req, res) {
    res.render('main', {
        title: "Add Contact Page",
        content: "add-contact"
    });
  })

// Proses insert data contact
app.post('/contact', [
    body('name').custom((value) => {
        const duplicate = checkDuplicate(value);
        if(duplicate) {
            throw new Error ('Name is already register')
        }
        return true;
    }),
    check('email', 'Email is inValid').isEmail(),
    check('noHP', 'Phone Number is inValid').isMobilePhone('id-ID')
], function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.render('main', {
            title: "Add Contact Page",
            content: "add-contact",
            errors:  errors.array() 
        });
    } else {
        addContact(req.body);
        req.flash('msg', 'Contact successfully added!')
        res.redirect('/contact')
    }
})

// Halaman detail contact
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