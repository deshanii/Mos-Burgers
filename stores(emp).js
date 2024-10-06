openPlaceOrderPage=()=>{
    window.open("homePage.html","_self")
}

let items = [
    {name: "Classic Burger Large", price: "Rs: 750.00 ", imgSrc: "img/classic bur L.jpg"},
    {name: "Cheese Burger Regular", price: "Rs: 650.00 ", imgSrc: "img/classic bur Reg.jpg"},
    {name: "Turkey Burger", price: "Rs: 1000.00 ", imgSrc: "img/turkey bur.jpg"},
    {name: "Chicken Burger Large", price: "Rs:1400.00 ", imgSrc: "img/chicken bur.jpg"},
    {name: "Chicken Burger Regular", price: "Rs: 600.00 ", imgSrc: "img/chicken bur.jpg"},
    {name: "Cheese Burger Large", price: "Rs: 1000.00 ", imgSrc: "img/cheese bur.jpg"},
    {name: "Turkey Burger", price: "Rs: 1000.00 ", imgSrc: "img/turkey bur.jpg"}
];


function displayItems(itemsToDisplay) {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = ''; 

    
    itemsToDisplay.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        itemsContainer.appendChild(itemDiv);
    });

   
    let addNewDiv = document.createElement('div');
    addNewDiv.classList.add('item', 'add-new');
    addNewDiv.id = 'addNewItem';
    addNewDiv.innerHTML = '<span>+</span>';
    itemsContainer.appendChild(addNewDiv);

   
    document.getElementById('addNewItem').addEventListener('click', addNewItem);
}


document.getElementById('searchInput').addEventListener('input', function () {
    let searchTerm = this.value.toLowerCase();
    let filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
    displayItems(filteredItems); 
});


function addNewItem() {
    let itemName = prompt("Enter new item name:");
    let itemPrice = prompt("Enter item price:");
    let itemImgSrc =prompt("default.png") ; 

    if (itemName && itemPrice) {
        let newItem = {name: itemName, price: "Rs: "+itemPrice , imgSrc: itemImgSrc};
        items.push(newItem); 
        displayItems(items); 
    }
}

displayItems(items);
