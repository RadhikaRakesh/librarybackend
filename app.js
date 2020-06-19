const express=require("express");
const app=new express();


const  nav=[
    {link:"/login",name:"LOGIN"},
    {link:"/signup",name:"SIGNUP"},
    {link:"/books",name:"BOOKS"},
    {link:"/authors",name:"AUTHORS"},
    {link:"/books/addbook",name:"ADD BOOKS"},
    {link:"/authors/add ",name:"ADD AUTHOR"}
];
const loginRouter=require("./src/routes/loginroutes")(nav);   
const booksRouter=require("./src/routes/bookRoutes")(nav);
const authorsRouter=require("./src/routes/authorRouters")(nav);
const signupRouter=require("./src/routes/signupRoutes")(nav);
//const addauthor=require("./src/routes/addauthorroute")(nav);
app.use(express.static("./public"));
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/login",loginRouter);
app.use("/signup",signupRouter);
//app.use("/addauthor",addauthor);
app.use("/authors/addauthor",authorsRouter);
app.use("/books/addbook",booksRouter);

app.set("view engine","ejs");
app.set("views","./src/views");

app.get("/",function(req,res)
{

    res.render("index",
    {
        nav,
        title:"Library"
    });
});



app.listen(5000);