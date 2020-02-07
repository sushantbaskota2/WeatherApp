const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send({
        hello: 'lado'
    });
});
app.get('/help', (req, res) => {
    res.send('Hello help');
});
app.get('/about', (req, res) => {
    res.send('<h1>Weather App</h1>');
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
