const express=require("express");
const bodyparser=require("body-parser");
//const flash=require("connect-flash");

const loginRouter=express.Router();

//loginRouter.use(flash());
//loginRouter.use(express.row());
var urlencodedParser = bodyparser.urlencoded({ extended: false });

function logindetails(nav)
{
var userlog=[
    {
        user:"admin",
        pwd:"abcd",
        message:""
    }
]

loginRouter.get("/", function(req,res)
{

    res.render("login",
    {
        nav,
        title:"Library",
        userlog
        
    });
});

loginRouter.post("/",urlencodedParser,function(req,res){
   
    var uname=req.body.username;
    var pwd=req.body.password;

    /*if(uname=="admin"&&pwd=="1234"){
        
        res.redirect("books");

    }*/
     if(uname==""||pwd==""){
        //res.flash("please enter username and password");
       res.send("please enter uersname and password");
    //res.render("","Please enter both id and password");
    }
    else{
        res.redirect("books");
        //res.send("please enter details again");
        //res.flash("username or password is not correct");
    }
});

return loginRouter;

}
module.exports=logindetails;