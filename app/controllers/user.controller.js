var User = require('../models/user.model.js');

exports.create = function(req, res) {
    // Create and save a new user
    if(!req.body) {
        res.status(400).send({message: "User can not be empty"});
    }

    var user = new User(
        {
            name: req.body.name,
            surname: req.body.surname,
            TC:req.body.TC,
            mail: req.body.mail
         }
    );

    user.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the user."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all users from the database.
    User.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving users."});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single user with a TC
    User.find({ TC:  req.params.TC } , function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.TC});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a user identified by the TC in the request
    User.find({ TC:  req.params.TC }, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.TC});
        }

       if(user[0].TC===req.body.TC)
       {
        user[0].name = req.body.name;
        user[0].surname= req.body.surname;
        user[0].TC=req.body.TC;
        user[0].mail= req.body.mail;
        user[0].save(function(err, data){
            if(err) {
                res.status(500).send({message: "Error occured on update" + req.params.TC});
            } else {
                res.send(data);
            }
        });
       }
       else{
        res.status(500).send({message: "Could not update user's TC: " + req.params.TC})
       }

        

    
    });
};

exports.delete = function(req, res) {
    // Delete a user with the specified TC in the request
    User.remove({ TC:  req.params.TC }, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with TC " + req.params.TC});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
    

};

