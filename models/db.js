const mongoose = require('mongoose');
const mongoose_URI = 'mongodb://localhost:27017/try_CRUD_DB'

// try {
    
// } catch (error) {
    
// }
const connect = mongoose.connect(mongoose_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex :true,
    useFindAndModify : false
}, (err)=>{
    if (err) {
        throw err
    }else {
        console.log(`DB connected suceesfully connected on `)
    }
})


require('./emp_data.model');