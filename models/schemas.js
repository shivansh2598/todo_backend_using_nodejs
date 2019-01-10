const mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    blog:{
        type:String,
        // trim:true,
        required:true
    },
    id1:{
        type:Number,
        required:true
    }

})

var user=mongoose.model('user',userSchema);
module.exports=user;