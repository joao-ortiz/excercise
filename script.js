const data = [{
    title: "product 01",
    price: 140,
    image: "camping",
    sale: false
},
{
    title: "product 01",
    price: 140,
    image: "firecamp",
    sale: false
},
{
    title: "product 01",
    price: 140,
    image: "trackboots",
    sale: 40
},
]

const productsContainer = document.getElementById("products")

data.forEach(product => {
    const productContainer = document.createElement("div")
    productContainer.className = "product-card"
    const image = document.createElement("div")
    const title = document.createElement("h3")
    const price = document.createElement("p")
    const button = document.createElement("button")
    if (product.sale > 0) {
        const sale = document.createElement("span")
        sale.innerText = "sale"
        productContainer.appendChild(sale)
    }
    image.style = `background-image: url(./assets/${product.image}.jpg)`
    title.innerText = product.title
    price.innerHTML = !product.sale ? "$ "+ product.price.toFixed(2) + " USD" : "$ "+ (product.price / 100 * (100 - product.sale)).toFixed(2) + " USD" + `<p style="margin-left: 5px;color: red; text-decoration: line-through;">$ ${product.price.toFixed(2)} USD</p>`
    button.innerText = "Details"
    productContainer.appendChild(image)
    productContainer.appendChild(title)
    productContainer.appendChild(price)
    productContainer.appendChild(button)
    productsContainer.appendChild(productContainer)
})