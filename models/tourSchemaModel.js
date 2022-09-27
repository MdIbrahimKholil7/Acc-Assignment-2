const mongoose = require('mongoose');
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    image: {
        type: String,
        required: [true, 'Please provide a image address']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cant be negative']
    },
    destination: {
        type: String,
        required: [true, 'Please provide a destination name']
    },
    view:{
        type:Number,
        default:0
    }
})

module.exports=tourSchema