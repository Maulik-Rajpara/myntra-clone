const productData =
    [
        {
            "id": 1,
            "name": "HRX Boys Black Graphic T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 499,
            "discount": 10,
            "currency": "INR",
            "color": "Black",
            "size": ["S", "M", "L", "XL"],
            "material": "Cotton",
            "description": "Stylish black graphic T-shirt from HRX for boys.",
            "images": ["black1.png", "black2.png", "black3.png", "black4.png", "black5.png"],
            "rating": 4.2,
            "reviews": 100,
            "availability": true
        },
        {
            "id": 2,
            "name": "Tommy Hilfiger Boys Green Polo T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 599,
            "discount": 15,
            "currency": "INR",
            "color": "Green",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic green polo T-shirt from Tommy Hilfiger for boys.",
            "images": ["green1.png", "green2.png", "green3.png", "green4.png", "green5.png"],
            "rating": 4.5,
            "reviews": 120,
            "availability": true
        },
        {
            "id": 3,
            "name": "Roadster Boys White Henley T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 399,
            "discount": 20,
            "currency": "INR",
            "color": "White",
            "size": ["M", "L", "XL"],
            "material": "Cotton",
            "description": "Comfortable white henley T-shirt from Roadster for boys.",
            "images": ["white1.png", "white2.png", "white3.png", "white4.png", "white5.png"],
            "rating": 4.0,
            "reviews": 80,
            "availability": true
        },
        {
            "id": 4,
            "name": "HRX Boys Blue Striped T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 449,
            "discount": 10,
            "currency": "INR",
            "color": "Blue",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Cool blue striped T-shirt from HRX for boys.",
            "images": ["blue1.png", "blue2.png", "blue3.png", "blue4.png", "blue5.png"],
            "rating": 4.3,
            "reviews": 90,
            "availability": true
        },
        {
            "id": 5,
            "name": "Tommy Hilfiger Boys Red Printed T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 549,
            "discount": 15,
            "currency": "INR",
            "color": "Red",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Vibrant red printed T-shirt from Tommy Hilfiger for boys.",
            "images": ["red1.png", "red2.png", "red3.png", "red4.png", "red5.png"],
            "rating": 4.7,
            "reviews": 100,
            "availability": true
        },
        {
            "id": 6,
            "name": "Roadster Boys Black Henley T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 499,
            "discount": 10,
            "currency": "INR",
            "color": "Black",
            "size": ["S", "M", "L", "XL"],
            "material": "Cotton",
            "description": "Classic black henley T-shirt from Roadster for boys.",
            "images": ["black2.png", "black3.png", "black4.png", "black5.png", "black1.png"],
            "rating": 4.1,
            "reviews": 85,
            "availability": true
        },
        {
            "id": 7,
            "name": "HRX Boys Green Camouflage T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 599,
            "discount": 10,
            "currency": "INR",
            "color": "Green",
            "size": ["M", "L", "XL"],
            "material": "Cotton",
            "description": "Stylish green camouflage T-shirt from HRX for boys.",
            "images": ["green2.png", "green3.png", "green4.png", "green5.png", "green1.png"],
            "rating": 4.4,
            "reviews": 95,
            "availability": true
        },
        {
            "id": 8,
            "name": "Tommy Hilfiger Boys White Graphic T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 499,
            "discount": 15,
            "currency": "INR",
            "color": "White",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Cool white graphic T-shirt from Tommy Hilfiger for boys.",
            "images": ["white2.png", "white3.png", "white4.png", "white5.png", "white1.png"],
            "rating": 4.6,
            "reviews": 110,
            "availability": true
        },
        {
            "id": 9,
            "name": "Roadster Boys Blue Striped Polo T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 549,
            "discount": 20,
            "currency": "INR",
            "color": "Blue",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Stylish blue striped polo T-shirt from Roadster for boys.",
            "images": ["blue2.png", "blue3.png", "blue4.png", "blue5.png", "blue1.png"],
            "rating": 4.5,
            "reviews": 105,
            "availability": true
        },
        {
            "id": 10,
            "name": "HRX Boys Red Printed T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 449,
            "discount": 10,
            "currency": "INR",
            "color": "Red",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Vibrant red printed T-shirt from HRX for boys.",
            "images": ["red1.png", "red2.png", "red3.png", "red4.png", "red5.png"],
            "rating": 4.2,
            "reviews": 70,
            "availability": true
        },
        {
            "id": 11,
            "name": "Tommy Hilfiger Boys Black Henley T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 499,
            "discount": 20,
            "currency": "INR",
            "color": "Black",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic black henley T-shirt from Tommy Hilfiger for boys.",
            "images": ["black1.png", "black2.png", "black3.png", "black4.png", "black5.png"],
            "rating": 4.7,
            "reviews": 90,
            "availability": true
        },
        {
            "id": 12,
            "name": "Roadster Boys White Graphic T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 499,
            "discount": 15,
            "currency": "INR",
            "color": "White",
            "size": ["S", "M", "L", "XL"],
            "material": "Cotton",
            "description": "Cool white graphic T-shirt from Roadster for boys.",
            "images": ["white2.png", "white3.png", "white4.png", "white5.png", "white1.png"],
            "rating": 4.4,
            "reviews": 90,
            "availability": true
        },
        {
            "id": 13,
            "name": "HRX Boys Blue Polo T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 549,
            "discount": 15,
            "currency": "INR",
            "color": "Blue",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Stylish blue polo T-shirt from HRX for boys.",
            "images": ["blue1.png", "blue2.png", "blue3.png", "blue4.png", "blue5.png"],
            "rating": 4.3,
            "reviews": 85,
            "availability": true
        },
        {
            "id": 14,
            "name": "Tommy Hilfiger Boys Green Striped T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 499,
            "discount": 10,
            "currency": "INR",
            "color": "Green",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Stylish green striped T-shirt from Tommy Hilfiger for boys.",
            "images": ["green1.png", "green2.png", "green3.png", "green4.png", "green5.png"],
            "rating": 4.2,
            "reviews": 80,
            "availability": true
        },
        {
            "id": 15,
            "name": "Roadster Boys Red Graphic T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 499,
            "discount": 20,
            "currency": "INR",
            "color": "Red",
            "size": ["S", "M", "L", "XL"],
            "material": "Cotton",
            "description": "Cool red graphic T-shirt from Roadster for boys.",
            "images": ["red1.png", "red2.png", "red3.png", "red4.png", "red5.png"],
            "rating": 4.6,
            "reviews": 95,
            "availability": true
        },
        {
            "id": 16,
            "name": "HRX Boys White Polo T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 549,
            "discount": 15,
            "currency": "INR",
            "color": "White",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic white polo T-shirt from HRX for boys.",
            "images": ["white2.png", "white3.png", "white4.png", "white5.png", "white1.png"],
            "rating": 4.5,
            "reviews": 100,
            "availability": true
        },
        {
            "id": 17,
            "name": "Tommy Hilfiger Boys Black Polo T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 549,
            "discount": 20,
            "currency": "INR",
            "color": "Black",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic black polo T-shirt from Tommy Hilfiger for boys.",
            "images": ["black1.png", "black2.png", "black3.png", "black4.png", "black5.png"],
            "rating": 4.4,
            "reviews": 95,
            "availability": true
        },
        {
            "id": 18,
            "name": "Roadster Boys Blue Printed T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 499,
            "discount": 10,
            "currency": "INR",
            "color": "Blue",
            "size": ["S", "M", "L", "XL"],
            "material": "Cotton",
            "description": "Vibrant blue printed T-shirt from Roadster for boys.",
            "images": ["blue1.png", "blue2.png", "blue3.png", "blue4.png", "blue5.png"],
            "rating": 4.3,
            "reviews": 90,
            "availability": true
        },
        {
            "id": 19,
            "name": "HRX Boys Red Striped T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 449,
            "discount": 15,
            "currency": "INR",
            "color": "Red",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Stylish red striped T-shirt from HRX for boys.",
            "images": ["red1.png", "red2.png", "red3.png", "red4.png", "red5.png"],
            "rating": 4.7,
            "reviews": 110,
            "availability": true
        },
        {
            "id": 20,
            "name": "Tommy Hilfiger Boys Green Henley T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 499,
            "discount": 20,
            "currency": "INR",
            "color": "Green",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic green henley T-shirt from Tommy Hilfiger for boys.",
            "images": ["green1.png", "green2.png", "green3.png", "green4.png", "green5.png"],
            "rating": 4.3,
            "reviews": 85,
            "availability": true
        },
        {
            "id": 21,
            "name": "Roadster Boys White Striped T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 499,
            "discount": 15,
            "currency": "INR",
            "color": "White",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Stylish white striped T-shirt from Roadster for boys.",
            "images": ["white2.png", "white3.png", "white4.png", "white5.png", "white1.png"],
            "rating": 4.6,
            "reviews": 95,
            "availability": true
        },
        {
            "id": 22,
            "name": "HRX Boys Black Polo T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 549,
            "discount": 10,
            "currency": "INR",
            "color": "Black",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic black polo T-shirt from HRX for boys.",
            "images": ["black1.png", "black2.png", "black3.png", "black4.png", "black5.png"],
            "rating": 4.5,
            "reviews": 100,
            "availability": true
        },
        {
            "id": 23,
            "name": "Tommy Hilfiger Boys Blue Henley T-shirt",
            "brand": "Tommy Hilfiger",
            "category": "T-Shirts",
            "price": 499,
            "discount": 15,
            "currency": "INR",
            "color": "Blue",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic blue henley T-shirt from Tommy Hilfiger for boys.",
            "images": ["blue1.png", "blue2.png", "blue3.png", "blue4.png", "blue5.png"],
            "rating": 4.4,
            "reviews": 90,
            "availability": true
        },
        {
            "id": 24,
            "name": "Roadster Boys Red Polo T-shirt",
            "brand": "Roadster",
            "category": "T-Shirts",
            "price": 499,
            "discount": 20,
            "currency": "INR",
            "color": "Red",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Classic red polo T-shirt from Roadster for boys.",
            "images": ["red1.png", "red2.png", "red3.png", "red4.png", "red5.png"],
            "rating": 4.7,
            "reviews": 95,
            "availability": true
        },
        {
            "id": 25,
            "name": "HRX Boys Green Printed T-shirt",
            "brand": "HRX by Hrithik Roshan",
            "category": "T-Shirts",
            "price": 449,
            "discount": 10,
            "currency": "INR",
            "color": "Green",
            "size": ["S", "M", "L"],
            "material": "Cotton",
            "description": "Vibrant green printed T-shirt from HRX for boys.",
            "images": ["green1.png", "green2.png", "green3.png", "green4.png", "green5.png"],
            "rating": 4.6,
            "reviews": 100,
            "availability": true
        }
    ]

