// Function to remove an item from the cart list
function removeFromCart(cartItems, index) {
    // Remove the item from the cart list array
    cartItems.splice(index, 1);
    // Update the cart items displayed on the page
    addCartItemsToBox(cartItems);
    // Update the cart list data in local storage
    localStorage.setItem('cartListData', JSON.stringify(cartItems));
}
const cLeft = document.getElementById("c-left");
const rLeft = document.getElementById("r-left");
const addressLeft = document.getElementById("address-left");
const paymentLeft = document.getElementById("payment-left");
const orderSuccess = document.getElementById("order-success-view");
///
cLeft.style.display = "none";
rLeft.style.display = "none";
addressLeft.style.display = "none";
paymentLeft.style.display = 'none';
orderSuccess.style.display = 'none';
// Function to add cart items to the box
function addCartItemsToBox(cartItems) {
    const emptyView = document.getElementById("empty-view");
    emptyView.style.display = "none";
    orderSuccess.style.display = "none";


    var cartBox = document.getElementById("cart-box");
    cartBox.innerHTML = ''; // Clear the existing content
    var isEmptyCart = false;
    const totalMRPElement = document.getElementById("total-mrp");
    const totalDiscountElement = document.getElementById("total-discount");
    const finalTotalElement = document.getElementById("final-total");
    const addToWish = document.getElementById("addToWish");

    var totalMRP = 0;
    var totalDiscount = 0;
    // Loop through each cart item

    if (cartItems.length == 0) {
        isEmptyCart = true;
    }
    if (isEmptyCart) {
        emptyView.style.display = 'flex';
        cLeft.style.display = "none";
        rLeft.style.display = "none";
        return;
    } else {
        cLeft.style.display = "flex";
        rLeft.style.display = "flex";
    }

    cartItems.forEach(function (product, index) {

        const productPrice = product.price;
        const productDiscount = (product.price * (100 - product.discount) / 100).toFixed(2);
        const quantity = 1;

        // Debugging: Print product details
        //  console.log(`Product ${index + 1}: Price: ${productPrice}, Discount: ${productDiscount}, Quantity: ${quantity}`);

        // Increment total MRP and total discount
        totalMRP += productPrice * quantity;
        totalDiscount += (productPrice - ((productDiscount * quantity)));

        // Create cart item container
        var cartItem = document.createElement("div");
        cartItem.classList.add("offer-box");
        cartItem.classList.add("margin-top-10");
        var innerHTML = `
            <div class="d-flex-c"  style="align-items: start;">
                <div class="product-image-container">
                    <img src="assets/images/products/tshirts/${product.images[0]}" alt="logo" class='cart-pro-img'  />
                    <input class="custom-checkbox" type="checkbox" id="bf${product.id + index}" data-name="brands" style="position: absolute; top: 0;left: 0;margin: 5px 5px;">
                </div>
                <div class="product-details-container" style="padding-left: 12px;">
                    <p class="pro-title">${product.name}</p> 
                    <p class="pro-sub-title">${product.description}</p>  
                    <p class="pro-sub-title">Sold by: ${product.brand}</p> 
                    <label for="size${index}" class="address-to-text">Size:</label>
                    <select name="size${index}" id="size${index}">
                        ${product.size.map(size => `<option value="${size}">${size}</option>`)}
                    </select>   
                    <label for="qty${index}" class="address-to-text">QTY:</label>
                    <select name="qty${index}" id="qty${index}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>   
                    <div class="d-flex-c pt-4" style="align-items: center;">
                        <p id='price${index}' class="pro-d-price">₹${(product.price * (100 - product.discount) / 100).toFixed(2)}</p>
                        <p class="pro-sub-title pd-wish-list-txt"><del>₹${(product.price)}</del></p> 
                        <p class="pro-discount pd-wish-list-txt">${product.discount}% OFF</p> 
                    </div>
                    <div class="pt-4">
                        <p class="address-to-text">7 days <span class="pro-sub-title">returns available</span></p>
                        <p class="pro-sub-title">Delivery By <span class="del-date-text">18 April, 2024</span></p>
                    </div>
                </div>
                <div>
                    <img id="removeIC${index}" src="assets/images/ic-close.png" alt="logo" class="h-icons-big"/>
                </div>
            </div>`;
        // Set the innerHTML of the productDiv
        cartItem.innerHTML = innerHTML;
        // Append cart item container to cart box
        cartBox.appendChild(cartItem);

        // Add event listener to remove button
        var removeBtn = document.getElementById(`removeIC${index}`);
        removeBtn.addEventListener('click', () => {
            removeFromCart(cartItems, index);
        });

        // Add event listener to quantity dropdown
        var quantityDropdown = document.getElementById(`qty${index}`);
        quantityDropdown.addEventListener('change', () => {
            updatePrice(index, quantityDropdown.value);
        });

        var removeAllSelectedBtn = document.getElementById(`all-remove`);
        removeAllSelectedBtn.addEventListener('click', () => {
            if (selectTopCheckBox.checked) {
                // Reverse iteration over checkboxes
                for (let i = checkedCheckboxes.length - 1; i >= 0; i--) {
                    const checkbox = checkedCheckboxes[i];
                    if (checkbox.checked) {
                        // Find the corresponding index in the cartItems array
                        var id = `bf${product.id + index}`;
                        const ind = parseInt(checkbox.id.replace(id, ''));
                        cartItems.splice(ind, 1)
                    }
                }

                // Update local storage and UI
                localStorage.setItem('cartListData', JSON.stringify(cartItems));
                selectTopCheckBox.checked = false
                addCartItemsToBox(cartItems);
            }
        });
    });

    // Update the selected cart items text
    const selectedCartItems = document.getElementById('selected-cart-items');
    selectedCartItems.textContent = `0/${cartItems.length} ITEMS SELECTED`;

    // Add event listener to select all checkbox
    var selectTopCheckBox = document.querySelector('#bfS');
    var checkedCheckboxes = document.querySelectorAll('.custom-checkbox:not(#bfS)');
    selectTopCheckBox.addEventListener('change', () => {
        const isChecked = selectTopCheckBox.checked;
        checkedCheckboxes.forEach(function (checkbox) {
            checkbox.checked = isChecked;
        });
        selectedCartItems.textContent = `${isChecked ? cartItems.length : 0}/${cartItems.length} ITEMS SELECTED`;
    });

    // Add event listener to individual checkboxes
    const checkboxes = document.querySelectorAll('.custom-checkbox:not(#bfS)');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const checkedCheckboxes = document.querySelectorAll('.custom-checkbox:checked:not(#bfS)');
            var a = document.querySelector('#bfS');
            if (checkedCheckboxes.length > 0) {
                a.checked = true;
            } else {
                a.checked = false;
            }
            selectedCartItems.textContent = `${checkedCheckboxes.length}/${cartItems.length} ITEMS SELECTED`;
        });
    });


    // Update prices based on quantity dropdown selection
    function updatePrice(index, quantity) {
        const product = cartItems[index];
        const productPrice = product.price;
        const productDiscount = product.discount;
        const discountedPrice = productPrice * (1 - productDiscount / 100);
        const totalPrice = quantity * discountedPrice;
        const priceElement = document.querySelector(`#price${index}`);
        priceElement.textContent = `₹${totalPrice.toFixed(2)}`;

        totalMRP += productPrice * quantity;
        totalDiscount += ((productPrice - discountedPrice) * quantity);

        totalMRPElement.textContent = `₹${totalMRP.toFixed(2)}`;
        totalDiscountElement.textContent = `₹${totalDiscount.toFixed(2)}`;

        const platformFee = 20; // Example platform fee
        const shippingFee = 0; // Example shipping fee
        const finalTotal = totalMRP - totalDiscount + platformFee;

        finalTotalElement.textContent = `₹${finalTotal.toFixed(2)}`;
    }


    totalMRPElement.textContent = `₹${totalMRP.toFixed(2)}`;
    totalDiscountElement.textContent = `₹${totalDiscount.toFixed(2)}`;

    const platformFee = 20; // Example platform fee
    const shippingFee = 0; // Example shipping fee
    const finalTotal = totalMRP - totalDiscount + platformFee;

    finalTotalElement.textContent = `₹${finalTotal.toFixed(2)}`;


}
var currentSection = 'BAG' /// ADDRESS /// PAYMENT
updateSectionDisplay(currentSection);

