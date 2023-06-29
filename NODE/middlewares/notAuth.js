module.exports=function(req,res,next){

    //This header prevents browser from cacheing any web page
    // ( must be used to all routes whose rendering is dependent on logged in status 
    // other-wise even after logging out, the protected page can be visible when pressed back button )
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');

    if(!req.isAuthenticated()){
        return next();
    }
   
    res.redirect('/dashboard');
   }