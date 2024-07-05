/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import Swiper, { Navigation, Pagination } from 'swiper';
import BaseHelpers from './helpers/BaseHelpers';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
	onChange: (data) => {
		console.log(data);
	},
});

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

new Swiper('.swiper', {
  // configure Swiper to use modules
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
   911: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1111:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});



let text = document.querySelectorAll('.tabs-text');
let button = document.querySelectorAll('.tabs');
console.log(text);
console.log(button);

for (let index = 0; index < button.length; index++) {

button[index].addEventListener('click', read)

}
function read(e) {
 const tabTarget = e.currentTarget;
 const btn =tabTarget.dataset.button;
 const content = document.querySelector(`#${btn}`)
if(content.classList.contains('show-text')){
  content.classList.remove('show-text');
} else{
  content.classList.add('show-text')
}
}