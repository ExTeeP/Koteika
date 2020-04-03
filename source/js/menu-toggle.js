'use strict';

// При клике на кнопку должен открываться блок с навигацией по сайту,
// а так же меняться вид кнопки .header__toggle--open на .header__toggle--close.
// цвет фона шапки так же меняется в зависимости от того - открыта навигация или нет
// header--menu-open - содержит цвет шапки для открытой навигации
// если скрипт загрузился то удаляются классы .*--nojs
// если не загрузился то меню будет в открытом виде и без кнопки

(function () {
  var header = document.querySelector('.header');
  var button = header.querySelector('.header__toggle');
  var menu = header.querySelector('.header__menu');

  header.classList.remove('header--nojs');
  button.classList.remove('header__toggle--nojs');
  menu.classList.remove('header__menu--nojs');

  function getBgColorAndBtnDesc() {
    if (button.classList.contains('header__toggle--close')) {
      header.classList.add('header--menu-open');
      button.attributes['aria-label'].value = 'Закрыть меню';
    } else {
      header.classList.remove('header--menu-open');
      button.attributes['aria-label'].value = 'Открыть меню';
    }
  }

  function openAndCloseMenu() {
    menu.classList.toggle('header__menu--close');
    button.classList.toggle('header__toggle--close');
    button.classList.toggle('header__toggle--open');
  }

  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    openAndCloseMenu();
    getBgColorAndBtnDesc();
  });
})();
