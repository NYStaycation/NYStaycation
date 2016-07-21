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

    // console.log(req.query)

    //make a call to expedia's api to get the data we need for activities
    request.get(`http://terminal2.expedia.com/x/activities/search?location=${term}&startDate=${startDate}&endDate=${endDate}&apikey=${key}`,
      (err, response, data)=>{

        // parse the data we get back
        let activities = JSON.parse(data)

        // try to run the for each
        try{
          activities.activities.forEach(activity=>{

            //build each object
            let item = {
              title: activity.title,
              imageUrl: activity.imageUrl,
              fromPrice: activity.fromPrice
            }

            //save it to results
            results.push(item)
          })

          //save it to the res
          res.results.activities = results
          next()

        }catch(e){
          //if activities produced an error just return the blank template to res
          res.results.activities = [{fromPrice: '', imageUrl: '', title: ''}]
          next()
        }


      })


  }

}
