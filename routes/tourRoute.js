const { Router } = require('express');
const express = require('express');
const router=express.Router()
const tourController=require('../controller/tourController')

router.post('/insert_tour',tourController.insertTour)
router.post('/insert_single_tour',tourController.insertSingleTour)
router.get('/tour',tourController.getAllTour)
router.get('/sort_tour',tourController.getSortTour)
module.exports=router
