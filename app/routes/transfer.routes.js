module.exports = function(app) {

    var transfer = require('../controllers/transfer.controller.js');

 // transfer balance  
 app.put('/transfer/:sourceAccountId/:destAccounId', transfer.transfer);

   
}