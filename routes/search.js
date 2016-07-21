'use strict'
const router      = require('express').Router()
const {getHotels} = require('../models/stayhere')
const {getActivities} = require('../models/playhere')


router.get('/', getHotels, getActivities, (req,res)=>{
  res.json(res.results)
})



module.exports  = router
