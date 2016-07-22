'use strict'
const pg = require('pg-promise')({
// Initialization Options
});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const _db = pg(config);

module.exports = {

  getHotels(req, res, next) {
    _db.any("SELECT * from stayhere WHERE stay_email = $1;",[req.body.stay_email])
      .then( stay=>{
        res.rows = stay;
        next()
      })
      .catch( error=>{

        console.error('Error in getHotels ', error);
        throw error;
      })
  },

    getPlay(req, res, next) {
    _db.any("SELECT * from playhere WHERE stay_email = $1;",[req.body.stay_email])
      .then( play=>{
        res.rows = play;
        next()
      })
      .catch( error=>{

        console.error('Error in getPlay ', error);
        throw error;
      })
  },


  addHotels(req, res, next){
    console.log('added hotels', req.body)
    _db.one(
        `INSERT INTO stayhere (stay_title, stay_price, stay_link, stay_address, stay_img, stay_email, stay_checkin_date, stay_checkout_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *;`,
        [req.body.stay_title, req.body.stay_price, req.body.stay_link, req.body.stay_address, req.body.stay_img, req.body.stay_email, req.body.stay_checkin_date, req.body.stay_checkout_date]

      )
    .then( stay =>{
      console.log('added hotel');
      res.rows = stay;
      next();
    })
    .catch(error=>{
      console.error('Error in adding Hotel', error);
      throw error;
    })
  },

  addPlay(req, res, next){
    console.log('added Play', req.body)
    _db.one(
        `INSERT INTO playhere (play_title, play_price, play_img, play_email, play_checkin_date, play_checkout_date) VALUES ($1, $2, $3, $4, $5, $6) returning *;`,
        [req.body.play_title, req.body.play_price, req.body.play_img, req.body.play_email, req.body.play_checkin_date, req.body.play_checkout_date]

      )
    .then( play =>{
      console.log('added activies');
      res.rows = stay;
      next();
    })
    .catch(error=>{
      console.error('Error in adding activies', error);
      throw error;
    })
  },

  deleteHotels(req, res, next){

    _db.none(`
      DELETE FROM stayhere
      WHERE stay_email = $1
      `, [req.params.stay_email])

    .then( ()=>{
      console.log('DELETE HOTEL');
      res.rows = req.params.stay_email;
      next();
    })
    .catch(error=>{
      console.error('Erro in DELETEING HOTEL', error);
      throw error;
    })
  },

    deletePlay(req, res, next){

    _db.none(`
      DELETE FROM playhere
      WHERE stay_email = $1
      `, [req.params.stay_email])

    .then( ()=>{
      console.log('DELETE Activity');
      res.rows = req.params.stay_email;
      next();
    })
    .catch(error=>{
      console.error('Error in DELETEING Activity', error);
      throw error;
    })
  },


}

