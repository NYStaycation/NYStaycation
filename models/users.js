'use strict'
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const pg = require('pg-promise')({
  // Initialization Options
});

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const _db = pg(config);

/*
Creating password hashing
*/
const createSecure = (password) =>
  new Promise((resolve, reject) =>
    bcrypt.genSalt((err, salt) =>
      bcrypt.hash(password, salt, (err, hash) =>
        err ? reject(err) : resolve(hash)
      )
    )
  )

module.exports = {
  getVisits(req, res, next) {
    console.log(req.decoded.user_email)
    _db.any(`SELECT * from visit WHERE visit_email = $1`, [req.decoded.user_email]).then(visit => {
        res.visits = visit
        next()
      })
      .catch(error => {

        console.error('Error in getVisits ', error);
        throw error;
      })
  },

  getHotels(req, res, next) {
    let counter = 0
    res.visits.forEach((visit, index) => {
      _db.one(`SELECT * from stayhere WHERE stay_email = $1 AND stay_visit = $2`, [req.decoded.user_email, visit.visit_name])
        .then(stay => {
          res.visits[index].stayhere = stay;
          counter++

          //if at the end of the array call next
          if (counter == res.visits.length) {
            next()
          }
        })
        .catch(error => {

          console.error('Error in getHotels ', error);
          throw error;
        })
    })
  },

  getPlay(req, res, next) {
    let counter = 0
    res.visits.forEach((visit, index) => {
      _db.any(`SELECT * from playhere WHERE play_email = $1 AND play_visit = $2`, [req.decoded.user_email, visit.visit_name])
        .then(play => {
          res.visits[index].playhere = play;

          counter++

          //if at the end of the array call next
          if (counter == res.visits.length) {
            next()
          }
        })
        .catch(error => {
          console.error('Error in getPlay ', error);
          throw error;
        })
    })
  },

  addVisit(req, res, next) {
    console.log(req.body.name)
    _db.none(`INSERT INTO visit (visit_name, visit_budget, visit_email) VALUES($1, $2, $3);`, [req.body.name, req.body.budget, req.decoded.user_email])
      .then(() => {
        next()
      })
      .catch(error => {
        console.error('Error in adding visit', error);
        throw error;
      })
  },


  addHotel(req, res, next) {
    console.log('added hotels', req.body)
    _db.none(
        `INSERT INTO stayhere (stay_title, stay_price, stay_link, stay_address, stay_img, stay_email, stay_visit) VALUES ($1, $2, $3, $4, $5, $6, $7);`, [req.body.Stayhere.name, req.body.Stayhere.averageRate, req.body.Stayhere.link, req.body.Stayhere.fullAddress, req.body.Stayhere.picture, req.decoded.user_email, req.body.name]

      )
      .then(stay => {
        console.log('added hotel');
        next();
      })
      .catch(error => {
        console.error('Error in adding Hotel', error);
        throw error;
      })
  },

  addPlay(req, res, next) {
    let counter = 0
    req.body.Playhere.forEach((activity, index) => {
      _db.none(
          `INSERT INTO playhere (play_title, play_price, play_img, play_email, play_visit) VALUES ($1, $2, $3, $4, $5);`, [activity.title, activity.fromPrice, activity.imageURL, req.decoded.user_email, req.body.name]

        )
        .then(play => {
          console.log('added activies');
          counter++
          if (counter == req.body.Playhere.length) {
            next();
          }
        })
        .catch(error => {
          console.error('Error in adding activies', error);
          throw error;
        })
    })
  },

  deleteVisit(req, res, next) {
    let visit_name = req.body.name
    let visit_id = req.body.id
    let count = 0

    _db.none(`DELETE FROM stayhere WHERE stay_visit=$1`, [visit_name])
      .then((data3) => {
        console.log('deleted the hotels')
        _db.none(`DELETE FROM playhere WHERE play_visit=$1`, [visit_name])
          .then((data) => {
            console.log('deleted the activities')
            _db.none(`DELETE FROM visit WHERE visit_id=$1`, [req.body.id])
              .then((data2) => {
                console.log('deleted the visit')
                 next()
              })
              .catch(error => {
                console.log(error)
              })
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })





  },

  /*********************************

  USER AUTHENTICATION INTERFACE WITH THE DATABASE

  ***********************************/

  getUserByUsername(req, res, next) {
    /* trim and lowercase the username before we try to match it */
    _db.one(`
      SELECT *
      FROM customers
      WHERE user_email = lower(trim(from $/email/));
      `, req.body)
      .then(user => {

        if (bcrypt.compareSync(req.body.password, user.user_pass_digest)) {
          res.user = user;
        } else {
          res.error = true
        }
        // console.log(res.user)
        next()

      })
      /* NOTE: NO USERS or all ERRORS*/
      .catch(error => {
        console.error('Error ', error);
        res.error = error
        next()
      })
  },

  listUsers(req, res, next) {
    _db.any("SELECT * from customers;")
      .then(users => {
        res.users = users;
        next()
      })
      .catch(error => {
        console.error('Error ', error);
        next(error);
      })
  },

  createUser(req, res, next) {

    createSecure(req.body.user_password)
      .then(hash => {
        _db.one(`
          INSERT INTO customers (user_name, user_email, user_pass_digest)
          VALUES ($1, $2, $3)
          returning *;`, [req.body.user_name, req.body.user_email, hash])
          .then(newUser => {
            console.log(newUser)
            res.user = newUser;
            next()
          })
          .catch(err => {
            console.log('error signing up', err)
            next()
          })

      });

  },



  // deleteHotels(req, res, next){

  //   _db.none(`
  //     DELETE FROM stayhere
  //     WHERE stay_email = $1
  //     `, [req.params.stay_email])

  //   .then( ()=>{
  //     console.log('DELETE HOTEL');
  //     res.rows = req.params.stay_email;
  //     next();
  //   })
  //   .catch(error=>{
  //     console.error('Erro in DELETEING HOTEL', error);
  //     throw error;
  //   })
  // },

  //   deletePlay(req, res, next){

  //   _db.none(`
  //     DELETE FROM playhere
  //     WHERE stay_email = $1
  //     `, [req.params.stay_email])

  //   .then( ()=>{
  //     console.log('DELETE Activity');
  //     res.rows = req.params.stay_email;
  //     next();
  //   })
  //   .catch(error=>{
  //     console.error('Error in DELETEING Activity', error);
  //     throw error;
  //   })
  // },


}
