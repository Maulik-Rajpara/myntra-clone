document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname != '/product-detail.html') {
        const urlWithoutQueryParams = window.location.pathname;
        // Get the current URL without query parameters
        history.replaceState({}, document.title, urlWithoutQueryParams);
    }


    const crImages = [
        "cr_one.png",
        "cr_two.png",
        "cr_three.png",
        "cr_four.png",
        "cr_five.png",
        "cr_six.png",
        "cr_seven.png",
        "cr_eight.png",
        "cr_nine.png",
        "cr_ten.png",
    ];

    const sliderCR = document.getElementById("slider-cr");
    const dotsContainer = document.getElementById("dotsID");
    const numImages = crImages.length;
    const numPerGroup = 5;
    let currentIndex = 0;

    /// SLIDER CODE FOR CR-IMAGES
    function showSlide() {
        // Calculate the start and end index for the current group
        const start = currentIndex;
        const end = Math.min(currentIndex + numPerGroup, numImages);

        // Apply transition to the slider
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
        }
        if (sliderCR) {
            sliderCR.innerHTML = '';
        }


        // Append images for the current group
        for (let i = start; i < end; i++) {
            const img = document.createElement("img");
            img.src = "assets/images/crazy/" + crImages[i];
            img.alt = "CR Image " + (i + 1);
            img.classList.add("cr-images");
            img.addEventListener('click', redirectToProductList)
            sliderCR.appendChild(img);
        }
        // Append dots for each group
        for (let i = 0; i < Math.ceil(numImages / numPerGroup); i++) {
            const dot = document.createElement("div");
            dot.classList.add("dots");
            dot.addEventListener("click", function () {
                currentIndex = i * numPerGroup;
                showSlide();
            });
            if (i * numPerGroup === currentIndex) {
                dot.classList.add("active");
            }
            dotsContainer.appendChild(dot);
        }

        sliderCR.style.transition = "opacity 1s, transform 1s ease-in-out";
    }

    // Function to transition to the next group of images
    function nextSlide() {
        currentIndex = (currentIndex + numPerGroup) % numImages;
        showSlide();
    }
    showSlide();
    setInterval(nextSlide, 5000);
});
/// 
document.addEventListener("DOMContentLoaded", function () {
    const catImages = [
        "cat_1.png",
        "cat_2.png",
        "cat_3.png",
        "cat_4.png",
        "cat_5.png",
        "cat_6.png",
        "cat_7.png",
        "cat_8.png",
        "cat_9.png",
        "cat_10.png",
        "cat_11.png",
        "cat_12.png",
        "cat_13.png",
        "cat_14.png",
        "cat_15.png",
        "cat_16.png",
        "cat_17.png",
        "cat_18.png",


    ];
    const catData = document.getElementById("cat-items");
    const numImages = catImages.length;
    const numPerGroup = 6;
    let currentIndex = 0;

    for (let i = 0; i < numImages; i++) {
        const img = document.createElement("img");
        img.src = "assets/images/category/" + catImages[i];
        img.alt = "CAT Image " + (i + 1);
        img.classList.add("cat-images");
        img.addEventListener('click', redirectToProductList)
        catData.appendChild(img);
    }

});

function redirectToProductList(e) {
    window.location.pathname = "/product-list.html";
};