var express = require('express');
var router = express.Router();
const tableTable = require('../models/table')


router.post('/', async (req, res) => {
    try {
        let table = await tableTable.create({
            seating: req.body.seating,
            tableName: req.body.tableName,
            floorNumber: req.body.floorNumber

        })
        res.send(table)

    }
    catch (error) {
        console.log(error)
    }
});

router.get('/', async (req, res) => {
    try {
        let allTable = await tableTable.findAll()
        res.send(allTable)
    }
    catch(error){
        console.log(error)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        let updateTable = await tableTable.update({
            seating: req.body.seating,
            tableName: req.body.tableName,
            floorNumber: req.body.floorNumber

        },
        {where: {id:req.params.id}})
        res.send(updateTable)

    }
    catch (error) {
        console.log(error)
    }
});

router.delete('/delete/:id',async(req,res) => {
    try{
        await tableTable.destroy({where: {id:req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})



module.exports = router;
