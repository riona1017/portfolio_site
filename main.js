let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");


//ナビゲーションメニュー
btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
}

window.addEventListener("scroll", function () {
    nav.classList.toggle("scroll-nav", window.scrollY > 700);
});


//scrollReveal.jsを使用
ScrollReveal({ reset: true, distance: '60px', duration: 1000, delay: 200, });
ScrollReveal().reveal('.title', { delay: 500, origin: 'top'});
ScrollReveal().reveal('h2', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.profile-img', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.text', { delay: 700, origin: 'right'});
ScrollReveal().reveal('.button', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.portfolio-img', { delay: 700, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.portfolio-info h3, .portfolio-info p', { delay: 900, origin: 'right'});
ScrollReveal().reveal('.sub-button', { delay: 800, origin: 'top', interval: 200 });
ScrollReveal().reveal('.skill1, .skill3', { delay: 700, origin: 'right', interval: 200});
ScrollReveal().reveal('.skill2', { delay: 700, origin: 'left'});
