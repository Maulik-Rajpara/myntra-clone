const wishlistProduct = document.getElementById('wishlist-product');
var wishlistRoot = document.getElementById('wishlist-root');
var ctnShopping = document.getElementById('ctn-shop-btn');
var wishlist = document.getElementById('wishlist-empty');
setTimeout(() => {
    var logoBtn = document.getElementById('logo');

    wishlist.style.display = 'none';
    if (logoBtn) {
        logoBtn.addEventListener('click', function (e) {
            window.location.href = `/index.html`;
        });
    }
    if (ctnShopping) {
        ctnShopping.addEventListener('click', function (e) {
            window.location.href = `/product-list.html`;
        });
    }
    var wishlistData = JSON.parse(localStorage.getItem('wishlist')) ?? [];
    if (wishlistData.length == 0) {
        wishlist.style.display = 'flex';
        wishlistRoot.style.display = 'none'
        return;
    }

    wishlistProductData(wishlistData);


}, 300);


function wishlistProductData(wishlistData) {
    if (wishlistData.length == 0) {
        wishlist.style.display = 'flex';
        wishlistRoot.style.display = 'none'
        return;
    }
    if (wishlistProduct) {
        wishlistProduct.innerHTML = '';
        wishlistData.forEach((product, index) => {

            const rndInt = randomIntFromInterval(0, 4);
            // Create product item
            const productItem = document.createElement('div');
            productItem.classList.add('similar-product-item');

            // Product image
            const productImgRoot = document.createElement('div');
            productImgRoot.classList.add('product-img-root');
            const productImg = document.createElement('img');
            productImg.classList.add('product-img');
            productImg.alt = index;
            productImg.src = 'assets/images/products/tshirts/' + product.images[rndInt];
            // Assuming there's only one image URL
            productImgRoot.appendChild(productImg);

            const removeWishlist = document.createElement('div');
            removeWishlist.classList.add('remove-ic');
            const imgRW = document.createElement('img');
            imgRW.classList.add('secure-ic');
            imgRW.src = 'assets/images/close-button.png'
            removeWishlist.appendChild(imgRW)
            productImgRoot.appendChild(removeWishlist)


            const rateBg = document.createElement('p');
            rateBg.classList.add('move-bag');
            rateBg.textContent = 'MOVE TO BAG'
            const span = document.createElement('span');
            const img = document.createElement('img');
            img.classList.add('ic-star');
            img.src = 'assets/images/ic-shopping.png'
            span.append(img)
            rateBg.append(span)
            productItem.appendChild(productImgRoot);
            productImgRoot.appendChild(rateBg)



            // Product content
            const productContent = document.createElement('div');
            productContent.classList.add('product-content');
            const proTitle = document.createElement('p');
            proTitle.classList.add('pro-title');
            proTitle.textContent = product.brand;
            const pt4_1 = document.createElement('div');
            pt4_1.classList.add('pt-4');
            const proSubTitle = document.createElement('p');
            proSubTitle.classList.add('pro-sub-title');
            proSubTitle.textContent = product.name;
            const pt4_2 = document.createElement('div');
            pt4_2.classList.add('pt-4');
            const proPrice = document.createElement('p');
            proPrice.classList.add('pro-title');
            proPrice.textContent = `Rs. ${product.price}`;
            const proPriceLight = document.createElement('span');
            proPriceLight.classList.add('pro-price-light');
            proPriceLight.innerHTML = `<del>Rs. ${product.price + (product.discount / 100 * product.price)}</del>`; // Calculate discounted price
            const proDiscount = document.createElement('span');
            proDiscount.classList.add('pro-discount');
            proDiscount.textContent = `(${product.discount}% OFF)`;
            proPrice.appendChild(proPriceLight);
            proPrice.appendChild(proDiscount);
            productContent.appendChild(proTitle);
            productContent.appendChild(pt4_1);
            productContent.appendChild(proSubTitle);
            productContent.appendChild(pt4_2);
            productContent.appendChild(proPrice);
            productItem.appendChild(productContent);


            // Append product item to the container
            wishlistProduct.appendChild(productItem);
            rateBg.addEventListener('click', function (event) {
                const productDetail = wishlistData.find(obj => obj.id === product.id);
                addToBag(event, productDetail)

            });
            imgRW.addEventListener('click', function (event) {
                const productDetail = wishlistData.find(obj => obj.id === product.id);
                removeFromWishlist(wishlistData, productDetail)

            });

        });
    }
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function addToBag(event, productDetail) {
    var cartListData = JSON.parse(localStorage.getItem('cartListData')) || [];
    // Push productDetail to cartListData
    const existingItemIndex = cartListData.findIndex(item => item.id === productDetail.id);
    if (existingItemIndex !== -1) {
        cartListData[existingItemIndex] = productDetail;
    } else {
        cartListData.push(productDetail);
    }
    // Store cartListDataJSON in local storage
    localStorage.setItem('cartListData', JSON.stringify(cartListData));

    window.location.href = `/cart-page.html`;
}

function removeFromWishlist(wishlist, index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    wishlistProductData(wishlist)
}