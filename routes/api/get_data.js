const express = require('express')
const router = express.Router();
const data_details  = require('../../Data_details')

const app = express()


// grtting the payload
router.get('/', (req, res)=>{
    return res.json({
        message : 'Sucessful, Here are your details',
        data : data_details
    })
})


// getting only the data 
router.get('/data', (req, res)=>{
    res.json(data_details)
})

// getting just a single data
// router.get('/:name', (req, res)=>{
//     const found = data_details.some(data_detail => data_detail.name === parseInt(req.params.name));

//     if (found) {
//         res.json(data_details.filter(data_detail => data_detail.name === parseInt(req.params.name)))
//     }else {
//         res.status(400).json({msg : `no member with the id of ${req.params.name}`})
//     }
// })
router.get('/:id', (req, res)=>{
    const found = data_details.some(data_detail => data_detail.id === parseInt(req.params.id));

    if (found) {
        res.json(data_details.filter(data_detail => data_detail.id === parseInt(req.params.id)))
    }else {
        res.status(400).json({msg : `no member with the id of ${req.params.id}`})
    }
})


// create  a data
router.post('/data', (req, res)=>{
    const newData = {
        id : req.body.id,
        name : req.body.name,
        email : req.body.email,
        country : req.body.country
    }

    if (!newData.name || !newData.email){
        return res.status(400).json({msg : "pls include a name and a mail"})
    }

    /**
     * for mongodb use 
     * data_details.save()
     */
    data_details.push(newData);
    res.json(data_details)
})


// update data
router.put('/:id', (req, res)=>{
    const found = data_details.some(data_detail => data_detail.id === parseInt(req.params.id));

    if (found) {
        const updateDataDetails = req.body
        data_details.forEach(data_detail =>{
            if(data_detail.id === parseInt(req.params.id)) {
                data_detail.name = updateDataDetails.name ? updateDataDetails.name : data_detail.name;
                data_detail.email = updateDataDetails.email ? updateDataDetails.email : data_detail.email;

                res.json({msg : "Data Updated", data_detail:data_detail})
            }
        });
    }else {
        res.status(400).json({msg : `no member with the id of ${req.params.id}`})
    }
})

// delete data
router.delete('/:id', (req, res)=>{
    const found = data_details.some(data_detail => data_detail.id === parseInt(req.params.id));

    if (found) {
        res.json({msg : "Data is deleted", data_details :data_details.filter(data_detail => data_detail.id !== parseInt(req.params.id))})
    }else {
        res.status(400).json({msg : `no member with the id of ${req.params.id}`})
    }
})

module.exports = router

