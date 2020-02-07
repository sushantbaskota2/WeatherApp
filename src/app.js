const express = require('express');
const path = require('path');
const app = express();

const publicDir = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates');

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'sushantey'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        hamro: 'weather app',
        tmro: 'sushantey'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        forecast: 'Khatra jaado xa mug',
        place: 'Philadelphia'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Khatra jaado xa mug',
        place: 'Philadelphia'
    });
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
