// Sample product data (replace this with your actual product data)
const products = [
  { name: "T-shirt", price: 20, image: "tshirt.jpg" },
  { name: "Jeans", price: 40, image: "jeans.jpg" },
  { name: "Dress", price: 50, image: "dress.jpg" },
];

// Function to display products on the homepage
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    productList.appendChild(productElement);
  });
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;
