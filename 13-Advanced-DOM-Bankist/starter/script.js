'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

////////////////////////////////
//Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const slcoords = section1.getBoundingClientRect();
  console.log(slcoords);

  console.log(e.target.getBoundingClientRect());

  console.log(`Current scroll (X/Y) `, window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //height/width viewport 912 646

  //Scrolling
  // window.scrollTo(
  //   slcoords.left + window.pageXOffset,
  //   slcoords.top + window.pageYOffset
  // );

  // 第一種方法
  // window.scrollTo({
  //   left: slcoords.left + window.pageXOffset,
  //   top: slcoords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // 第二種方法
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////
//Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//更好的方式是使用Event Delegation 事件委派

// 1. Add event listener to common parent element
// 2. Determine what element originated the
// 把事件處理放在 共同的父元素 身上 (nav__links)

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  //e.target 是什麼意思
  // 觸發目標的資訊
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener : Great ! You are reading the heading :D');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener : Great ! You are reading the heading :D');
// });

// h1.onmouseenter = function (e) {
//   alert('addEventListener : Great ! You are reading the heading :D');
// };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1));

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //Stop propagation
//   // e.stopPropagation();
//   //不會影響到父元素了
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target, e.currentTarget);
//   },
//   true
// );
