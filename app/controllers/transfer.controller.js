var account = require('./account.controller.js');


exports.transfer =  async  function transfer(req,res){
    var source = await account.findAccount(req.params.sourceAccountId);

    console.log(source)

    var dest = await account.findAccount(req.params.destAccounId);

    console.log(dest)

    if(source[0].currency === dest[0].currency)
   {

    dest[0].balace = source[0].balace + dest[0].balace;
    source[0].balace =0;
    await account.updateById(source[0]);
  

    await  account.updateById(dest[0]);
    res.send({message: "Accounts' balance are transfered successfully!"})

    
   }
   else{
    res.status(500).send({message: "Currencies are different, you cannot transfer balance " + req.params.id});
   }

  };
 
 