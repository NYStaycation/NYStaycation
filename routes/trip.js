'use strict'
//require express router
const router = require('express').Router()
const tokenService = require('../service/tokenService')
const {getVisits, getHotels, getPlay, addVisit, addHotel, addPlay, deleteVisit} = require('../models/users')

const sendError = (err,req,res,next)=>res.status(500).json(err)

router.use( tokenService.validateToken )

// / route
router.route('/all')
  .get(getVisits, getHotels, getPlay, (req,res)=>res.json(res.visits))

router.route('/new')
  .post(addVisit, addHotel, addPlay, (req,res)=>res.send('INSERTED!'))


router.route('/')
  // .put((req,res)=>res.send(req.params.id))
  .delete( deleteVisit, (req,res)=>res.send(req.body.id))



//export it
module.exports = router
