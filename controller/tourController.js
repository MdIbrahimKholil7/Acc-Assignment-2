
const mongoose = require('mongoose');
const tourSchema = require('../models/tourSchemaModel')
const Tour = new mongoose.model('tour', tourSchema)

// insert tour 
exports.insertTour = async (req, res, next) => {
    try {
        // const tour = new Tour(req.body)
        // const result = await tour.save()
        const result = await Tour.insertMany(req.body)
        if (result) {
            res.status(200).json({
                message: 'Success',
                status: true,
                data: result
            })
        }
    } catch (error) {
        next(error)
        res.status(400).json({
            message: 'Couldnt insert the data',
            status: false,
            error: error.message

        })
    }
}

// get all tour 
exports.getAllTour = async (req, res, next) => {
    try {
       
        const result = await Tour.find()
        if (result) {
            res.status(200).json({
                message: 'Success',
                status: true,
                data: result
            })
        }
    } catch (error) {
        next(error)
        res.status(400).json({
            message: 'Couldnt get the data',
            status: false,
            error: error.message

        })
    }
}

// get all tour 
exports.getSortTour = async (req, res, next) => {
    try {
       
        let sortStr;
        if(req.query.sort){
            sortStr=req.query.sort.split(',').join(' ')
        }
        console.log(sortStr)
        const result = await Tour.find().sort(sortStr)
        if (result) {
            res.status(200).json({
                message: 'Success',
                status: true,
                data: result
            })
        }
    } catch (error) {
        next(error)
        res.status(400).json({
            message: 'Couldnt get the data',
            status: false,
            error: error.message

        })
    }
}
