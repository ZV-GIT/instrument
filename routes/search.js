const {Router} = require('express')
const Product = require('../models/product')
const Card = require('../models/card')
const router = Router()

router.post('/additive/:id', async (req, res) => {
    const product = await Product.getById(req.params.id)
    await Card.add(product)

    const products = await Product.getAll()
    res.status(200).json(products)
})

router.post('/', async (req, res) => {
    const productSearch = await req.body.searchShop
    arr = await Product.search(productSearch)

    res.render('search', {
        title: 'Результаты поиска',
        css: 'css/search.css',
        arr,
        productSearch
    })
})

module.exports = router