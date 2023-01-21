const mongoose= require('mongoose')
const calculateSchema= new mongoose.Schema({
    Annual_Instalment_Amount:{
        type: Number,
        required:true
    },
    Annual_Interest_Rate:{
        type:Number,
        required:true
    },Number_Of_Years:{
        type:Number,
        required:true
    }
})
const Calculate= mongoose.model('Calculate',calculateSchema);
module.exports =Calculate;