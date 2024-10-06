openHomePage=()=>{
    window.open("homePage.html","_self")
}
let customers=[
    {name: "User 1", contact: "1234567890", email: "user1@example.com"},
         {name: "User 2", contact: "0987654321", email: "user2@example.com"}
];

document.querySelector('.add-customer').addEventListener('click', function() {
    const customerName = document.getElementById('customerName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;

    if (customerName && contactNumber && emailAddress) {
        
        const newCustomerDiv = document.createElement('div');
        newCustomerDiv.classList.add('customer');
        newCustomerDiv.textContent = `${customerName} - ${contactNumber} - ${emailAddress}`;

       
        document.querySelector('.customer-list').appendChild(newCustomerDiv);

       
        document.getElementById('customerName').value = '';
        document.getElementById('contactNumber').value = '';
        document.getElementById('emailAddress').value = '';
        customers.push([customerName,contactNumber,emailAddress])
        console.log(customers)
        localStorage.setItem('customers', JSON.stringify(customers));
    } else {
        alert('Please fill in all fields.');
    }
});


//=======================================================================================

// let customers = [
//          {name: "User 1", contact: "1234567890", email: "user1@example.com"},
//          {name: "User 2", contact: "0987654321", email: "user2@example.com"}
//      ];

//  customers = JSON.parse(localStorage.getItem("customers")) || [];
// console.log(customers);

// const searchInput = document.getElementById("searchInput");
// const dropdownList = document.getElementById("dropdownList");

// function filterData(query) {
//     return customers.filter((customer) =>
//         customer.name.toLowerCase().includes(query.toLowerCase())
//     );
// }

// function displayDropdown(matches) {
//     dropdownList.innerHTML = "";
//     if (matches.length > 0) {
//         matches.forEach((match) => {
//             const li = document.createElement("li");
//             li.classList.add("dropdown-item");
//             li.textContent = match.name;
//             li.onclick = () => selectCustomer(match);
//             dropdownList.appendChild(li);
//         });
//         dropdownList.style.display = "block";
//     } else {
//         dropdownList.style.display = "none";
//     }
// }

// function selectCustomer(customer) {
//     const customerName = document.getElementById("customerName");
//     const contactNo = document.getElementById("contactNo");

//     searchInput.value = customer.name;
//     customerName.value = customer.name;
//     contactNo.value = customer.phone;
//     dropdownList.style.display = "none";
// }

// searchInput.addEventListener("input", () => {
//     const query = searchInput.value;
//     const matches = filterData(query);
//     displayDropdown(matches);
// });

// document.addEventListener("click", (event) => {
//     if (
//         !searchInput.contains(event.target) &&
//         !dropdownList.contains(event.target)
//     ) {
//         dropdownList.style.display = "none";
//     }
// });
