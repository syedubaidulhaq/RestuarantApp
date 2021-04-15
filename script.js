const btn = document.querySelector("#nav__menu");
const ul = document.querySelector('#nav__ul');
btn.addEventListener('click', function () {
    ul.classList.toggle('open');
})