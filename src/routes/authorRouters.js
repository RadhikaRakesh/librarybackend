const express=require("express");
const authorRouter=express.Router();

const bodyparser=require("body-parser");
var urlencodedParser = bodyparser.urlencoded({ extended: false });
function authordetails(nav)
{

    var authors=[
        {
            name:"Chetan Bhagat",
            language:"English",
            genere:"Novels",
            img:"chethan.jpg",
            works:"Five Point Someone (2004), One Night @ the Call Center (2005), The 3 Mistakes Of My Life (2008) , 2 States (2009), Revolution 2020 (2011) and Half Girlfriend (2014), One Indian Girl (2016)."
        },
        {
            
            name:"J K Rowling",
            language:"English",
            genere:"Fantacy",
            img:"rowling.jpg",
            works:"Harry Potter series  Harry Potter and the Philosopher's Stone ,Harry Potter and the Chamber of Secrets ,Harry Potter and the Prisoner of Azkaban ,Harry Potter and the Goblet of Fire Harry Potter and the Order of the Phoenix, Harry Potter and the Half-Blood Prince Harry Potter and the Deathly Hallows "
        },
        {
            
            name:"Basheer",
            language:"Malayalam",
            genere:"novels",
            img:"basheer.jpg",
            works:"Balyakalasakhi,Manthrikappoocha,Maranathinte Nizhalil, Mathilukal,Mucheettukalikkarante Makal,Ntuppuppakkoranendarnnu ,Pathummayude Aadu ,Premalekhanam ,Shabdangal"
        }
    ]
    authorRouter.get("/",function(req,res){

        res.render("authors",
        {
             nav,
             title:"Library",
             authors
        });
    
    });
    authorRouter.get("/add",function(req,res){

        //res.send("hello  !");
        res.render("addauthor",
        {
             nav,
             title:"Library",
             
            
             
        });
    
    });
    authorRouter.post("/add",urlencodedParser,function(req,res){

        // console.log(req.body);
        // res.send("Author Details submitted");
     
        if(!req.body.Authorname ||!req.body.language ||!req.body.genere||!req.body.works ||!req.body.photo){
             res.status("400");
             res.send("Invalid details!");
          }
        
            res.send( " Successfully added");
           
          
     });
     
    authorRouter.get("/:id",function(req,res){

        const id= req.params.id;
        res.render("author",{
            nav,
            title:"Library",
            author : authors[id]
    
        });
        
    });
    return authorRouter;
}

module.exports=authordetails;

