var mongoose=require('mongoose');

var userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Name should have min 3 char "]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true, // creating index
    },
    password:{
        type:String,
        required:false
    },
    type:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const User=mongoose.model('User', userSchema);
module.exports=User;