const { Router } = require('express')
const Product = require('../models/product')
const router = Router()

router.get('/', async (req, res) => {
    arr = await Product.getAll()
    res.render('edit-list', {
        title: 'Все продукты',
        css: 'css/search.css',
        arr
    })
})

router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow) {
        return res.redirect('/')
    }

    const product = await Product.getById(req.params.id)

    res.render('product-edit', {
        title: `Редактировать ${product.title}`,
        css: 'css/add.css',
        product
    })
})

router.post('/edit', async (req, res) => {
    await Product.update(req.body)
    res.redirect('/edit-list')
})

router.delete('/remove/:id', async (req, res) => {
    const products = await Product.remove(req.params.id)
    res.status(200).json(products)
})

module.exports = router