const mongoose = require('mongoose');
const db = () => {
    mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.oqgoy8j.mongodb.net/Tour_Management?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).then(() => {
        console.log('Database connection successful'.green.bold)
    }).catch(error => {
        console.log(error)
    })
}

module.exports = db