const mongoose = require('mongoose')

let data_Schema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String
    },
    country : {
        type : String
    }

})

mongoose.model('data', data_Schema)