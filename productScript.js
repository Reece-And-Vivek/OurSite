function loadProducts() {
    fetch('products.html') // Ensure this path is correct
        .then(response => response.text())
        .then(data => {
            document.getElementById('products-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading products:', error));
}

window.onload = function() {
    loadProducts();
};
