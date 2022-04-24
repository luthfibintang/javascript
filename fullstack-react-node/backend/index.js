import express from "express";
import db from "./config/database.js"
import productRoutes from "./routes/index.js"
import cors from 'cors';

const app = express();

try {
    await db.authenticate();
    console.log('database Connected')
} catch(e) {
    console.error(`Connection Error : ${e}`)
}

app.use(cors());
app.use(express.json())
app.use('/products', productRoutes);

app.listen(5000, () => {
    console.log('Server Listening on port 5000')
})