const express      = require('express');
const users        = express.Router();

const tokenService = require('../service/tokenService')


/* get the database middleware */
const userService = require('../models/users')

const sendError = (err,req,res,next)=>res.status(500).json(err)


users.post('/new',
    userService.createUser,
    (req,res) => res.status(201).json({data: 'success'}).end()
)

// users.use( tokenService.validateToken )

users.get('/', userService.listUsers, (req,res)=>
  res.json(res.users)
)
module.exports = users;
