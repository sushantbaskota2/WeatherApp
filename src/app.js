const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const publicDir = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sushant Baskota'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        name: 'Sushant Baskota'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Weather App',
        name: 'Sushant Baskota'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Khatra jaado xa mug',
        place: 'Philadelphia'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404page', {
        errorMessage: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('404page', { errorMessage: 'Page not found' });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
