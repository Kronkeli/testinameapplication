var express = require('express');
var router = express.Router();
// import express from 'express';
// import router from express.Router();
var nameController = require('../controllers/nameController');


/* GET home page. Names are listed in the order they are in the database. */
router.get('/', function (req, res, next) {
  nameController.index(req, res, next);
});

/* GET names ordered by amount. */
router.get('/names-by-amount', function (req, res, next) {
  nameController.namesByAmount(req, res, next);
});

/* GET  names ordered alphabetically. */
router.get('/names-by-alphabetical', function (req, res, next) {
  nameController.namesByAlphabetical(req, res, next);
})

/* GET the total amount of all the names. */
router.get('/names-count', function (req, res, next) {
  nameController.namesCount(req, res, next);
})

/* GET the amount for a name in name list. */
router.post('/find-name', function (req,res,next) {
  nameController.findByName(req,res,next);
})

module.exports = router;
