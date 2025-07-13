import express from "express";
import ejs from 'ejs';
import  { getStates, getLgas } from 'nigeria-states-lga-select';

const port = 2000;
const app = express();

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