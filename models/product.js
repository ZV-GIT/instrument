const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

class Product {
    constructor(productType, title, price, img) {
        this.productType = productType
        this.title = title
        this.price = price
        this.img = img
        this.id = uuidv4()
    }

    toJSON() {
        return {
            productType: this.productType,
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        }
    }

    static async update(product) {
        const products = await Product.getAll()

        const idx = products.findIndex(c => c.id === product.id)
        products[idx] = product

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(products),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static async remove(id) {
        const products = await Product.getAll()
        const productsFilter = products.filter(c => c.id !== id)

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(productsFilter),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(productsFilter)
                    }
                }
            )
        })
    }

    async save() {
        const products = await Product.getAll()
        products.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(products),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static async search(name) {
        const products = await Product.getAll()

        var filterProd = products.filter(function(product) {
            return product.title.toLowerCase().includes(name.toLowerCase());
        });

        return filterProd
    }

    static async filterByType(productType) {
        const products = await Product.getAll()

        var filterProd = products.filter(function(product) {
            return product.productType == productType
        });

        return filterProd
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'products.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }

    static async getById(id) {
        const product = await Product.getAll()
        return product.find(c => c.id === id)
    }
}

module.exports = Product