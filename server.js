'use strict'
// const env         = process.env.NODE_ENV || 'development';
// const DEV         = env==='development';
// const dotenv      = (DEV) ? require('dotenv').config() : undefined;



const express         = require('express')
const path            = require('path')
const logger          = require('morgan')
const bodyParser      = require('body-parser')
const PORT            = process.env.PORT ||3000
const app             = express()
const SearchRoute     = require ('./routes/search')




app.use(logger('dev'));
// app.use(logger(DEV ? 'dev' : 'common'))
app.use(express.static(path.join(__dirname,'dist')))
app.use(bodyParser.json())



app.use('/search', SearchRoute);


app.listen(PORT, ()=>{
  console.log('Server is listening on port', PORT);
})
