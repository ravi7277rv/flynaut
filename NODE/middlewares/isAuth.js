var Encryption = require('../services/Encryption');

module.exports=function(req,res,next){
    if(req.isAuthenticated()){
        res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
        return next();
    }else{
        var enc = new Encryption();
        var path=req.url;
        const state = enc.hideString(path)
        res.redirect(`/?redirect=${state}`);
    }
   }