const productContainer = document.querySelector('.fl-right-sub');
displayProductData(productData);


// Loop through the product data and create product elements
function displayProductData(productData) {
    if (productContainer) {
        productContainer.innerHTML = '';
        productData.forEach(product => {
            const rndInt = randomIntFromInterval(0, 4);

            // Create product item
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            // Product image
            const productImgRoot = document.createElement('div');
            productImgRoot.classList.add('product-img-root');
            const productImg = document.createElement('img');
            productImg.classList.add('product-img');
            productImg.alt = rndInt;
            productImg.src = 'assets/images/products/tshirts/' + product.images[rndInt];
            // Assuming there's only one image URL
            productImgRoot.appendChild(productImg);

            const rateBg = document.createElement('p');
            rateBg.classList.add('pro-rate');
            rateBg.textContent = product.rating
            const span = document.createElement('span');
            const img = document.createElement('img');
            img.classList.add('ic-star');
            img.src = 'assets/images/ic-star.png'
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

            /// click on event
            productItem.addEventListener('click', function (event) {
                const productDetail = productData.find(obj => obj.id === product.id);
                window.location.href = `/product-detail.html?productId=${productDetail.id}`;

            });

            // Append product item to the container
            productContainer.appendChild(productItem);
        });
    }
}

const similarProduct = document.getElementById('similar-products');
function similarProductData(productData) {
    if (similarProduct) {
        similarProduct.innerHTML = '';
        productData.forEach((product, index) => {
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
            productImg.src = 'assets/images/products/tshirts/' + product.images[index];
            // Assuming there's only one image URL
            productImgRoot.appendChild(productImg);

            const rateBg = document.createElement('p');
            rateBg.classList.add('pro-rate');
            rateBg.textContent = product.rating
            const span = document.createElement('span');
            const img = document.createElement('img');
            img.classList.add('ic-star');
            img.src = 'assets/images/ic-star.png'
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

            /// click on event
            productItem.addEventListener('click', function (event) {
                const productDetail = productData.find(obj => obj.id === product.id);
                window.location.href = `/product-detail.html?productId=${productDetail.id}`;

            });

            // Append product item to the container
            similarProduct.appendChild(productItem);
        });
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


setTimeout(() => {
    initData(false);

    proDetailData()



}, 300);

function proDetailData() {
    if (window.location.pathname === '/product-detail.html') {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const encodedProductDetail = urlParams.get('productId');
        const proID = JSON.parse(decodeURIComponent(encodedProductDetail));
        if (proID != null) {
            console.log(proID);
            const productDetail = productData.find(obj => obj.id === proID);
            const pCPName = document.querySelector('.r-n-span');
            pCPName.textContent = `${productDetail.brand} Tshirts > More By Roadster ${productDetail.brand}`;

            /// Added IMAGES
            var imageUrls = [
                'assets/images/products/tshirts/black_collection/black1.png',
                'assets/images/products/tshirts/black_collection/black02.png',
                'assets/images/products/tshirts/black_collection/black03.png',
                'assets/images/products/tshirts/black_collection/black04.png',
                'assets/images/products/tshirts/black_collection/black05.png'
            ];
            // Get the pro-detail-left element

            var proDetailLeft = document.querySelector('.pro-detail-left');

            // Loop through the image URLs array and create img elements
            imageUrls.forEach(function (url) {
                var img = document.createElement('img');
                img.src = url;
                img.classList.add('pro-d-img'); // Add the pro-d-img class
                proDetailLeft.appendChild(img);
            });

            /// pro-name 
            var proName = document.getElementById('pro-name');
            if (proName) {
                proName.textContent = `${productDetail.brand}`;
            }
            var proSubTitle = document.getElementById('pro-sub-title');
            proSubTitle.textContent = `${productDetail.description}`;

            var proDRateElement = document.getElementById("pro-d-rate");
            proDRateElement.innerText = `${productDetail.rating}`;

            var starImage = document.createElement("img");
            starImage.className = "ic-star";
            starImage.src = "assets/images/ic-star.png";
            var ratingSpan = document.createElement("span");
            // Append the star image to the rating span
            ratingSpan.appendChild(starImage);
            // Append the rating span to the pro-d-rate element
            proDRateElement.appendChild(ratingSpan);
            // Select the element with the ID "rating"
            var ratingElement = document.createElement("span");
            ratingElement.textContent = ` | 8.5k Ratings`;
            proDRateElement.appendChild(ratingElement);

            /// pro price
            var proDprice = document.getElementById('pro-d-price');
            proDprice.textContent = `₹${productDetail.price}  `;

            var proPriceLight = document.createElement('span');
            proPriceLight.classList.add('pro-price-light')
            proPriceLight.classList.add('pro-sub-font')

            proPriceLight.innerHTML = ` MRP <del>₹${productDetail.price + (productDetail.discount / 100 * productDetail.price)}</del>  `; // Calculate discounted price
            const proDiscount = document.createElement('span');
            proDiscount.classList.add('pro-discount');
            proDiscount.textContent = `(${productDetail.discount}% OFF)`;
            proDiscount.classList.add('pro-sub-font')
            proDprice.appendChild(proPriceLight);
            proDprice.appendChild(proDiscount);

            /// added sizes
            var sizeContainer = document.getElementById("pd-size-item");

            // Loop through each size in the product data
            productDetail.size.forEach(function (size) {
                // Create a new span element for the size
                var sizeElement = document.createElement("div");
                sizeElement.textContent = size;
                // Add any necessary classes or attributes
                sizeElement.classList.add('pd-size-item')// Append the size element to the size container
                sizeContainer.appendChild(sizeElement);
            });


            /// for similar product
            let similarList = productData.filter(product => product.color === productDetail.color)
            similarProductData(similarList);

            /// add to bag
            var addToBagBtn = document.getElementById("add-to-bag");
            addToBagBtn.addEventListener('click', function (event) {
                addToBag(event, productDetail)
            });

            /// add to wishlist
            var addToWhishlist = document.getElementById("add-to-wishlist");
            addToWhishlist.addEventListener('click', function (event) {
                addToWhishlistData(event, productDetail)
            });
        }
    }
}

function initData(clearCheckboxes) {
    if (window.location.pathname != '/product-detail.html') {
        const urlWithoutQueryParams = window.location.pathname;
        // Get the current URL without query parameters
        history.replaceState({}, document.title, urlWithoutQueryParams);
    }
    var containers = document.getElementsByClassName('custom-checkbox');
    var discountCheck = document.getElementsByClassName('custom-radio');
    // Objects to store selected filters
    var selectedFilters = {
        colors: [],
        brands: [],
        discount: [],
        pricerange: [],
        category: []
    };

    // Loop through each container element
    for (var i = 0; i < containers.length; i++) {
        // Add event listener to each container element
        containers[i].addEventListener('change', function (event) {
            const selectedValue = event.target.parentElement.querySelector('.filter-tags').textContent;
            const filterType = event.target.dataset.name;

            if (event.target.checked) {
                // Add the selected value to the corresponding filter array
                selectedFilters[filterType].push(selectedValue);
            } else {
                // Remove the selected value from the corresponding filter array
                const index = selectedFilters[filterType].indexOf(selectedValue);
                if (index !== -1) {
                    selectedFilters[filterType].splice(index, 1);
                }
            }

            // Call function to apply filter with the selected filters
            applyFilter(selectedFilters);
        });
    }

    for (var i = 0; i < discountCheck.length; i++) {
        // Add event listener to each container element
        discountCheck[i].addEventListener('change', function (event) {
            const selectedValue = event.target.parentElement.querySelector('.filter-tags').textContent;
            const filterType = event.target.dataset.name;

            if (event.target.checked) {
                selectedFilters['discount'] = [];
                // Add the selected value to the corresponding filter array
                selectedFilters[filterType].push(selectedValue);
            } else {
                // Remove the selected value from the corresponding filter array
                const index = selectedFilters[filterType].indexOf(selectedValue);
                if (index !== -1) {
                    selectedFilters[filterType].splice(index, 1);
                }
            }

            // Call function to apply filter with the selected filters
            applyFilter(selectedFilters);
        });
    }


}
function applyFilter(filters) {
    // Implement your filter logic here based on the selected filters
    console.log("Filters applied:", filters);
    var cF = document.getElementById('clear_filter');

    // Filter products based on each selected filter type
    let filteredProducts = productData;
    let clearFilter = true;
    if (filters.colors.length > 0) {
        clearFilter = false;
        filteredProducts = filterProductsByColor(filteredProducts, filters.colors);
    }
    if (filters.brands.length > 0) {
        clearFilter = false;
        filteredProducts = filterProductsByBrand(filteredProducts, filters.brands);
    }
    if (filters.category.length > 0) {
        clearFilter = false;
        filteredProducts = filterProductsByCategory(filteredProducts, filters.category);
    }
    if (filters.pricerange.length > 0) {
        clearFilter = false;
        filteredProducts = filterProductsByPriceRange(filteredProducts, filters.pricerange);
    }
    if (filters.discount.length > 0) {
        clearFilter = false;
        filteredProducts = filterProductsByDiscount(filteredProducts, filters.discount);
    }
    // Add filtering logic for other filter types such as discount and size
    if (!clearFilter) {
        cF.textContent = 'CLEAR FILTER';
    }
    cF.addEventListener('click', function (event) {
        clearFilters(event);
    });
    displayProductData(filteredProducts);
}

// Filter by color
function filterProductsByColor(products, selectedColors) {
    return products.filter(product => selectedColors.includes(product.color));
}
// Filter by brand
function filterProductsByBrand(products, selectedBrands) {
    return products.filter(product => selectedBrands.includes(product.brand));
}
function filterProductsByCategory(products, selectedColors) {
    return products.filter(product => selectedColors.includes(product.category));
}
// Filter by filterProductsByPriceRange
function filterProductsByPriceRange(products, priceRangeString) {
    priceRangeString = String(priceRangeString);

    const prices = priceRangeString.match(/\d+/g);

    if (!prices || prices.length !== 2) {
        console.error("Invalid price range format");
        return [];
    }

    // Convert the extracted strings to numbers
    const minPrice = parseInt(prices[0]);
    const maxPrice = parseInt(prices[1]);

    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
function filterProductsByDiscount(products, discounts) {
    discounts = String(discounts);
    // Extract numbers from the string using match
    const numbers = discounts.match(/\d+/g);
    // Convert array of strings to array of numbers
    var discountPrice = numbers ? numbers.map(Number) : [];
    console.log("discounts " + discountPrice)
    return products.filter(product => product.discount >= discountPrice && product.discount <= discountPrice + 10);
}


// Call a function to apply filters with an empty filter object or update UI accordingly
function clearFilters(e) {
    selectedFilters = {
        colors: [],
        brands: [],
        discount: [],
        pricerange: [],
        category: []
    };

    e.target.textContent = '';
    uncheckAllCheckboxes();
    // Call a function to apply filters with an empty filter object or update UI accordingly
    applyFilter(selectedFilters);
}

function uncheckAllCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
/// CART DATA ADD
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

function addToWhishlistData(event, wishlistItem) {
    var wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    // Push productDetail to cartListData
    const existingItemIndex = wishlistData.findIndex(item => item.id === wishlistItem.id);
    if (existingItemIndex !== -1) {
        wishlistData[existingItemIndex] = wishlistItem;
    } else {
        wishlistData.push(wishlistItem);
    }
    console.log("wishlistData " + JSON.stringify(wishlistData))
    // Store cartListDataJSON in local storage
    localStorage.setItem('wishlist', JSON.stringify(wishlistData));

    window.location.href = `/wishlist.html`;
}