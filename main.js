let fasBar = document.querySelector('.fas-bar')
let active = document.querySelector('#nav_bar')
fasBar.addEventListener('click', () => {
    active.classList.toggle('active')
})