document.addEventListener("DOMContentLoaded", function () {
    function generateMenu() {
        // Initialize the menu object
        let menu = [
            {
                "MEN": [
                    {
                        "Category": "Topwear",
                        "SubCategory": [
                            { "name": "Tshirt" },
                            { "name": "Casual Shirt" },
                            { "name": "Formal Shirt" },
                            { "name": "Sweetshirts" },
                            { "name": "Sweaters" },
                            { "name": "Jackets" },
                            { "name": "Suits" },
                            { "name": "Rain Jackets" }
                        ]
                    },
                    {
                        "Category": "Indian & Festive Wear",
                        "SubCategory": [
                            { "name": "Kurtas & Kurta Sets" },
                            { "name": "Sherwanis" },
                            { "name": "Nehru Jackets" },
                            { "name": "Dhotis" }
                        ]
                    },
                    {
                        "Category": "Bottomwear",
                        "SubCategory": [
                            { "name": "Jeans" },
                            { "name": "Casual Trousers" },
                            { "name": "Formal Trousers" },
                            { "name": "Shorts" },
                            { "name": "Track Pants & Joggers" }
                        ]
                    },
                    {
                        "Category": "Innerwear & Sleepwear",
                        "SubCategory": [
                            { "name": "Briefs & Trunks" },
                            { "name": "Boxers" },
                            { "name": "Vests" },
                            { "name": "Sleepwear & Loungewear" },
                            { "name": "Thermals" }
                        ]
                    },
                    {
                        "Category": "Footwear",
                        "SubCategory": [
                            { "name": "Casual Shoes" },
                            { "name": "Sports Shoes" },
                            { "name": "Formal Shoes" },
                            { "name": "Sneakers" },
                            { "name": "Sandle & Floaters" },
                            { "name": "Flip Flops" },
                            { "name": "Socks" }
                        ]
                    },
                    {
                        "Category": "Sports & Active Wear",
                        "SubCategory": [
                            { "name": "Sports Shoes" },
                            { "name": "Sports Sandles" },
                            { "name": "Active Tshirt" },
                            { "name": "Track Pants & Shorts" },
                            { "name": "Tracksuits" },
                            { "name": "Jackets & Sweatshirts" },
                            { "name": "Sports Accessories" },
                            { "name": "Swimmers" }
                        ]
                    },
                    {
                        "Category": "Gadgets",
                        "SubCategory": [
                            { "name": "Smart Wearables" },
                            { "name": "Fintess Gadgets" },
                            { "name": "Headphones" },
                            { "name": "Speakers" }
                        ]
                    },
                    {
                        "Category": "Fashion Accessories",
                        "SubCategory": [
                            { "name": "Wallets" },
                            { "name": "Belts" },
                            { "name": "Perfumes & Body Mists" },
                            { "name": "Trimmers" },
                            { "name": "Deodornates" },
                            { "name": "Ties, Cuffclinks & Pocket Square" },
                            { "name": "Accessories Gift Sets" },
                            { "name": "Caps & Hats" },
                            { "name": "Muffelers, Scarves & Gloves" },
                            { "name": "Phone Cases" },
                            { "name": "Ring & Whristwear" },
                            { "name": "Helmets" }
                        ]
                    }
                ]
            },
            {
                "WOMEN": [
                    {
                        "Category": "Indian & Fusinon Wear",
                        "SubCategory": [
                            { "name": "Kurtas & Suits" },
                            { "name": "Kurtis, Tunics & Tops" },
                            { "name": "Sarees" },
                            { "name": "Ethnic Wear" },
                            { "name": "Leggings, Salwars & Churidars" },
                            { "name": "Skirts & Plazzos" },
                            { "name": "Dress Materials" },
                            { "name": "Lehenga Cholis" },
                            { "name": "Duppatas & Shawls" },
                            { "name": "Jackets" }
                        ]
                    },
                    {
                        "Category": "Footwear",
                        "SubCategory": [
                            { "name": "Flats" },
                            { "name": "Casual Shoes" },
                            { "name": "Heels" },
                            { "name": "Boots" },
                            { "name": "Sports Shoes" }
                        ]
                    },
                    {
                        "Category": "Western Wear",
                        "SubCategory": [
                            { "name": "Dresses" },
                            { "name": "Tops" },
                            { "name": "Tshirts" },
                            { "name": "Jeans" },
                            { "name": "Trousers & Capris" },
                            { "name": "Shorts & Skirts" },
                            { "name": "Co-ords" },
                            { "name": "Playsuits" },
                            { "name": "Jumpsuits" },
                            { "name": "Shrugs" },
                            { "name": "Sweaters & Sweatshirts" },
                            { "name": "Jackets & Coats" },
                            { "name": "Blazers & Waistcoats" }
                        ]
                    },
                    {
                        "Category": "Lingeres & Sleepwear",
                        "SubCategory": [
                            { "name": "Bra" },
                            { "name": "Briefs" },
                            { "name": "Shapwear" },
                            { "name": "Sleepwear & Loungewear" },
                            { "name": "Swimmer" },
                            { "name": "Camisoles & Thermals" }
                        ]
                    },
                    {
                        "Category": "Beauty & Personal Care",
                        "SubCategory": [
                            { "name": "Makeup" },
                            { "name": "Skincare" },
                            { "name": "Premium Beauty" },
                            { "name": "Lipsticks" },
                            { "name": "Fragrances" }
                        ]
                    },
                    {
                        "Category": "Gadgets",
                        "SubCategory": [
                            { "name": "Smart Wearables" },
                            { "name": "Fintess Gadgets" },
                            { "name": "Headphones" },
                            { "name": "Speakers" }
                        ]
                    },
                    {
                        "Category": "Sports & Active Wear",
                        "SubCategory": [
                            { "name": "Clothing" },
                            { "name": "Footwear" },
                            { "name": "Sports Accessories" },
                            { "name": "Sports Equipment" }
                        ]
                    },
                    {
                        "Category": "Jewellery",
                        "SubCategory": [
                            { "name": "Fashion Jewellery" },
                            { "name": "Fintess Jewellery" },
                            { "name": "Earrings" }
                        ]
                    }
                ]
            },
            {
                "KIDS": [
                    {
                        "Category": "Boys Clothing",
                        "SubCategory": [
                            { "name": "T-Shirts" },
                            { "name": "Shirts" },
                            { "name": "Shorts" },
                            { "name": "Jeans" },
                            { "name": "Trousers" },
                            { "name": "Clothing Sets" },
                            { "name": "Ethinic Wear" },
                            { "name": "Track Pants & Pyjamas" },
                            { "name": "Jacket, Sweater & Sweatshiirts" },
                            { "name": "Party Wear" },
                            { "name": "Innerwear & Thermals" },
                            { "name": "Nightwear & Loungewear" },
                            { "name": "Value packs" }
                        ]
                    },
                    {
                        "Category": "Girls Clothing",
                        "SubCategory": [
                            { "name": "Dresses" },
                            { "name": "Tops" },
                            { "name": "Tshirts" },
                            { "name": "Clothing Sets" },
                            { "name": "Lehenga Choli" },
                            { "name": "Kurta Sets" },
                            { "name": "Party Wear" },
                            { "name": "Dungarees & Jumpsuits" },
                            { "name": "Skirts & Shorts" },
                            { "name": "Tights & Leggings" },
                            { "name": "Jeans, Trousers & Capris" },
                            { "name": "Jackets, Sweaters & Sweatshirts" },
                            { "name": "Innerwear & Thermals" },
                            { "name": "Nightwear & Loungewear" },
                            { "name": "Value Packs" }
                        ]
                    },
                    {
                        "Category": "Footwear",
                        "SubCategory": [
                            { "name": "Casual Shoes" },
                            { "name": "Flipflops" },
                            { "name": "Sports Shoes" },
                            { "name": "Flats" },
                            { "name": "Sandals" },
                            { "name": "Heels" },
                            { "name": "School Shoes" },
                            { "name": "Socks" }
                        ]
                    },
                    {
                        "Category": "Toys & Games",
                        "SubCategory": [
                            { "name": "Learning & Development" },
                            { "name": "Activity Toys" },
                            { "name": "Soft Toys" },
                            { "name": "Action Figure / Play Set" }
                        ]
                    },
                    {
                        "Category": "Infants",
                        "SubCategory": [
                            { "name": "Bodysuits" },
                            { "name": "Rompers & Sleepsuits" },
                            { "name": "Clothing Sets" },
                            { "name": "Tshirts & Tops" },
                            { "name": "Dresses" },
                            { "name": "Bottom Wear" },
                            { "name": "Winter Wear" },
                            { "name": "Innerwear & Sleepwear" },
                            { "name": "Infant Care" }
                        ]
                    },
                    {
                        "Category": "Home & Bath",
                        "SubCategory": []
                    },
                    {
                        "Category": "Personal Care",
                        "SubCategory": []
                    }
                ]
            },
            {
                "HOME & LIVING": [
                    {
                        "Category": "Bed Linen & Furnishing",
                        "SubCategory": [
                            { "name": "Bed Runners" },
                            { "name": "Mattress Protectors" },
                            { "name": "Bedsheets" },
                            { "name": "Bedding Sets" },
                            { "name": "Blankets, Quilts & Dohars" },
                            { "name": "Pillows & Piloows Covers" },
                            { "name": "Bed Covers" },
                            { "name": "Diwan Sets" },
                            { "name": "Chair Pads & Covers" },
                            { "name": "Sofa Covers" }
                        ]
                    },
                    {
                        "Category": "Flooring",
                        "SubCategory": [
                            { "name": "Floor Runners" },
                            { "name": "Carpets" },
                            { "name": "Floor Mats & Dhurries" },
                            { "name": "Door Mats" }
                        ]
                    },
                    {
                        "Category": "Bath",
                        "SubCategory": [
                            { "name": "Bath Towels" },
                            { "name": "Hand & Face Towels" },
                            { "name": "Beach Towels" },
                            { "name": "Towels sets" },
                            { "name": "Bath Rugs" },
                            { "name": "Bath Robes" },
                            { "name": "Bathroom Accessories" },
                            { "name": "Shower Curtains" }
                        ]
                    },
                    {
                        "Category": "Lamps & Lighting",
                        "SubCategory": [
                            { "name": "Floor Lamps" },
                            { "name": "Ceiling Lamps" },
                            { "name": "Table Lamps" },
                            { "name": "Wall Lamps" },
                            { "name": "Outdoor Lamps" },
                            { "name": "String Lights" }
                        ]
                    },
                    {
                        "Category": "Home Decor",
                        "SubCategory": [
                            { "name": "Plants & Planters" },
                            { "name": "Aromas 7 Candles" },
                            { "name": "Clocks" },
                            { "name": "Mirrors" },
                            { "name": "Wall Decor" },
                            { "name": "Festive Decor" },
                            { "name": "Pooja Essentials" },
                            { "name": "Wall shelves" },
                            { "name": "Fountains" },
                            { "name": "Showpieces & Vases" },
                            { "name": "Ottoman" }
                        ]
                    },
                    {
                        "Category": "Cushions & Cushion Covers",
                        "SubCategory": []
                    },
                    {
                        "Category": "Curtains",
                        "SubCategory": []
                    },
                    {
                        "Category": "Home Gift Sets",
                        "SubCategory": []
                    },
                    {
                        "Category": "Kitchen & Table",
                        "SubCategory": [
                            { "name": "Table Runners" },
                            { "name": "Dinnerware & Serveware" },
                            { "name": "Cups ans Mugs" },
                            { "name": "Bakeware & Cookware" },
                            { "name": "Kitchen Storage & Tools" },
                            { "name": "Bar & Drinkware" },
                            { "name": "Table Covers & Furnishings" }
                        ]
                    },
                    {
                        "Category": "Storage",
                        "SubCategory": [
                            { "name": "Bins" },
                            { "name": "Hangers" },
                            { "name": "Organisers" },
                            { "name": "Hooks & Holders" },
                            { "name": "Laundry Bags" }
                        ]
                    },
                    {
                        "Category": "Brands",
                        "SubCategory": [
                            { "name": "H&M" },
                            { "name": "Marks & Spencer" },
                            { "name": "Home Center" },
                            { "name": "Spaces" },
                            { "name": "D'Decor" },
                            { "name": "Story@Home" },
                            { "name": "Pure Home & Living" },
                            { "name": "Swayam" },
                            { "name": "Raymond Home" },
                            { "name": "Maspar" },
                            { "name": "My Trident" },
                            { "name": "Cortina" },
                            { "name": "Random" },
                            { "name": "Ellementry" },
                            { "name": "ROMEE" },
                            { "name": "SEJ by Nisha Gupta" }
                        ]
                    }
                ]
            },
            {
                "BEAUTY": [
                    {
                        "Category": "Makeup",
                        "SubCategory": [
                            { "name": "Lipstick" },
                            { "name": "Lip Gloss" },
                            { "name": "Lip Liner" },
                            { "name": "Mascara" },
                            { "name": "Eyliner" },
                            { "name": "Kajal" },
                            { "name": "Eyeshadow" },
                            { "name": "Foundation" },
                            { "name": "Primer" },
                            { "name": "Concealer" },
                            { "name": "Compct" },
                            { "name": "Nail Polish" }
                        ]
                    },
                    {
                        "Category": "Skincare, Bath & Body",
                        "SubCategory": [
                            { "name": "Face Moisturiser" },
                            { "name": "Cleanser" },
                            { "name": "Masks & Peel" },
                            { "name": "Sunscreen" },
                            { "name": "Serum" },
                            { "name": "Facewash" },
                            { "name": "Eye cream" },
                            { "name": "Lip Balm" },
                            { "name": "Body Lotion" },
                            { "name": "Body Wash" },
                            { "name": "Body Scrub" },
                            { "name": "Hand Cream" }
                        ]
                    },
                    {
                        "Category": "Baby Care",
                        "SubCategory": []
                    },
                    {
                        "Category": "Masks",
                        "SubCategory": []
                    },
                    {
                        "Category": "Haircare",
                        "SubCategory": [
                            { "name": "Shampoo" },
                            { "name": "Conditioner" },
                            { "name": "Hair Cream" },
                            { "name": "Hair Oil" },
                            { "name": "Hair Gel" },
                            { "name": "Hair Color" },
                            { "name": "Hair Serum" },
                            { "name": "Hair Accessory" }
                        ]
                    },
                    {
                        "Category": "Fragrances",
                        "SubCategory": [
                            { "name": "Perfume" },
                            { "name": "Deodorant" },
                            { "name": "Body Mist" }
                        ]
                    },
                    {
                        "Category": "Appliances",
                        "SubCategory": [
                            { "name": "Hair Straightener" },
                            { "name": "Hair Dryer" },
                            { "name": "Epilator" }
                        ]
                    },
                    {
                        "Category": "Men's Grooming",
                        "SubCategory": [
                            { "name": "Trimmer" },
                            { "name": "Beard Oil" },
                            { "name": "Hair Wax" }
                        ]
                    },
                    {
                        "Category": "Beauty Gift & Makeup Set",
                        "SubCategory": [
                            { "name": "Beauty Gift" },
                            { "name": "Makeup Kit" }
                        ]
                    },
                    {
                        "Category": "Premium Beauty",
                        "SubCategory": []
                    },
                    {
                        "Category": "Wellness & Hygiene",
                        "SubCategory": []
                    },
                    {
                        "Category": "Top Brands",
                        "SubCategory": [
                            { "name": "Lakme" },
                            { "name": "Maybelline" },
                            { "name": "LOreal" },
                            { "name": "Phillips" },
                            { "name": "Bath & Body Works" },
                            { "name": "THE BODY SHOP" },
                            { "name": "Biotique" },
                            { "name": "Mamaearth" },
                            { "name": "MCaffeine" },
                            { "name": "Nivea" },
                            { "name": "Lotus Herbals" },
                            { "name": "KAMA AYURVEDA" },
                            { "name": "M.A.C" },
                            { "name": "Forest Essentials" }
                        ]
                    }
                ]
            }
        ];

        // Convert the menu object to JSON
        let jsonMenu = JSON.stringify(menu);

        // Print the JSON string
        //console.log(jsonMenu);

        const menuOptions = document.getElementById("menu-option");

        menu.forEach(menuItem => {
            const menuName = Object.keys(menuItem)[0];
            const categories = menuItem[menuName];


            /// menu
            const liMenus = document.createElement("li");
            const liMenusName = document.createElement("p");
            liMenusName.textContent = menuName;
            liMenus.appendChild(liMenusName);

            const dropdownContent = document.createElement("div");
            dropdownContent.classList.add("dropdown-content");


            categories.forEach(category => {
                /// categories
                const categorySpan = document.createElement("p");
                categorySpan.textContent = category.Category;
                categorySpan.classList.add("menu-cat")
                const subCategoryUl = document.createElement("ul");


                category.SubCategory.forEach(subCat => {
                    /// subCategory
                    const subCategoryLi = document.createElement("li");
                    const subCategoryLink = document.createElement("a");
                    subCategoryLink.textContent = subCat.name;
                    subCategoryLi.classList.add("menu-sub-cat")
                    subCategoryLi.appendChild(subCategoryLink);
                    subCategoryUl.appendChild(subCategoryLi);
                });

                const categoryLi = document.createElement("li");
                categoryLi.appendChild(categorySpan);
                categoryLi.appendChild(subCategoryUl);
                dropdownContent.appendChild(categoryLi);
            });

            liMenus.appendChild(dropdownContent);
            if (menuOptions) {
                menuOptions.appendChild(liMenus);
            }

        });
    }

    // Call the function to generate the menu

    var closeIcon = document.getElementsByClassName('menu-sub-cat');
    if (closeIcon) {
        for (let i = 0; i < closeIcon.length; i++) {
            closeIcon[i].addEventListener('click', redirectToProductList);
        }
    }
    function redirectToProductList(e) {
        window.location.pathname = "/product-list.html";
    };

    fetch('/header.html')
        .then(response => response.text())
        .then(html => {
            var existingHeaderContainer = document.getElementById("header-container");
            existingHeaderContainer.innerHTML = html;
            if (!existingHeaderContainer) {
                var headerContainer = document.createElement("div");
                headerContainer.id = "header-container";
                headerContainer.innerHTML = html;
                // Append the header container to the appropriate location in your document
                // For example:
                // document.body.prepend(headerContainer); // prepend to the beginning of the body
                // document.body.appendChild(headerContainer); // append to the end of the body
            }
            generateMenu();
            var closeIcon1 = document.getElementsByClassName('menu-sub-cat');
            for (let i = 0; i < closeIcon1.length; i++) {
                closeIcon1[i].addEventListener('click', closeDisplayContent);
            }
            function closeDisplayContent() {
                window.location.pathname = "/product-list.html";

            };
        });

    fetch('/footer.html')
        .then(response => response.text())
        .then(html => {
            //  document.getElementsByClassName('footer-container').appendChild(html);
            var existingHeaderContainer = document.getElementById("footer-container");
            existingHeaderContainer.innerHTML = html;
        }).catch(e => {
            console.log("Error:", e);
        });
});

