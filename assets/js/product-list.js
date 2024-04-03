
document.addEventListener("DOMContentLoaded", function () {
    // Now you can use the productData variable in this file
    if (window.location.pathname != '/product-detail.html') {
        const urlWithoutQueryParams = window.location.pathname;
        // Get the current URL without query parameters
        history.replaceState({}, document.title, urlWithoutQueryParams);
    }
    var dropdown = document.querySelector('.dropdown-sortby');
    var dropdownContent = dropdown.querySelector('.dd-content-sortby');

    dropdown.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn-sortby')) {
            var dropdowns = document.getElementsByClassName("dd-content-sortby");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });

    // Handling click on dropdown items
    dropdownContent.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            var selectedText = event.target.textContent;
            dropdown.querySelector('.dropbtn-sortby').textContent = "Sort by: " + selectedText;
        }
    });
});
// Function to create filter options
function createFilterOptions(options, containerId) {
    const container = document.getElementById(containerId);
    options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("pt-lt-space");

        const input = document.createElement("input");
        input.classList.add("custom-checkbox");
        input.type = "checkbox";
        input.id = option.id;
        if (containerId == 'filterCatOptionsContainer') {
            input.dataset.name = 'category';
        } else if (containerId == 'filterBrandOptionsContainer') {
            input.dataset.name = 'brands';
        } else {
            input.dataset.name = 'pricerange';
        }

        const span = document.createElement("span");
        span.classList.add("filter-tags");
        span.textContent = option.title;
        span.addEventListener("click", function () {
            input.checked = !input.checked;
        });
        div.appendChild(input);
        div.appendChild(span);
        container.appendChild(div);
    });
}

// CAT Filter Options
const catFilterOption = [
    { id: "cf1", title: "T-Shirts" },
    { id: "cf2", title: "Long-T-Shirts" }
];
createFilterOptions(catFilterOption, "filterCatOptionsContainer");

// BRAND Filter Options
const brandFilterOption = [
    { id: "bf1", title: "Roadster" },
    { id: "bf2", title: "HRX by Hrithik Roshan" },
    { id: "bf3", title: "Tommy Hilfiger" },
    { id: "bf4", title: "Friskers" },
    { id: "bf5", title: "U.S.Polo Assn" },
    { id: "bf6", title: "WROGN" },
    { id: "bf7", title: "Bewakoof" }
];
createFilterOptions(brandFilterOption, "filterBrandOptionsContainer");

// PRICE Filter Options
const priceFilterOption = [
    { id: "pf1", title: "Rs. 149 to Rs. 9112" },
    { id: "pf2", title: "Rs. 9112 to Rs. 18075" },
    { id: "pf3", title: "Rs. 18075 to Rs. 27038" },
    { id: "pf4", title: "Rs. 27038 to Rs. 36001" }
];
createFilterOptions(priceFilterOption, "filterPriceOptionsContainer");

// COLOR Filter Options
const colorFilterOption = [
    { id: "ccf1", title: "Black", color: "#000000" },
    { id: "ccf2", title: "Red", color: "red" },
    { id: "ccf3", title: "Blue", color: "blue" },
    { id: "ccf4", title: "White", color: "white" },
    { id: "ccf5", title: "Yellow", color: "yellow" },
    { id: "ccf6", title: "Pink", color: "pink" },
    { id: "ccf7", title: "Cyan", color: "cyan" },
    { id: "ccf8", title: "Magenta", color: "#FF00FF" },
    { id: "ccf9", title: "Dark Gray", color: "#A9A9A9" },
    { id: "ccf10", title: "Orange", color: "orange" },
    { id: "ccf11", title: "Brown", color: "brown" },
    { id: "ccf12", title: "Purple", color: "purple" },
];
function createColorFilterOptions(options, containerId) {
    const container = document.getElementById(containerId);
    options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("pt-lt-space");

        const input = document.createElement("input");
        input.classList.add("custom-checkbox");
        input.type = "checkbox";
        input.id = option.id;
        input.dataset.name = 'colors';
        const title = document.createElement("label");
        title.classList.add("filter-tags");

        const colorSpan = document.createElement("span");
        colorSpan.style.backgroundColor = option.color;
        colorSpan.style.width = "16px"; // Adjust as needed
        colorSpan.style.height = "16px"; // Adjust as needed
        colorSpan.style.display = "inline-block";
        colorSpan.style.border = "1px solid #cccccc"
        colorSpan.style.borderRadius = "16px"
        colorSpan.style.marginRight = "10px"; // Adjust as needed

        const textSpan = document.createElement("span");
        textSpan.textContent = option.title;

        title.appendChild(colorSpan);
        title.appendChild(textSpan);

        div.appendChild(input);
        div.appendChild(title);

        container.appendChild(div);
    });
}
createColorFilterOptions(colorFilterOption, "filterColorOptionsContainer");

// DISCOUNT Filter Options
const discountFilterOption = [
    { id: "df1", title: "10% and above" },
    { id: "df2", title: "20% and above" },
    { id: "df3", title: "30% and above" },
    { id: "df4", title: "40% and above" },
    { id: "df5", title: "50% and above" },
    { id: "df6", title: "60% and above" },
    { id: "df7", title: "70% and above" },
    { id: "df8", title: "80% and above" },
    { id: "df9", title: "90% and above" },
];
createDiscountFilterOptions(discountFilterOption, "filterDiscountOptionsContainer");
function createDiscountFilterOptions(options, containerId) {
    const container = document.getElementById(containerId);
    options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("pt-lt-space");

        const input = document.createElement("input");
        input.classList.add("custom-radio"); // Use custom-radio class
        input.type = "radio"; // Change input type to radio
        input.name = "discount"; // Assign the same name for radio buttons in the group
        input.id = option.id;
        input.dataset.name = 'discount';
        const title = document.createElement("label");
        title.classList.add("filter-tags");
        title.textContent = option.title;

        div.appendChild(input);
        div.appendChild(title);
        container.appendChild(div);
    });

}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}



if (window.matchMedia("(max-width: 576px)").matches) {
    var filterLable = document.querySelector('.filter-lbl');

    filterLable.addEventListener('mouseenter', function (event) {
        var classB = document.getElementsByClassName('fl-left-sub');
        for (var i = 0; i < classB.length; i++) {
            classB[i].style.display = 'block';
            classB[i].style.position = 'absolute';
            classB[i].style.zIndex = 1;
            classB[i].style.backgroundColor = 'white';
        }
    });
    // Add event listener for mouse leaving the element
    filterLable.addEventListener('mouseleave', function (event) {
        var classB = document.getElementsByClassName('fl-left-sub');
        for (var i = 0; i < classB.length; i++) {
            classB[i].style.display = 'none';
        }
    });
}

