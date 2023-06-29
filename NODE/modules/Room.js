var mongoose=require('mongoose');

var roomSchema= new mongoose.Schema({
    roomcode:{
        type:String,
        required:true
    },
    users:{
        type:Array,
        default:[]
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

const Room=mongoose.model('rooms', roomSchema);
module.exports=Room;