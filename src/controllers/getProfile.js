const User = require('../models/user.model');
const express = require('express');
const getProfile= express.Router()

getProfile.get('/getProfile',async(req,res)=>{
    const registeredUser = await User.findOne({ email: req.body.email });
    if (!registeredUser) {
      return res.json({message:'User not found'});
    }
    return res.json(registeredUser) 
})
module.exports= getProfile;