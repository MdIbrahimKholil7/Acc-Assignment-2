const { Router } = require('express');
const express = require('express');
const router=express.Router()
const tourController=require('../controller/tourController')

router.post('/insert_tour',tourController.insertTour)
router.get('/tour',tourController.getAllTour)
module.exports=router
