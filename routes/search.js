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

router.route('/trip/all')
  .get((req,res)=>res.send('get all our trip'))

router.route('/trip/new')
  .post((req,res)=>res.send('insert new trip'))


router.route('/trip/:id')
  // .put((req,res)=>res.send(req.params.id))
  .delete( (req,res)=>res.send(req.params.id))



module.exports  = router
