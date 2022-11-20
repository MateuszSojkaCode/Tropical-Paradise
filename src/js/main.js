const navBtn = document.querySelector('.navBtn')
const nav = document.querySelector('.nav')

const showNav = () => {
    nav.classList.toggle('showNav')
}
    navBtn.addEventListener('click', showNav)
