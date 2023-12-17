const express = require('express')
const URL = require('./routes/url')
const { handelConnectDb } = require('./connect')
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
PORT = 3000;
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',URL)
handelConnectDb().then(()=>{
    console.log('mongooes connected...');
})
app.listen(PORT,()=>{console.log(`App is Running now http://localhost:${PORT}`)});

