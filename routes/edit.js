const {Router} = require('express')
const Product = require('../models/product')
const router = Router()

// router.get('/:id/edit', async (req, res) => {
//     if (!req.query.allow) {
//         return res.redirect('/')
//     }

//     const product = await Product.getById(req.params.id)

//     res.render('edit', {
//         title: 'Редактировать товар',
//         css: 'css/add.css',
//         product
//     })
// })

// router.post('/', async (req, res) => {
//     const product = new Product(req.body.productType, req.body.title, req.body.price, req.body.img)

//     await product.save()

//     res.redirect('/add')
// })

module.exports = router