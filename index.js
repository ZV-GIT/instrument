const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const contactsRoutes = require('./routes/contacts')
const deliveryRoutes = require('./routes/delivery')
const shopRoutes = require('./routes/shop')
const searchRoutes = require('./routes/search')

const product1Routes = require('./routes/products/product1')
const product2Routes = require('./routes/products/product2')
const product3Routes = require('./routes/products/product3')
const product4Routes = require('./routes/products/product4')
const product5Routes = require('./routes/products/product5')
const product6Routes = require('./routes/products/product6')
const product7Routes = require('./routes/products/product7')
const product8Routes = require('./routes/products/product8')
const product9Routes = require('./routes/products/product9')
const product10Routes = require('./routes/products/product10')
const product11Routes = require('./routes/products/product11')
const product12Routes = require('./routes/products/product12')

const addRoutes = require('./routes/add')
const editlistRoutes = require('./routes/edit-list')
const cardRoutes = require('./routes/card')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        if_eq: function(a, b, opts) {
            if (a == b) {
                return opts.fn(this);
            } else {
                return opts.inverse(this);
            }
        }
    }
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/contacts', contactsRoutes)
app.use('/delivery', deliveryRoutes)
app.use('/shop', shopRoutes)
app.use('/search', searchRoutes)

app.use('/product1', product1Routes)
app.use('/product2', product2Routes)
app.use('/product3', product3Routes)
app.use('/product4', product4Routes)
app.use('/product5', product5Routes)
app.use('/product6', product6Routes)
app.use('/product7', product7Routes)
app.use('/product8', product8Routes)
app.use('/product9', product9Routes)
app.use('/product10', product10Routes)
app.use('/product11', product11Routes)
app.use('/product12', product12Routes)

app.use('/add', addRoutes)
app.use('/edit-list', editlistRoutes)
app.use('/card', cardRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})