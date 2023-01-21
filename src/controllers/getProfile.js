const User = require('../models/user.model');
const express = require('express');
const getProfile= express.Router()

getProfile.get('/getProfile/:email',async(req,res)=>{
  const email= req.params.email;
    const registeredUser = await User.findOne({email:email});
    if (!registeredUser) {
      return res.json({message:'User not found'});
    }
    return res.json(registeredUser) 
})
module.exports= getProfile;