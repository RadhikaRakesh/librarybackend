const express=require("express");
const bodyparser=require("body-parser");

const signRouter=express.Router();

var urlencodedParser = bodyparser.urlencoded({ extended: false });
var Users=[];
function signupdetails(nav)
{

signRouter.get("/", function(req,res)
{

    res.render("signup",
    {
        nav,
        title:"Library"
    });

});

signRouter.post("/",urlencodedParser,function(req,res){

   // console.log(req.body);
   // res.send("hai hello");

    if(!req.body.fname ||!req.body.address ||!req.body.Radios||!req.body.dob ||!req.body.email||!req.body.mno ||!req.body.username || !req.body.password || !req.body.repassword){
        res.status("400");
        res.send("Invalid details!");
     } 
       /* var newUser = {
            name:req.body.fname,
            address:req.body.address,
            gender:req.body.Radios,
            dob:req.body.dob,
            mno:req.body.mno,
            user:req.body.username,
            email: req.body.email,
             password: req.body.password
            };
        Users.push(newUser);*/
        else
        res.redirect("login");
       // res.send( " Successfully signed up");
      //}
     
});

return signRouter;
}
module.exports=signupdetails;