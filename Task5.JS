const productContainer = document.getElementById("productContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const cartCount = document.getElementById("cartCount");

let allProducts = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCount.innerText = cart.length;

// Fetch API
fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => {
    loading.style.display = "none";

    allProducts = data;

    displayProducts(data);
    loadCategories(data);
  })
  .catch((err) => {
    loading.innerText = "Failed to load data";
    console.log(err);
  });

// Display Products
function displayProducts(data) {
  productContainer.innerHTML = "";

  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      
      <h3>
        ${product.title.substring(0, 50)}
      </h3>

      <p>
        ${product.description.substring(0, 60)}...
      </p>

      <div class="price">$${product.price}</div>

      <button class="view-btn" onclick="viewDetails('${product.title}', '${product.description}', '${product.price}')">
        View More
      </button>

      <button class="cart-btn" onclick='addToCart(${JSON.stringify(product)})'>
        Add to Cart
      </button>
    `;

    productContainer.appendChild(card);
  });
}

// View More
function viewDetails(title, description, price) {
  alert(
    `Title: ${title}\n\nDescription: ${description}\n\nPrice: $${price}`
  );
}

// Add To Cart
function addToCart(product) {
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  cartCount.innerText = cart.length;

  alert("Product added to cart!");
}

// Load Categories
function loadCategories(products) {
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  categories.forEach((category) => {
    const option = document.createElement("option");

    option.value = category;
    option.textContent = category;

    categoryFilter.appendChild(option);
  });
}

// Search Functionality
searchInput.addEventListener("input", () => {
  filterProducts();
});

// Category Filter
categoryFilter.addEventListener("change", () => {
  filterProducts();
});

// Sort Feature
sortPrice.addEventListener("change", () => {
  filterProducts();
});

// Filter + Sort Combined
function filterProducts() {
  let filtered = [...allProducts];

  // Search
  const searchText = searchInput.value.toLowerCase();

  filtered = filtered.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );

  // Category
  const selectedCategory = categoryFilter.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Sort
  const sortValue = sortPrice.value;

  if (sortValue === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}