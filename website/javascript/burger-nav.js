//* Burger Menu opens nav links when clicked

const header = document.querySelector("header");
const toggleNavBtn = document.querySelector(".nav-toggle");

toggleNavBtn.addEventListener('click', function () {
    header.classList.toggle('open');
});
