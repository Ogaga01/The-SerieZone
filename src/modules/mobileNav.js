const mobileNavdiv = document.querySelector(".mobile-nav-div");
const menuBtn = document.querySelector(".fa-bars");

const mobileNav = () => {
    menuBtn.addEventListener('click', () => {
        mobileNavdiv.classList.remove('none')
        mobileNavdiv.classList.add('flex')
    })
}
export default mobileNav
