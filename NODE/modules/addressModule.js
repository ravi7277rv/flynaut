var mongoose=require('mongoose');

var addressSchema= new mongoose.Schema({
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true,
        maxLength:6
    }
});

const Address = new mongoose.model('Address', addressSchema);
module.exports=Address;