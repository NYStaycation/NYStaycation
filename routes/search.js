'use strict'
const router      = require('express').Router()
const {getHotels} = require('../models/stayhere')

router.get('/', getHotels, (req,res)=>{
  res.json(res.results)
})

module.exports  = router
