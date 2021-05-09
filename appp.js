const express = require('express')
// const router = express.Router();
const exphbs = require('express-handlebars')
require('./models/db')
const data_details = require('./Data_details')
const app = express()

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

// body parser middleware for creating data obj
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// homepage route
app.get('/', (req, res)=>{
    res.render('index', {
        title : 'Data App',
        data_details 
    })
})

// data api routes middleware 
app.use('/', require('./routes/api/get_data'))


const port = process.env.PORT || 5200

app.listen(port, ()=>{
    console.log('server is running')
})


// app.get('/data')