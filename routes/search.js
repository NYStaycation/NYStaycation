'use strict'
const router      = require('express').Router()
const {getHotels} = require('../models/stayhere')
const {getActivities} = require('../models/playhere')

// const hotels = require('../models/stayhere')
// const activities = require('../models/playhere')

const sendJSONresp = (req,res)=>res.json(res.rows)

router.get('/', getHotels, getActivities, (req,res)=>{
 res.json(res.results)
})




module.exports  = router
