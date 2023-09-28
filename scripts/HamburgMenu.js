const menunav = document.querySelector('#menu');

const navigate = document.querySelector('.navigate');

menunav.addEventListener('click', () => {
    navigate.classList.toggle('show');
    menunav.classList.toggle('show');
});