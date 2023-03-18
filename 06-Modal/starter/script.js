'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModel);
}

btnCloseModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log('A key was pressed');
//   // console.log(e.key);
//   // 當事件發生時，請傳入事件對象做為參數

//   if (e.key === 'Escape') {
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }
// });

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  // console.log(e.key);
  // 當事件發生時，請傳入事件對象做為參數

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
