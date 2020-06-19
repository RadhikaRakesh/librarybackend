const express=require("express");

const booksRouter=express.Router();
const bodyparser=require("body-parser");
var urlencodedParser = bodyparser.urlencoded({ extended: false });

function router(nav)
{
var books=[
    {
        title:"Tom and Jerry",
        authors:"Joseph barbera",
        genere:"cartoon",
        img:"tom.png",
        summary:"Tom and Jerry convince Robyn, an orphan girl who runs away from home to escape her evil aunt, to return and accompany her. Later, they chance upon a great secret that Robyn's aunt has kept from her."
    },
    {
        title:"Harry Potter",
        authors:"J K Rowling",
        genere:"Fantacy",
        img:"harry.jpg",
        summary:"Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."
    },
    {
        title:"Pathummayude Aadu",
        authors:"Basheer",
        genere:"Drama",
        img:"aadu.jpg",
        summary:"Pathummayude Aadu is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma."
    }
]
booksRouter.get("/",function(req,res){

    res.render("books",
    {
         nav,
         title:"Library",
         books
    });

});
booksRouter.get("/addbook",function(req,res){

   // res.send("hello  !");
    res.render("addbook",
    {
         nav,
         title:"Library",
         
    }); 

});
booksRouter.get("/:id",function(req,res){

    const id= req.params.id;
    res.render("book",{
        nav,
        title:"Library",
        book : books[id]

    });
});


    booksRouter.post("/addbook",urlencodedParser,function(req,res){

        if(!req.body.Authorname ||!req.body.title ||!req.body.genere||!req.body.summary ||!req.body.photo){
            res.status("400");
            res.send("Invalid details!");
         }
         res.send("Books Details submitted");
    });
return booksRouter;
}
module.exports=router;