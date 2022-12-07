const navBtn = document.querySelector(".navBtn");
const nav = document.querySelector(".nav");
const footerYear = document.querySelector(".footer__year");

const showNav = () => {
	nav.classList.toggle("showNav");
};


const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear()
navBtn.addEventListener("click", showNav);

