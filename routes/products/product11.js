const {Router} = require('express')
const Product = require('../../models/product')
const Card = require('../../models/card')
const router = Router()

router.post('/additive/:id', async (req, res) => {
    const product = await Product.getById(req.params.id)
    console.log(req.body.id)
    console.log(product)

    await Card.add(product)

    const products = await Product.filterByType(11)
    res.status(200).json(products)
})

router.get('/', async (req, res) => {
    arr = await Product.filterByType(11)
    res.render('products/product11', {
        title: 'Сайдинг',
        css: 'css/search.css',
        arr
    })
})

module.exports = router