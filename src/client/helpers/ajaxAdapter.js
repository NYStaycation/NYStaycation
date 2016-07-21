import React from 'react'

const ajaxAdapter = {

  searchHotels(hotelSearch){
    console.log('ajax adapter hotelSearch',hotelSearch)
    let $url = `/search?city=${hotelSearch["city"]}&budget=${hotelSearch["budget"]}&checking_date=${hotelSearch["checking_date"]}&Checkout_Date=${hotelSearch["Checkout_Date"]}`

    return fetch($url)
    .then(r=> r.json())

  }


}

export default ajaxAdapter


// /search?city=11201&budget=500&checking_date=2016-07-23&Checkout_Date=2016-07-25
