
openHomePage=()=>{
         window.open("homePage.html","_self")
     }

     openCustomerPage=()=>{
    window.open("customer(emp).html","_self")
}


let cart = [];


function addToCart(itemName, price) {
    const item = {
        name: itemName,
        price: parseFloat(price),
        quantity: 1
    };

    const existingItem = cart.find(cartItem => cartItem.name === itemName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(item);
    }
    
    updateCartDisplay();
    updateTotals();
}

function updateCartDisplay() {
    const selectedItemsDiv = document.querySelector('.selected-items');
    selectedItemsDiv.innerHTML = ''; 

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            ${item.name} - Rs: ${item.price} x ${item.quantity} 
            <button class="remove-item" onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        selectedItemsDiv.appendChild(itemDiv);
    });
}

function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartDisplay();
    updateTotals();
}

function updateTotals() {
    let subtotal = 0;
    let discount = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        
        if (item.name === 'Cheese Burger Regular') {
            discount += (item.price * item.quantity) * 0.15;
        } else if (item.name === 'Chicken Burger Regular') {
            discount += (item.price * item.quantity) * 0.20;
        }
    });

    const totalPayment = subtotal - discount;

    document.querySelector('.subtotal').textContent = `${subtotal.toFixed(2)} LKR`;
    document.querySelector('.discount').textContent = `${discount.toFixed(2)} LKR`;
    document.querySelector('.total').textContent = `${totalPayment.toFixed(2)} LKR`;
}



function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty. Please add items before placing an order.");
        return;
    }

    const orderDetails = {
        cartItems: cart,
        subtotal: document.querySelector('.subtotal').textContent,
        discount: document.querySelector('.discount').textContent,
        total: document.querySelector('.total').textContent
    };

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    window.open('bill.html', '_blank');
    
    cart = [];
    updateCartDisplay();
    updateTotals();
}



document.querySelectorAll('.item-button').forEach((button, index) => {
    button.addEventListener('click', function() {
        const itemElement = this.parentElement;
        const itemName = itemElement.querySelector('.item-title').textContent;
        const price = itemElement.querySelector('.price').textContent.replace('Rs: ', '');
        addToCart(itemName, price);
    });
});

document.querySelector('.place-order-button').addEventListener('click', placeOrder);








