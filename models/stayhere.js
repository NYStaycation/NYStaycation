'use strict'
/**************************************************
Test this with the following URL:
http://localhost:3000/search?city=11201&budget=500&checking_date=2016-07-23&Checkout_Date=2016-07-25
**************************************************/


//we need request and timer(tentative)
const request = require('request')
const timer   = require('timers')

//test case
// let term = '10010'

let key = process.env.EXPEDIA_KEY

module.exports = {

  //GET HOTELS IN THE SEARCH RANGE
  getHotels(req,res,next){
    //empty array to store all our results
    let results = []

    // some information from the request
    let term = req.query.city
    let startDate = req.query.checking_date
    let endDate = req.query.Checkout_Date
    let budget = req.query.budget

    console.log(req.query)

    //first request to get hotels in the desired city or zip
    request.get(`http://terminal2.expedia.com/x/nlp/results?q=${term}&apikey=${key}`,
      (err,response,data)=>{
        if(err) throw err
          //parse the results and store the hotels in the results
          let hotels = JSON.parse(data).result.hotels

          //loop through the hotels
          hotels.forEach(place=>{

            //use the id from each one to find the average price for that hotel from the offers endpoint
            request.get(`http://terminal2.expedia.com/x/mhotels/offers?hotelId=${place['id']}&resultsPerPage=50&checkInDate=${startDate}&checkOutDate=${endDate}&room1=2&apikey=${key}`,
              (err, response, data)=>{

                try{
                  //parse the data that comes back
                  let hotel = JSON.parse(data)

                  //build the object for each item
                  let item = {
                    name: place.name,
                    averageRate: hotel.hotelRoomResponse[0].rateInfo.chargeableRateInfo.averageRate ,
                    fullAddress: hotel.hotelAddress + ', ' +hotel.hotelCity,
                    picture: 'http://media.expedia.com' + hotel.photos[0].url,
                    link: hotel.deepLinkUrl
                  }

                  //push that item to results
                  results.push(item)
                }catch(e){
                  // console.log(e)
                  // console.log('sorry no info for', place.name)
                  // this try catch block makes it easy to ignore listings without data on rates
                }
          })

          })

        })

    // TODO: FIX THIS PROBLEM WITH A BETTER SOLUTION
    //set a timer to make sure all the data we need comes back; 2500ms minimum
    timer.setTimeout(()=>{
      console.log(results)
      res.results = results
      next()
    }, 4000)

  }
}
