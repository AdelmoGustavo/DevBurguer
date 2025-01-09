const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')
const itemPrice = document.querySelector('.item-price')




function formatCurrency(itemPrice) {
    const newValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(itemPrice)
    return newValue
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach(product => {
        myLi += `
                <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price.toFixed(2))}</p>
                </li>
        `
    })
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
         <li>
          <p>O Valor total dos itens é de R$: ${formatCurrency(totalValue.toFixed(2))}</p>
         </li>
    
        `
}

function filterAllItems() {
    const vegan = menuOptions.filter((product) => product.vegan)

    showAll(vegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)