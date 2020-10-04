module.exports = function(app) {

    var users = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/users/create', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single user with TC
    app.get('/users/:TC', users.findOne);

    // Update a user with TC
    app.put('/users/update/:TC', users.update);

    // Delete a user with TC
    app.delete('/users/delete/:TC', users.delete);
}