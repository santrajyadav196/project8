const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const Test = require('./models/test');


mongoose.connect('mongodb://localhost:27017/testScore', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    });

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/tests', async (req, res) => {
    const tests = await Test.find({});
    res.render('tests/index', { tests });
});

app.get('/tests/new', (req, res) => {
    res.render('tests/new')
});

app.post('/tests', async (req, res) => {
    const newTest = new Test(req.body);
    await newTest.save();
    res.redirect(`/tests/${newTest._id}`)
});

app.get('/tests/:id', async (req, res) => {
    const { id } = req.params;
    const test = await Test.findById(id);
    res.render('tests/show', { test })
});

app.get('/tests/:id/edit', async (req, res) => {
    const { id } = req.params;
    const test = await Test.findById(id);
    res.render('tests/edit', { test })
})

app.put('/tests/:id', async (req, res) => {
    const { id } = req.params;
    const test = await Test.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/tests/${test._id}`);
});

app.delete('/tests/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTest = await Test.findByIdAndDelete(id);
    res.redirect('/tests');
})


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
});
