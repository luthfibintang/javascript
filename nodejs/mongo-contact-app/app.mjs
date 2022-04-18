import express from "express";
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/contact-app'), {
    useNewUrlParser: true,
    useUnifieldTopology: true,
    useCreateIndex: true
};
import {Contact} from "./model/contact.mjs"

import { body, validationResult, check } from 'express-validator';
import methodOverride from "method-override";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";
import { ObjectID } from "bson";

const app = express();
const port = 3000;

//setup Override
app.use(methodOverride('_method'));

// Setup EJS
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

// Setup flash
app.use(cookieParser('secret'))
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());

// Homepage
app.get('/', function (req, res) {
    res.render('main', {title: 'Homepage',
                        content: 'index'});
})

// Contact Page
app.get('/contact', async function (req, res) {
    const contacts = await Contact.find();
    res.render('main', {
        title: "Contact Page",
        content: "contact",
        contacts,
        msg: req.flash('msg'),
    });
  })

// Page Form Add Contact
app.get('/contact/add', function (req, res) {
    res.render('main', {
        title: "Add Contact Page",
        content: "add-contact"
    });
  })

// Process inserting data
app.post('/contact', [
    body('noHP').custom(async (value) => {
        const duplicate = await Contact.findOne({noHP: value});
        if(duplicate) {
            throw new Error ('Phone is already register')
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
        Contact.insertMany(req.body, (err, result) => {
            req.flash('msg', 'Contact successfully added!')
            res.redirect('/contact')
        });
    }
})

// Delete Contact
// app.get('/contact/delete/:id', async (req, res) => {
//     const contact = await Contact.findOne({_id: ObjectID(req.params.id)});
//     if(!contact){
//         res.status(404);
//         res.send('<h1>404 "name is not Found"</h1>');
//     } else {
//         Contact.deleteOne({_id: contact._id}).then((result) => {
//             req.flash('msg', 'Contact successfully Delete!')
//             res.redirect('/contact')
//         })
//     }
// })

app.delete('/contact', (req, res) => {
    Contact.deleteOne({_id: req.body.id}).then((result) => {
                    req.flash('msg', 'Contact successfully Delete!')
                    res.redirect('/contact')
                })

})

//Edit Form page
app.get('/contact/edit/:id', async function (req, res) {
    const contact = await Contact.findOne({_id: ObjectID(req.params.id)})    
    res.render('main', {
        title: "Edit Contact Page",
        content: "edit-contact",
        contact
    });
  })

// About Page
app.get('/about', function (req, res) {
    res.render('main', {
        title: "About Page",
        content: 'about'
    });
})

// Contact Detail
app.get('/contact/:id', async function (req, res) {
    const contact = await Contact.findOne({_id: ObjectID(req.params.id)});
    res.render('main', {
        title: "Contact Detail Page",
        content: "detail-contact",
        contact
    });
  })

app.put('/contact', [
    body('noHP').custom( async (value, { req }) => {
        const duplicate = await Contact.findOne({noHP: value});
        if(value !== req.body.oldHP && duplicate) {
            throw new Error ('Phone number is already register')
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
            content: "edit-contact",
            errors:  errors.array(),
            contact: req.body,
        });
    } else {
        Contact.updateOne({ _id: req.body.id }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                noHP: req.body.noHP
            }
        }
        ).then((result) => {
            req.flash('msg', 'Data Successfuly Updated')
            res.redirect('/contact')
        })
    }
})


app.use((req, res) => {
    res.status(404);
    res.send("<h1>404<h1>");
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})
