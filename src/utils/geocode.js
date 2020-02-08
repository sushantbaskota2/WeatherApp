const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
    )}.json?access_token=pk.eyJ1Ijoic2Jhc2tvdGEiLCJhIjoiY2s2OGRidGpxMDN0YzNrbnpjazFwMnc3eiJ9.weYG8ERaRa_dpA5BECOWxQ`;
    request({ url, json: true }, (error, { body: { features } }) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (features.length === 0) {
            callback('Unable to find that location', undefined);
        } else {
            callback(undefined, {
                longitude: features[0].center[0],
                latitude: features[0].center[1],
                placeName: features[0].place_name
            });
        }
    });
};

module.exports = geocode;
