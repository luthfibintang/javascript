import express from "express"
const app = express()
const port = 3000;
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from "morgan";

// EJS
app.set('view engine', 'ejs');

const __dirname = dirname(fileURLToPath(import.meta.url));

// Third-party middleware
app.use(morgan('dev'));


// Application level middleware
app.use((req, res, next) => {
    console.log(`Time : ${Date.now()}`)
    next();
})

//built-in middleware
app.use(express.static('public'))

app.get('/', function (req, res) {
    const contact = [
        {
            name: "Azisya Luthfi Bintang",
            email: "luthfibintang8@gmail.com",
            noHP: "085157500804"
        },
        {
            name: "Ichsan Ilyasa",
            email: "ichsantuyyasa@gmail.com",
            noHP: "080401321313"
        }
    ]

    const data = {
        name: 'Azisya Luthfi Bintang', 
        title: 'Homepage'
    }
    res.render('main', {name: 'Azisya Luthfi Bintang', 
                        title: 'Homepage',
                        contact,
                        content: 'index'});
})

app.get('/contact', function (req, res) {
    res.render('main', {
        title: "Contact Page",
        content: "contact"
    });
  })

app.get('/about', function (req, res) {
    res.render('main', {
        title: "About Page",
        content: 'about'
    });
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