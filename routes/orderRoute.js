var express = require('express');
var router = express.Router();
const orderTable = require('../models/order')


router.post('/', async (req, res) => {
    try {
        let order = await orderTable.create({
            userName: req.body.userName,
            userMobile: req.body.userMobile,
            itemsOrdered: req.body.itemsOrdered,
            totalPrice: req.body.totalPrice,
            paymentMode: req.body.paymentMode,
            waiterId: req.body.waiterId,
            tableId: req.body.tableId

        })
        res.send(order)

    }
    catch (error) {
        console.log(error)
    }
});

router.get('/', async (req, res) => {
    try {
        let allOrders = await orderTable.findAll()
        res.send(allOrders)
    }
    catch(error){
        console.log(error)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        let updateOrder = await orderTable.update({
            userName: req.body.userName,
            userMobile: req.body.userMobile,
            itemsOrdered: req.body.itemsOrdered,
            totalPrice: req.body.totalPrice,
            paymentMode: req.body.paymentMode,
            waiterId: req.body.waiterId,
            tableId: req.body.tableId

        },
        {where: {id:req.params.id}})
        res.send(updateOrder)

    }
    catch (error) {
        console.log(error)
    }
});

router.delete('/delete/:id',async(req,res) => {
    try{
        await orderTable.destroy({where: {id:req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})



module.exports = router;
