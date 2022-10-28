const mobileNavdiv = document.querySelector('.mobile-nav-div');
const menuBtn = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-xmark');

const mobileNav = () => {
  menuBtn.addEventListener('click', () => {
    mobileNavdiv.classList.remove('none');
    mobileNavdiv.classList.add('flex');
  });

  closeNav.addEventListener('click', () => {
    mobileNavdiv.classList.add('none');
  });
};
export default mobileNav;
