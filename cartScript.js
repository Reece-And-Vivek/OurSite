// cartScript.js

let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    cartItems.innerHTML = '';

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<li>${item.productName} - $${item.price.toFixed(2)}</li>`;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Function to handle the checkout process
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Proceeding to checkout...');
    // Redirect to checkout page or handle payment processing
}

// Attach cart script functions to global scope for access in HTML
window.addToCart = addToCart;
window.updateCart = updateCart;
window.checkout = checkout;
