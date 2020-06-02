var express = require('express');
var router = express.Router();
const waiterTable = require('../models/waiter')


router.post('/', async (req, res) => {
    try {
        let waiter = await waiterTable.create({
            waiterName: req.body.waiterName,
            waiterAge: req.body.waiterAge,
            waiterMobile: req.body.waiterMobile,
            waiterRatings: req.body.waiterRatings,
            waiterExperience: req.body.waiterExperience

        })
        res.send(waiter)

    }
    catch (error) {
        console.log(error)
    }
});

router.get('/', async (req, res) => {
    try {
        let allWaiter = await waiterTable.findAll()
        res.send(allWaiter)
    }
    catch(error){
        console.log(error)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        let updateWaiter = await waiterTable.update({
            waiterName: req.body.waiterName,
            waiterAge: req.body.waiterAge,
            waiterMobile: req.body.waiterMobile,
            waiterRatings: req.body.waiterRatings,
            waiterExperience: req.body.waiterExperience

        },
        {where: {id:req.params.id}})
        res.send(updateWaiter)

    }
    catch (error) {
        console.log(error)
    }
});

router.delete('/delete/:id',async(req,res) => {
    try{
        await waiterTable.destroy({where: {id:req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})



module.exports = router;
