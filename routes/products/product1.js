const {Router} = require('express')
const Product = require('../../models/product')
const Card = require('../../models/card')
const router = Router()

router.post('/additive/:id', async (req, res) => {
    const product = await Product.getById(req.params.id)
    await Card.add(product)
    const products = await Product.filterByType(1)
    res.status(200).json(products)
})

router.get('/', async (req, res) => {
    const arr = await Product.filterByType(1)
    res.render('products/product1', {
        title: 'Ручные инструменты',
        css: 'css/search.css',
        arr
    })
})

module.exports = router