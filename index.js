import products from "./products.js";
var productsDiv = document.querySelector("#products");

var productsHtmlArr = products.map(
  (product) => `
    <div class="product">
        <img class="product-img" src="${product.imgUrl}" />
        <div class="details">
            <div class="name">${product.name}</div>
            <div class="price">&#8377;${product.price}</div>
            <div class="description">${product.decription}</div>
        </div>
    </div>
`
);
productsDiv.innerHTML = productsHtmlArr.join("");

// products.forEach(product => {
//     const productDiv = document.createElement('div')
//     productDiv.setAttribute('class', 'product')
//     const img = document.createElement('img')
//     img.setAttribute("class", "product-img")
//     img.setAttribute("src", product.imgUrl)
//     const details = document.createElement('div')
//     const name = document.createElement('div')
//     name.innerText = product.name
//     name.setAttribute("class", "name")
//     const price = document.createElement('div')
//     price.innerText = `₹${product.price}`
//     price.setAttribute("class", "price")
//     const description = document.createElement('div')
//     description.innerText = product.decription
//     description.setAttribute("class", "description")
//     details.append(name, price, description)
//     productDiv.append(img, details)
//     productsDiv.appendChild(productDiv)
// })
