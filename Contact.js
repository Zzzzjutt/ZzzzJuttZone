document.addEventListener("DOMContentLoaded", function () {

    emailjs.init({
        publicKey: "soqociZpnSL7jqumd"
    });

    const form = document.getElementById("contact-form");
    const toast = document.getElementById("toast");
    const button = form.querySelector(".contact-btn");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Button ko disable karo
        button.disabled = true;
        button.textContent = "SUBMITTING...";

        // Email send karo
        emailjs.sendForm(
            "service_tky2w08",
            "template_kt33eni",
            form
        )

            .then(function () {

                // Success
                toast.textContent = "Thank you for your message. I aim to get back to all messages within 48 hours.";
                toast.classList.add("show");

                // Form reset
                form.reset();

                // Button wapas normal
                button.disabled = false;
                button.textContent = "SUBMIT";

                // Toast hide
                setTimeout(function () {
                    toast.classList.remove("show");
                }, 8000);

            })

            .catch(function (error) {

                console.error("EmailJS Error:", error);

                // Error message
                toast.textContent = "Something went wrong. Please try again.";
                toast.classList.add("show");

                // Button wapas normal
                button.disabled = false;
                button.textContent = "SUBMIT";

                // Toast hide
                setTimeout(function () {
                    toast.classList.remove("show");
                }, 8000);

            });

    });

});


// responsive nav bar

const navContainer = document.querySelector(".nav-container");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let lastScroll = 0;


/* HIDE / SHOW NAVBAR ON SCROLL*/

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    /* Page ke top par navbar hamesha show */
    if (currentScroll <= 10) {

        navContainer.classList.remove("nav-hide");

        lastScroll = currentScroll;

        return;
    }

    /* Neeche scroll */
    if (currentScroll > lastScroll) {

        navContainer.classList.add("nav-hide");

        /* Agar mobile menu open hai to close */
        menuToggle?.classList.remove("active");
        navLinks?.classList.remove("active");

    }

    /* Upar scroll */
    else {

        navContainer.classList.remove("nav-hide");

    }

    lastScroll = currentScroll;

}, { passive: true });


/*HAMBURGER MENU*/

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", (e) => {

        e.stopPropagation();

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

    });


    /*NAV LINK CLICK → CLOSE MENU */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

        });

    });


    /*OUTSIDE CLICK → CLOSE MENU*/

    document.addEventListener("click", (e) => {

        if (
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

        }

    });

}


/* PREVENT MENU CLICK FROM CLOSING IT*/

if (navLinks) {

    navLinks.addEventListener("click", (e) => {
        e.stopPropagation();
    });

}
