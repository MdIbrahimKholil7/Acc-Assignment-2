
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

// insert tour 
exports.insertSingleTour = async (req, res, next) => {
    try {
        const tour = new Tour(req.body)
        const result = await tour.save()
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
// get single data by id 
exports.getDataById = async (req, res, next) => {
    try {

        const { id } = req.params
        const update = await Tour.updateOne({ _id: id }, { $inc: { view: 1 } })
        const result = await Tour.findById(id)
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
// get single data by id 
exports.updateDataById = async (req, res, next) => {
    try {

        const { id } = req.params
        const result = await Tour.updateOne({ _id: id }, req.body)
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
        if (req.query.sort) {
            sortStr = req.query.sort.split(',').join(' ')
        }
        const { limit = 4, page = 1 } = req.query
        const count = await Tour.countDocuments()
        const pages = Math.ceil(count / 3)
        const result = await Tour.find()
            .limit(limit)
            .skip(+limit * Number(page))
        // .sort(sortStr)
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
// get top 3 viewed data 
exports.getTopView = async (req, res, next) => {
    try {

        const result = await Tour.find()
            .sort('-view')
            .limit(3)
        // .sort(sortStr)
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
