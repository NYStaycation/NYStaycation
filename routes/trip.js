'use strict'
//require express router
const router = require('express').Router()
const {getVisits, getHotels, getPlay} = require('../models/users')


// / route
router.route('/all')
  .get(getVisits, getHotels, getPlay, (req,res)=>res.json(res.visits))

router.route('/new')
  .post((req,res)=>res.send('insert new trip'))


router.route('/:id')
  // .put((req,res)=>res.send(req.params.id))
  .delete( (req,res)=>res.send(req.params.id))



//export it
module.exports = router
