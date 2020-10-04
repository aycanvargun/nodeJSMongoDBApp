var mongoose = require('mongoose');

var AccountSchema = mongoose.Schema({
  TC: {
    type: Number,
    immutable: true,
    required: true
},
  balace: {
    type: Number,
    required: true
},
currency: {
  type: String,
  required: true
},

});

 

module.exports = mongoose.model('Account', AccountSchema);
