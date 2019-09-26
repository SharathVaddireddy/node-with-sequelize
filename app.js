const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AppConfig = require('./Config/AppConfig');
const cors = require('cors');
var db = require('./Models');
const Constants = require('./Config/Constants');
const app = express();

// // CORS middleware
app.use(cors());

// //Body Parser Middleware
app.use(bodyParser.json({ limit: '5mb' }));
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

//Defining the controllers used in applicationconst

const users = require('./Controllers/UserController');
app.use('/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/index.html'));
});
app.listen(AppConfig.application.port, () => {
    console.log('server started on port ' + AppConfig.application.port);
});

// Database authentication => configuration @./model/index.js
db.sequelize.authenticate().then(() => {
    /**Replace the database details in AppConfig file with respective to your databse */
    console.log(AppConfig.database.name + Constants.MSG.CON_ESTABLISHED);
}).catch(err => {
    console.error(Constants.MSG.CON_FAILURE, err);
});
