// قائمة المنتجات
const products = [
    { id: 1, name: "منتج 1", price: 10.00, image: "product1.jpg" },
    { id: 2, name: "منتج 2", price: 20.00, image: "product2.jpg" },
    { id: 3, name: "منتج 3", price: 15.00, image: "product3.jpg" }
];

// سلة التسوق
let cart = [];

// توليد قائمة المنتجات
const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price} JOD</p>
        <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
    `;

    productList.appendChild(productDiv);
});

// إضافة منتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// تحديث السلة
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('p');
        cartItem.textContent = `${item.name} - ${item.price} JOD`;
        cartItems.appendChild(cartItem);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// إتمام الشراء
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('تم إتمام عملية الشراء بنجاح!');
        cart = []; // تفريغ السلة
        updateCart(); // تحديث السلة
    } else {
        alert('السلة فارغة.');
    }
});