// Load cart items from local storage and add them to the box
setTimeout(() => {

    var cartListData = JSON.parse(localStorage.getItem('cartListData')) ?? [];
    addCartItemsToBox(cartListData);

    var redirectTohome = document.getElementById('empty-bag-btn');
    redirectTohome.addEventListener('click', function (e) {
        window.location.href = `/index.html`;
    });
    addToWish.addEventListener('click', function (e) {
        window.location.href = `/wishlist.html`;
    });


    var goToHome = document.getElementById('go-home-btn');
    goToHome.addEventListener('click', function (e) {
        localStorage.removeItem('cartListData');
        window.location.href = `/index.html`;
    });
    var btnPlaceOrder = document.getElementById('place-order');
    btnPlaceOrder.addEventListener('click', function (e) {

        if (currentSection === 'PAYMENT') {
            hideElements(['header-center-cart', 'payment-left', 'address-left', 'c-left', 'r-left']);
            orderSuccess.style.display = 'flex';
        } else if (currentSection === 'ADDRESS') {
            currentSection = 'PAYMENT';
            btnPlaceOrder.textContent = 'PROCEED';
            hideElements(['c-left', 'address-left']);
            paymentLeft.style.display = 'flex';
        } else {
            currentSection = 'ADDRESS';
            btnPlaceOrder.textContent = 'CONTINUE';
            hideElements(['c-left']);
            addressLeft.style.display = 'flex';
        }
        updateSectionDisplay(currentSection);
    });
    var logoBtn = document.getElementById('logo');
    if (logoBtn) {
        logoBtn.addEventListener('click', function (e) {
            window.location.href = `/index.html`;
        });
    }

}, 300);
function hideElements(elementIds) {
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });
}
function updateSectionDisplay(currentSection) {
    const sections = document.querySelectorAll('.page-name-item');
    sections.forEach(section => {
        if (section.classList.contains(currentSection.toLowerCase() + '-section')) {
            section.querySelector('.sec-name').classList.remove('grey-bag-grey-text');
            section.querySelector('.hr-bottom-line').classList.remove('hide-line');
        } else {
            section.querySelector('.sec-name').classList.add('grey-bag-grey-text');
            section.querySelector('.hr-bottom-line').classList.add('hide-line');
        }
    });
}