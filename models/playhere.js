'use strict'
const request = require('request')
// const timer   = require('timers')

let key   = process.env.EXPEDIA_KEY

module.exports = {

  getActivities(req,res,next){
    let results = []

     // some information from the request
    let term = req.query.city
    let startDate = req.query.checking_date
    let endDate = req.query.Checkout_Date
    let budget = req.query.budget

    console.log(req.query)

    request.get(`http://terminal2.expedia.com/x/activities/search?location=${term}&startDate=${startDate}&endDate=${endDate}&apikey=${key}`,
      (err, response, data)=>{

        let activities = JSON.parse(data)

        activities.activities.forEach(activity=>{

          let item = {
            title: activity.title,
            imageUrl: activity.imageUrl,
            fromPrice: activity.fromPrice
          }
          results.push(item)


        })

        res.results.activities = results
        next()

      })


  }

}
