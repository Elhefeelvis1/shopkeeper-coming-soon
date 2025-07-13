import express from "express";
import ejs from 'ejs';
import  { getStates, getLgas } from 'nigeria-states-lga-select';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = process.env.PORT || 2000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.get('/reservation', (req, res) => {
    const States = getStates();

    res.render('reservationForm.ejs', {
        states: States
    });
})


app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})

export default app;