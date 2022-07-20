const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('shop', {
        title: 'Товары',
        css: 'css/shop.css'
    })
})

module.exports = router