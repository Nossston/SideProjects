const hasAccessAdmin = (req,res,next)=>
{
    if(req.isAuthenticated() && req.user.isManager == true)
    {
        next();
    }
    else
    {
        res.redirect("/Login");
    }
}

module.exports=hasAccessAdmin;