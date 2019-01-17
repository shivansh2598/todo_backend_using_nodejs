const express = require("express");
const router = express.Router();
const user=require('../models/schemas')
var swig  = require('swig');

router.get("/hey",(req,res)=>{
   user.find((err,docs)=>{
    if(err)
    {
        console.log(err);
        res.send(err);
    }
    else
    {
        console.log(docs);
        res.json(docs);
    }
   })
})
var id;
router.post("/",
// (req,res,next)=>{
    
//     user.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
//         if(post===null)
//         {
//            id=1;
//            next();
//         }
//         else
//         {
//            id=parseInt(post.id1)+1;
//            next();
//         }
//       });
    
// },
(req,res)=>{
    const { blog, id } = req.body;
    console.log("id",id)
    var mydata=new user();
    mydata.blog=blog;
    console.log(id)
    mydata.id1=id;
    mydata.save((err,result)=>{
        if(err)
        {
            console.log(err);
            res.end();
        }
        else
        {
            res.status(200);
            res.end("added to database");
        }
    })

})

router.get('*',(req,res)=>{
    
    var tmpl = swig.compileFile('./views/template.html'),
             output = tmpl({
                pagename: 'GALAT JAGAH AA GYE HO BHAI!!',
             })
    res.end(output);
})

router.delete('/',(req,res)=>{
    const { blogzz } = req.body;
    console.log("blogzz " , blogzz);
    user.remove({blog:blogzz},(err,suc)=>{
        if(err)
        console.log(err)
        else{
        console.log("done");
        res.end("hola");
        }
    })

})

// home/shivansh/coding/Todo/backend/views
module.exports=router;