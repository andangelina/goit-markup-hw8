(() => {

  //mobile menu only
  const mobileMenu = document.querySelector('.js-mobile-menu');
  

  //mobile menu hamburger open button
  const openMenuBtn = document.querySelector('.js-hamburger-open');

  //mobile menu cross close button
  const closeMenuBtn = document.querySelector('.js-cross-close');

  //functions to add and remove class names
  const showMobileMenu = () => {
    mobileMenu.classList.add('is-open');
  }

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('is-open')
  }

  //capture click on open and close menu buttons
  openMenuBtn.addEventListener('click', showMobileMenu);
  closeMenuBtn.addEventListener('click', closeMobileMenu);

})();