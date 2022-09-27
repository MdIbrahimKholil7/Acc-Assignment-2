const { Router } = require('express');
const express = require('express');
const router=express.Router()
const tourController=require('../controller/tourController')

router.post('/insert_tour',tourController.insertTour)
router.post('/insert_single_tour',tourController.insertSingleTour)
router.get('/tour',tourController.getAllTour)
router.get('/get_top_view',tourController.getTopView)
router.get('/sort_tour',tourController.getSortTour)
router.put('/update_data_by_id/:id',tourController.updateDataById)
router.get('/get_data_id/:id',tourController.getDataById)
module.exports=router
