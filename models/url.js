const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const URLSchema = new Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  historyAnalytics:[ { timestamp:{ type : Number } } ],
});

const URLModel = mongoose.model('URL', URLSchema); // Consistent naming

module.exports = URLModel;
