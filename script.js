let lastScroll = 0;
const navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "6px";
    }

    lastScroll = currentScroll;
});

// emailjs link
emailjs.init("soqociZpnSL7jqumd");

const form = document.getElementById("contactForm");
const btn = document.querySelector(".contact-btn");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Button Disable
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_8gnjyhd",
        "template_5y3m78p",
        this
    )

        .then(() => {

            // Toast Show
            toast.classList.add("show");

            // Form Reset
            form.reset();

            // Button Enable
            btn.disabled = false;
            btn.innerHTML = "Send Message";

            setTimeout(() => {

                toast.classList.remove("show");

            }, 3000);

        })

        .catch((error) => {

            console.log(error);

            btn.disabled = false;
            btn.innerHTML = "Send Message";

            alert("Failed to send message.");

        });

});


// Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open / Close Menu
menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

});

// Close Menu When Clicking Outside
document.addEventListener("click", (e) => {

    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    }

});

// Close Menu After Clicking a Link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});

// Close Menu On Scroll
window.addEventListener("scroll", () => {

    if (navLinks.classList.contains("active")) {

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

    }

});