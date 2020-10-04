var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  surname: {
    type: String,
    required: true
},
TC: {
    type: Number,
    unique: true,
    immutable: true,
    required: true
},
mail: {
    type: String,
    required: true
}});

 

module.exports = mongoose.model('User', UserSchema);
