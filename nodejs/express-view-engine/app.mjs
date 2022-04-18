import express from "express"
const app = express()
const port = 3000;
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from "express-ejs-layouts";

// EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);

const __dirname = dirname(fileURLToPath(import.meta.url));

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
    res.render('index', {name: 'Azisya Luthfi Bintang', 
                        title: 'Homepage',
                        contact,
                        layout: 'partials/main-layout'});
})

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: "Contact Page",
        layout: "partials/main-layout"
    });
  })

app.get('/about', function (req, res) {
    res.render('about', {
        title: "About Page",
        layout: "partials/main-layout"
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