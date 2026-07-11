let lastScroll = 0;
const navbar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 100){
        navbar.style.top = "-100px";
    }else{
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;

});