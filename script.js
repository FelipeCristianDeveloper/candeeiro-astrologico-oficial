const btn = document.querySelector('#btn-hamburger');
const menuOpen = document.querySelector('.nav-list');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menuOpen.classList.toggle('active');
})
