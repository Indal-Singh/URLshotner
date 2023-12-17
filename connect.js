const mongoose = require('mongoose')

const handelConnectDb = () =>
{
    return mongoose.connect('mongodb://127.0.0.1:27017/urlshotner');
}

module.exports = {handelConnectDb,};