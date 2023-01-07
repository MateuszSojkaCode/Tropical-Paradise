const navBtn = document.querySelector(".navBtn");
const nav = document.querySelector(".nav");
const footerYear = document.querySelector(".footer__year");
const navBtnBars = document.querySelector('.navBtn__line');
const allSections = document.querySelectorAll('.section')

const showNav = () => {
	nav.classList.toggle("showNav");

    navBtnBars.classList.remove('black-bars-color')
};


const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}

const observerSection = () => {
    const currentSection = window.scrollY

    allSections.forEach(section => {
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}



handleCurrentYear()
navBtn.addEventListener("click", showNav);
window.addEventListener('scroll', observerSection)
