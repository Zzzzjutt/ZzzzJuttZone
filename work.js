// ================================
// MOBILE HAMBURGER MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    // Open / Close menu
    menuToggle.addEventListener("click", function (e) {

        e.stopPropagation();

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

    });


    // Close when clicking outside
    document.addEventListener("click", function (e) {

        if (
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

        }

    });


    // Close when clicking a link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

        });

    });


    // Close menu when scrolling
    window.addEventListener("scroll", function () {

        if (navLinks.classList.contains("active")) {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

        }

    });

}


//  Work Subtitle
const textElement = document.getElementById("changingText");

const texts = [
    "🎨 MY ART",
    "✏️ MY DESIGN",
    "💡 MY IDEAS",
    "🖌️ MY CREATIONS",
    "🚀 MY WORK"
];

let currentIndex = 0;

textElement.addEventListener("animationiteration", () => {
    currentIndex++;

    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }

    textElement.textContent = texts[currentIndex];
});



// // see more btn section
document.addEventListener("DOMContentLoaded", function () {

    const work = document.querySelector(".work");
    const seeMoreBtn = document.getElementById("seeMoreBtn");

    const works = Array.from(work.children);

    let visibleCount = 4;

    // Starting mein sirf first 4 work show karo
    works.forEach((item, index) => {
        if (index >= visibleCount) {
            item.style.display = "none";
        }
    });

    // Agar 4 ya us se kam hain to button hide
    if (works.length <= 4) {
        seeMoreBtn.style.display = "none";
    }

    seeMoreBtn.addEventListener("click", function () {

        // Next 4 work show karo
        for (
            let i = visibleCount;
            i < visibleCount + 4 && i < works.length;
            i++
        ) {
            works[i].style.display = "";
        }

        visibleCount += 4;

        // Agar sab work show ho gaye to button hide
        if (visibleCount >= works.length) {
            seeMoreBtn.style.display = "none";
        }
    });

});