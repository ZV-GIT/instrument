const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('about', {
        title: 'О Компании',
        css: 'css/about.css'
    })
})

module.exports = router