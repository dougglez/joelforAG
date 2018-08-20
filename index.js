const express = require('express');
const path = require('path');
// const bP = require('body-parser');
// const cors = require('cors');
// const helmet = require('helmet');

const app = express();
// app.use(bP.json());
// app.use(cors());
// app.use(helmet());

app.use(express.static(path.join(__dirname, '/')));
console.log(path.join(__dirname, '/'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/'));
});

app.listen(8080);