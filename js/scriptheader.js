const ulHeader = document.querySelector('.header_nav');
const svgHeader = document.querySelector('.svg-menu-mobile-js');


function openMenuMobile() {
    ulHeader.classList.toggle('header_nav-js');
}

svgHeader.addEventListener('click', openMenuMobile)


console.log(ulHeader)

