let lastScroll = 0;
const navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});

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