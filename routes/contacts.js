const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('contacts', {
        title: 'Наши контакты',
        css: 'css/contacts.css'
    })
})

module.exports = router