module.exports = function(app) {

    var accounts = require('../controllers/account.controller.js');

    // Create a new account
    app.post('/accounts/create', accounts.create);

    // Retrieve all accounts
    app.get('/accounts', accounts.findAll);

    // Retrieve a single account with TC
    app.get('/accounts/:TC', accounts.findOne);

    // Update a account with TC
    app.put('/accounts/update/:id', accounts.update);

    // Delete a account with TC
    app.delete('/accounts/delete/:id', accounts.delete);

   
}