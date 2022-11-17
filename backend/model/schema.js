const  mongoose = require("mongoose")




const infoSchema=new mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    name:{type:String,
         require:true,},

    type:{
       type:String,
       require:true,
    },
    
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    special:{
        type:String,
        require:true
    },
    delivery:{
        type:Number,
        require:true
    }
    
    
})



const Info=mongoose.model("INFO",infoSchema)

module.exports =Info;

