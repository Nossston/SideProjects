const hasAccessUser = (req,res,next)=>
{
    if(req.isAuthenticated())
    {
        next();
    }
    else
    {
        res.redirect("/Login");
    }
}

module.exports=hasAccessUser;