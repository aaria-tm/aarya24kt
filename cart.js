let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add product to cart
function addToCart(name, price, img) {
  let product = cart.find(item => item.name === name);

  if (product) {
    product.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  saveCart();
  alert("Added to Cart!");
}

// Increase quantity
function increase(index) {
  cart[index].qty++;
  saveCart();
  location.reload();
}

// Decrease quantity
function decrease(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1); // remove item if qty = 1
  }
  saveCart();
  location.reload();
}


/* -----------------------------------
   🗑️ NEW — CLEAR ONE ITEM
----------------------------------- */
function clearItem(index) {
  cart.splice(index, 1); // removes that specific item
  saveCart();
  location.reload();
}


/* -----------------------------------
   🧹 NEW — CLEAR ALL ITEMS
----------------------------------- */
function clearAll() {
  cart = []; // empty cart
  saveCart();
  location.reload();
}
