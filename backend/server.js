const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const dbConfig = require('./Config/config.js')
const mongoose = require('mongoose');



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())  

// middleware
mongoose.Promise = global.Promise
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database")    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
})

// models
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`serveur Demarer: ${port}}`)
})