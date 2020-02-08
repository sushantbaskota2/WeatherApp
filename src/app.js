const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    }
    console.log(req.query.search);
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
    if (!req.query.address) {
        return res.send({
            error: 'You need to provide an address'
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, placeName } = {}) => {
        if (error) {
            return res.send({
                error
            });
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return response.send({
                    error: error
                });
            }

            res.send({
                address: req.query.address,
                placeName,
                forecast: forecastData
            });
        });
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

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
