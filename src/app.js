const express = require("express");
const bodyParser = require('body-parser');

const districtRoute = require('./routes/district.route'); // Imports routes for the products
const app = express();
app.use('/api', districtRoute);


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on localhost:' + port + '/api/district ');
})