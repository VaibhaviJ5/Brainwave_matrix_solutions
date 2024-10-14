const products = [
    { id: 1, name: "Product 1", price: 10.00, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 15.00, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 20.00, image: "https://via.placeholder.com/150" },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').innerText = cart.length;
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
    displayCartItems();
}

function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout!');
    cart = [];
    document.getElementById('cart-count').innerText = '0';
    toggleCart();
}

window.onload = displayProducts;
