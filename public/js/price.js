const toCurrency = price => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(price)
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
})

let $shopSpanCount = 0
const $shopSpan = document.querySelector('.shop-span')
if ($shopSpan) {
    fetch('/', {
        method: "POST"
    }).then(res => res.json())
        .then(cards => cards.products.forEach(cards => {
            $shopSpanCount += cards.count
            $shopSpan.textContent = $shopSpanCount
        }))
}

const $card = document.querySelector('#card')
if ($card) {
    $card.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id
            fetch('/card/remove/' + id, {
                method: 'delete'
            }).then(res => res.json())
                .then(card => {
                    if (card.products.length) {
                        const html = card.products.map(c => {
                            return `
                            <tr class="tr">
                                <td class="td1">${c.title}</td>
                                <td class="td2">${c.count}</td>
                                <td>
                                    <button class="btn-delete js-remove" data-id="${c.id}">Удалить</button>
                                </td>
                            </tr>
                            `
                        }).join('')
                        $card.querySelector('tbody').innerHTML = html
                        $card.querySelector('.price').textContent = toCurrency(card.price)
                        $shopSpanCount--
                        $shopSpan.textContent = $shopSpanCount
                        inCard()
                    } else {
                        $card.innerHTML = '<p>Корзина пуста</p>'
                        $shopSpanCount--
                        $shopSpan.textContent = $shopSpanCount
                        inCard()
                    }
                })
        }
    })
}


const $edit = document.querySelector('#edit-list')
if ($edit) {
    $edit.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id

            fetch('/edit-list/remove/' + id, {
                method: 'delete'
            }).then(res => res.json())
                .then(products => {
                    if (products.length) {
                        const html = products.map(c => {
                            return `
                            <div class="product">
                            <img src="${c.img}" alt="${c.title}">
                            <div class="bottom-info">
                                <p class="name">${c.title}</p>
                                <p class="price">${c.price}</p>
                                <a href="/edit-list/${c.id}/edit?allow=true" style="position: absolute; right: 10px;bottom: 15px;cursor: pointer;border: none;background-color: #FC8507;color: #fff;font-size: 18px;padding: 2px 10px;">Редактировать</a>
                                <button data-id="${c.id}" class="js-remove" style="position: absolute; right: 10px;bottom: 55px;cursor: pointer;border: none;background-color: #ff0000;color: #fff;font-size: 18px;padding: 2px 10px;">Удалить</button>
                            </div>
                            </div>
                        `
                        }).join('')
                        $edit.querySelector('.products').innerHTML = html
                        document.querySelectorAll('.price').forEach(node => {
                            node.textContent = toCurrency(node.textContent)
                        })
                    } else {
                        $edit.innerHTML = '<p>Товаров больше нет</p>'
                    }
                })
        }
    })
}

function additive(adress, num) {
    const $element = document.querySelector('#products' + num)
    if ($element) {
        $element.addEventListener('click', event => {
            const id = event.target.dataset.id

            if (event.target.classList.contains('js-add')) {
                fetch(adress + id, {
                    method: 'post'
                }).then(res => res.json())
                    .then(products => {
                        if (products.length) {
                            $shopSpanCount++
                            $shopSpan.textContent = $shopSpanCount
                        }
                    })
            }
        })
    }
}

additive('/product1/additive/', 1)
additive('/product2/additive/', 2)
additive('/product3/additive/', 3)
additive('/product4/additive/', 4)
additive('/product5/additive/', 5)
additive('/product6/additive/', 6)
additive('/product7/additive/', 7)
additive('/product8/additive/', 8)
additive('/product9/additive/', 9)
additive('/product10/additive/', 10)
additive('/product11/additive/', 12)
additive('/product12/additive/', 12)
additive('/search/additive/', 'search')