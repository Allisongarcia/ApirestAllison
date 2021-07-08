const mongoose = require('mongoose');

const VinosSchema = new mongoose.Schema({
    nombre:{
        type:String,
    
        //require:true
    },
    codigo:{
        type: Number,
       //require:true
    },
    precio:{
        type:Number,
        //required:true
    },
    existencia:{
        type:Number,
        default:5
    }
})

const Vino =mongoose.model('Vino',VinosSchema);
module.exports =Vino;