// responsive 

const toggleBtn = document.querySelector(".toggle-btn");
const navbarList = document.querySelector(".navbar-list");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navbarList.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    console.log("1");
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 100 );
})