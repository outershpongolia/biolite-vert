import _ from 'lodash';
import './style.scss';

const menuIcon = document.getElementById("js-open");
const closeIcon = document.getElementById("js-close");
const menu = document.getElementById("js-menu")

menuIcon.addEventListener('click', function(e) {
    menu.classList.add('active');
})

closeIcon.addEventListener('click', function(e) {
    menu.classList.remove('active');
})