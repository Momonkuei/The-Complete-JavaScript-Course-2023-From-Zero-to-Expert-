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

//193. DOM Traversing

const h1 = document.querySelector('h1');

//Going downwards : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
//NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children);
//HTMLCollection(3) [span.highlight, br, span.highlight]
//////////////////////

//設置h1第一個元素樣式
h1.firstElementChild.style.color = 'white';

//設置h1最後一個個元素樣式
h1.lastElementChild.style.color = 'orangered';

//Going upwards : parents
