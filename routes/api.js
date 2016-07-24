const express      = require('express');
const api          = express.Router();

const tokenService = require('../service/tokenService')
const userService  = require('../models/users')

const sendError = (err,req,res,next)=>res.status(401).json(err)

/* This is whre the user logs in */
api.post('/authenticate',
            userService.getUserByUsername,
            tokenService.createToken,
            sendError)

api.get('/', (req, res)=>
  res.json({ message: 'Welcome to the coolest API on earth!' })
)

module.exports = api;
