'use strict';

let route = require('express').Router(),
  mongoose = require('mongoose');
require('./../../models_db/album');
require('./../../models_db/photo');

route.post('/create',(req,res)=> {

  res.send('create');
});


route.post('/update',(req,res)=> {

  res.send('update');
});

route.post('/get',(req,res)=> {

  res.send('get');
});

route.post('/delete',(req,res)=> {

  res.send('delete');
});


module.exports = route;