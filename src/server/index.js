const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const process = require('process');

dotenv.config();

const PORT = 8081;
const BASE_DATA = Object.freeze({
    key: process.env.API_KEY,
    lang: 'en',
    model: 'general',
});
const ENDPOINT = 'https://api.meaningcloud.com/sentiment-2.1';
const app = express();

function encode(data) {
    return Object.keys(data)
        .map((key) => `${key}=${encodeURIComponent(data[key])}`)
        .join('&');
}

app.use(express.text());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/analyze', (req, res) => {
    const data = {
        ...BASE_DATA,
        url: 'https://designformankind.com/2020/07/this-is-your-gap-year/',
    };

    fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode(data),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

// Designates what port the app will listen to for incoming requests
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
