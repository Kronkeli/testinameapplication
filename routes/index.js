var express = require('express');
var router = express.Router();
// import express from 'express';
// import router from express.Router();
var nameController = require('../controllers/nameController');


/* GET home page. */
router.get('/', function (req, res, next) {
  nameController.index(req, res, next);
});

module.exports = router;
