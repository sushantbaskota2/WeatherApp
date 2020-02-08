const request = require('request');
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// request({ url: url, json: true }, (error, response) => {
//     if (!!error) {
//         console.log('Unable to connect to weather service. ');
//     } else if (response.body.error) {
//         console.log('Unable to find that location');
//     } else {
//         const { currently } = response.body;
//         console.log(response.body.daily.data[0].summary + ' It is ', currently.temperature, ' degrees outside. ');
//         console.log('There is ' + currently.precipProbability + ' % chance of rain');
//     }
// });

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/165288e640de38ce0a99aa0509d93d91/${encodeURIComponent(
        lat
    )},${encodeURIComponent(long)}?units=us`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.error) {
            callback('Unable to fetch data for that location', undefined);
        } else {
            callback(
                undefined,
                body.daily.data[0].summary +
                    ' It is ' +
                    body.currently.temperature +
                    ' degrees outside. ' +
                    'Temperature High: ' +
                    daily.data[0].temperatureHigh +
                    'Temperature Low : ' +
                    daily.data[0].temperatureLow
            );
        }
    });
};

module.exports = forecast;
