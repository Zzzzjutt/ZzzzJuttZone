const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navBar = document.querySelector(".nav-bar");


// =========================================
// MENU TOGGLE
// =========================================

menuToggle.addEventListener("click", function (e) {

    e.stopPropagation();

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

});


// =========================================
// NAVIGATION LINK CLICK
// =========================================

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function () {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

    });

});


// =========================================
// OUTSIDE CLICK
// =========================================

document.addEventListener("click", function (e) {

    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

    }

});


// =========================================
// SCROLL HIDE / SHOW + MENU CLOSE
// =========================================

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {

    const currentScrollY = window.scrollY;


    // -----------------------------------------
    // SCROLL DOWN
    // -----------------------------------------

    if (currentScrollY > lastScrollY && currentScrollY > 80) {

        // Navbar hide
        navBar.classList.add("hide");

        // Mobile menu close
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

    }


    // -----------------------------------------
    // SCROLL UP
    // -----------------------------------------

    else if (currentScrollY < lastScrollY) {

        navBar.classList.remove("hide");

    }


    // -----------------------------------------
    // TOP OF PAGE
    // -----------------------------------------

    if (currentScrollY <= 10) {

        navBar.classList.remove("hide");

    }


    lastScrollY = currentScrollY;

});