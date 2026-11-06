// imports
const express = require('express');
const path = require('path');

// create instance of the express app
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
// server static assests
app.use(express.static(path.join(__dirname, 'public')));


// import routes
app.use('/application', require('./route/ApplicationRoute'));
app.use('/login', require('./route/loginRoute'));

app.listen(port, () => {console.log('Server is running on http://localhost:${port}');

});