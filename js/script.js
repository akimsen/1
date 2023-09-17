'use strict';

let hamburger = document.querySelector('.hamburger'),
    closeMenu = document.querySelectorAll('[data-close]'),
    menu = document.querySelector('.menu');

document.addEventListener('DOMContentLoaded', () => {
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    closeMenu.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    let skillsRatio = document.querySelectorAll('.skills__graphics__subheader');
    let skillsVisibleRatio = document.querySelectorAll('.skills__completed');

    skillsVisibleRatio.forEach((item, i) => {
        item.style.width = skillsRatio[i].textContent; 
    });
});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

