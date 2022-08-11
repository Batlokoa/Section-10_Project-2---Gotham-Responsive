let header = document.querySelector("header");
let toggleNavBtn = document.querySelector(".nav-toggle");

toggleNavBtn.addEventListener('click', function () {
    header.classList.toggle('open');
});
