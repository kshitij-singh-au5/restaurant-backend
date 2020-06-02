var express = require('express');
var router = express.Router();
const menuTable = require('../models/menu')


router.post('/', async (req, res) => {
    try {
        let menu = await menuTable.create({
            itemName: req.body.itemName,
            cuisineName: req.body.cuisineName,
            vegEggNonVeg: req.body.vegEggNonVeg,
            itemPrice: req.body.itemPrice

        })
        res.send(menu)

    }
    catch (error) {
        console.log(error)
    }
});

router.get('/', async (req, res) => {
    try {
        let allMenu = await menuTable.findAll()
        res.send(allMenu)
    }
    catch(error){
        console.log(error)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        let updateMenu = await menuTable.update({
            itemName: req.body.itemName,
            cuisineName: req.body.cuisineName,
            vegEggNonVeg: req.body.vegEggNonVeg,
            itemPrice: req.body.itemPrice

        },
        {where: {id:req.params.id}})
        res.send(updateMenu)

    }
    catch (error) {
        console.log(error)
    }
});

router.delete('/delete/:id',async(req,res) => {
    try{
        await menuTable.destroy({where: {id:req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})



module.exports = router;
