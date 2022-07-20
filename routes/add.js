const {Router} = require('express')
const Product = require('../models/product')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить товар',
        css: 'css/add.css'
    })
})

router.post('/', async (req, res) => {
    const product = new Product(req.body.productType, req.body.title, req.body.price, req.body.img)

    await product.save()

    res.redirect('/add')
})

module.exports = router