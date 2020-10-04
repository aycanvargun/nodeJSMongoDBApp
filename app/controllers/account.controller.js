var Account = require('../models/account.model.js');

exports.create = function(req, res) {
    // Create and save a new account
    if(!req.body) {
        res.status(400).send({message: "account can not be empty"});
    }

    var account = new Account(
        {
             
            TC:req.body.TC,
            balace: req.body.balance,
            currency:req.body.currency
         }
    );

    account.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the account."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all accounts from the database.
    Account.find(function(err, accounts){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving accounts."});
        } else {
            res.send(accounts);
        }
    });
};

exports.findOne = function (req, res) {
    // Find a single account with a TC
    Account.find({ TC:  req.params.TC }, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve account with id " + req.params.TC});
        } else {
            res.send(data);
        }
    });
};

exports.findAccount =   findAccount;
async  function findAccount (id) {

    
    // Find a single account with a TC
  
 
  return await  Account.find({ _id:  id },   function(err, data) {
         
        if(err) {
            console.log("Could not retrieve account with id " + id)
            
        }  
    })
   
 
};

exports.updateById = updateById

async function updateById(accountToUpdate) {
    // Update a account identified by the TC in the request

   
    return await   Account.find({ _id:  accountToUpdate.id}, function(err, account) {
        if(err) {
            res.status(500).send({message: "Could not find a account with id " + accountToUpdate.id});
        }

        if(account[0].TC===accountToUpdate.TC)
        {
            account[0].TC=accountToUpdate.TC;
            account[0].balace= accountToUpdate.balace;
            account[0].currency= accountToUpdate.currency;
            account[0].save(function(err, data){
             if(err) {
                console.log("Could not retrieve account with id " + id)   
             } 
         });
        }
        else{
            console.log("TCs cannot be changed ")
        }
 
    });
};

exports.update = function (req, res) {
    // Update a account identified by the TC in the request
    Account.find({ _id:  req.params.id }, function(err, account) {
        if(err) {
            res.status(500).send({message: "Could not find a account with id " + req.params.TC});
        }

        if(account[0].TC===req.body.TC)
        {
            account[0].TC=req.body.TC;
            account[0].balace= req.body.balace;
            account[0].currency= req.body.currency;
            account[0].save(function(err, data){
             if(err) {
                 res.status(500).send({message: "Error occured on update" + req.params.TC});
             } else {
                 res.send(data);
             }
         });
        }
        else{
         res.status(500).send({message: "Could not update account's TC: " + req.params.TC})
        }
 
    });
};

exports.delete = function(req, res) {
    // Delete a account with the specified TC in the request
    Account.remove({ _id:  req.params.id }, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete account with id " + req.params.id});
        } else {
            res.send({message: "Account deleted successfully!"})
        }
    });
};

exports.deleteById = function(id) {
    // Delete a account with the specified TC in the request
    Account.remove({_id: id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete account with id " + id});
        } else {
            res.send({message: "Account deleted successfully!"})
        }
    });
};


