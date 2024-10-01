openHomePage=()=>{
    window.open("homePage.html","_self")
}

document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.item-button');
    const selectedItemList = document.querySelector('.selected-items');
    const total = document.querySelector('.total');


    let selectedItems = [];
    let totals=0;

    addButtons.forEach((button , index) =>{
        button.addEventListener('click' , () =>{
            const item ={
                name : document.querySelectorAll('.item .item-title')[index].textContent,
                price : parseFloat(
                    document.querySelectorAll('.price')[index].textContent.slice(1),
                ),
                quantity :1,
            };

            const exisitingItem = selectedItems.find(
                (selectedItem) => selectedItem.name === item.name,
            );
            if(exisitingItem){
                exisitingItem.quantity++;
            }else{
                selectedItems.push(item);
            }

            totals += item.price;

            updateCartUI();
        });

        function updateCartUI(){
            // updateCartItemCount(selectedItems.length);
            updateCartItemList();
            updatecartTotal();
        }

        // function updateCartItemCount(count){
        //     CartItemCount.textContent = count;
        // }

        function updateCartItemList(){
            selectedItemList.innerHTML = '';
            selectedItems.forEach((item, index) => {
                const selectedItem = document.createElement('div');
                selectedItem.classList.add('selected-items');
                selectedItem.innerHTML = `
                <p>($(item.quantity)*)$(item.name)</p>
                <p class="price">RS:${(
                    item.price * item.quantity
                ).toFixed(2)}

                <button class="remove-item" data-index="${index}"><i class="fa-solid fa-times"</i></button>
                </p>
                `;
                selectedItemList.appendChild(selectedItem);
            });

            const removeButtons = document.querySelectorAll('.remove-item');
            removeButtons.forEach((button) =>{
                button.addEventListener('click',(event)=>{
                    const index = event.target.dataset.index;
                    removeItemFromCart(index);
                });
            });
        }

        function removeItemFromCart(index){
            const removeItem = selectedItems.splice(index, 1)[0];
            totals -= removeItem.price * removeItem.quantity;
            updateCartUI();
        }
        function updatecartTotal(){
            total.textContent= `$${totals.toFixed(2)}`;
        }

    });

});