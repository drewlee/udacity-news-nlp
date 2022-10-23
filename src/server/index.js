const express = require('express');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI');

dotenv.config();

const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/url', (req, res) => {
    console.log(req);
});

// Designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
