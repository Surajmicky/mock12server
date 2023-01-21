const Calculate = require('../models/calculate.model');
const express = require('express');
const calculateRouter= express.Router()

calculateRouter.post('/calculate',async(req,res)=>{
    
    const { Annual_Instalment_Amount,Annual_Interest_Rate,Number_Of_Years}=req.body;
    const Total_Investment_Amount= Annual_Instalment_Amount*Number_Of_Years;
    const Total_Maturity_Value= Annual_Instalment_Amount*((((1+(Annual_Interest_Rate/100))**Number_Of_Years)-1)/(Annual_Interest_Rate/100));
    const Total_Interest_Gain= Total_Maturity_Value-Total_Investment_Amount;

    return res.json({Total_Investment_Amount,Total_Maturity_Value,Total_Interest_Gain})
})
module.exports= calculateRouter;