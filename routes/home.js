const { Router } = require('express')
const Card = require('../models/card')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Инструмент магазин, г. Рязань',
        css: 'css/main.css'
    })
})

router.post('/', async (req, res) => {
    let cards = await Card.fetch()
    res.status(200).json(cards)
})

module.exports = router