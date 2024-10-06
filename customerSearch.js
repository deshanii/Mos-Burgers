

// let customers = [
//     {name: "User 1", contact: "1234567890", email: "user1@example.com"},
//     {name: "User 2", contact: "0987654321", email: "user2@example.com"}
// ];

// function searchCustomer(nameOrContactOrEmail) {
//     return customers.find(customer =>
//         customer.name === nameOrContactOrEmail ||
//         customer.contact === nameOrContactOrEmail ||
//         customer.email === nameOrContactOrEmail
//     );
// }

// function onPlaceOrderClick() {
//     let searchQuery = document.getElementById('searchInput').value;
//     let customer = searchCustomer(searchQuery);
    
//     if (customer) {
//         console.log('Customer found:', customer);
//         displayCustomerDetails(customer);
//     } else {
//         console.log('Customer not found, please add.');
//         showAddCustomerForm();
//     }
// }

// function displayCustomerDetails(customer) {
//     alert(`Customer: ${customer.name}, Contact: ${customer.contact}, Email: ${customer.email}`);
// }

// function showAddCustomerForm() {
//     document.getElementById('addCustomerForm').style.display = 'block';
// }
