document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const clickOpenDLBanner = document.getElementById('clickOnDownloadAppBanner');
        if (clickOpenDLBanner) {
            clickOpenDLBanner.addEventListener('click', clickOnDownloadAppBanner);
        }
        function clickOnDownloadAppBanner() {
            window.open("https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059", "_blank");
        }
        /// open mob-app links
        const gplayBtn = document.getElementById("gplay-btn");
        //console.log("gplayBtn " + gplayBtn)
        if (gplayBtn) {
            gplayBtn.addEventListener("click", redirectAndroidApp)
        }
        function redirectAndroidApp() {
            window.open("https://play.google.com/store/apps/details?id=com.myntra.android", "_blank");
        }

        /// open mob-app links
        document.getElementById("apple-btn").addEventListener("click", redirectIOSApp);
        function redirectIOSApp() {
            window.open("https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059", "_blank");
        }

        ///open FB
        document.getElementById("fb-btn").addEventListener("click", redirectFB);
        function redirectFB() {
            window.open("https://www.facebook.com/myntra", "_blank");
        }

        ///open Insta
        document.getElementById("insta-btn").addEventListener("click", redirectInsta);
        function redirectInsta() {
            window.open("https://www.instagram.com/myntra/", "_blank");
        }

        ///open twitter
        document.getElementById("twitter-btn").addEventListener("click", redirectTwitter);
        function redirectTwitter() {
            window.open("https://twitter.com/myntra", "_blank");
        }


        ///open yTube
        document.getElementById("yTube-btn").addEventListener("click", redirectYtube);
        function redirectYtube() {
            window.open("https://www.youtube.com/user/myntradotcom", "_blank");
        }
        /// redirect to HOME
        const logoClick = document.getElementById('logo');
        if (logoClick) {
            logoClick.addEventListener('click', redirectHome);
        }
        function redirectHome() {
            window.location.pathname = "/index.html";
        }

        document.getElementById("bag-menu").addEventListener("click", function (e) {
            window.location.pathname = "/cart-page.html";
        });
        document.getElementById("wishlist-menu").addEventListener("click", function (e) {
            window.location.pathname = "/wishlist.html";
        });
    }, 400);

});
