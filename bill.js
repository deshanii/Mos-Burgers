// generateBill.js

// let orderHistory = {
//     "1234567890": [{orderId: 1, items: ['Burger', 'Fries'], total: 12}],
//     "0987654321": [{orderId: 2, items: ['Pizza'], total: 10}]
// };

// function generateBill(customerContact) {
//     let orders = orderHistory[customerContact] || [];
    
//     let bill = `Customer: ${customerContact}\nOrder History:\n`;
//     orders.forEach(order => {
//         bill += `Order ID: ${order.orderId}, Items: ${order.items.join(', ')}, Total: $${order.total}\n`;
//     });

//     if (orders.length === 0) {
//         bill += 'No previous orders found.\n';
//     }

//     alert(bill);
// }
