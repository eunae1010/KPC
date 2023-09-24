// 공지 닫기
const notice = document.querySelector('.top_notice');
const noticeCloseBtn = document.querySelector('.notice_close');
noticeCloseBtn.addEventListener('click', () => {
  notice.classList.add('up');
});

// 메뉴버튼
const menuBtn = document.querySelector('.menu_btn');
const lnbCloseBtn = document.querySelector('.lnb_close_btn');
const elLnb = document.querySelector('.lnb');
menuBtn.addEventListener('click', () => {
  elLnb.classList.add('active');
});
lnbCloseBtn.addEventListener('click', () => {
  elLnb.classList.remove('active');
});

// 서브메뉴
const lnbSubBtn = document.querySelectorAll('.lnb_btn');
const lnbToggle = document.querySelectorAll('.lnb_btn span');
const lnbSubMenu = document.querySelectorAll('.lnb_sub');
lnbSubBtn.forEach((item, idx) => {
  item.onclick = function() {
    lnbToggle[idx].classList.toggle('on');

    if(lnbToggle[idx].classList.contains('on')) {
      lnbSubMenu[idx].style.height = 'auto';
    } else {
      lnbSubMenu[idx].style.height = '0';
    };
  };
});

// 헤더 아래 메뉴
const headerNav = document.querySelectorAll('.nav a');
const navBar = document.querySelector('.nav_bar');
headerNav.forEach(item => {
  item.addEventListener('mouseenter', function() {
      navBar.style = `
        width: ${this.offsetWidth}px;
        left: ${this.offsetLeft}px`;
  });
  item.addEventListener('mouseleave', function() {
    navBar.style = `
      width: 0;
      left: ${this.offsetLeft}px`
  });
});

// 메인 이미지 슬라이드
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// 탭 메뉴
// const tabBtn = document.querySelectorAll('.tabMenu li');
// const tabBox = document.querySelectorAll('.tab_box');
// let tabActive = '';
// for(let i = 0; i < tabBtn.length; i++) {
//   tabBtn[i].addEventListener('click', function() {
//     for(let j = 0; j < tabBtn.length; j++) {
//       tabBtn[j].querySelector('.tabM').classList.remove('.tabM_on');
//       tabBox[j].style.display = 'none';
//       this.parentNode.classList.add('.tabM_on');
//       tabActive = this.getAttribute('href');
//       document.querySelector(tabActive).style.display = 'block';
//     }
//   });
// }



const tabBtn1 = document.querySelectorAll('.tabM1');
const tabBtn2 = document.querySelectorAll('.tabM2');
const tabBox = document.querySelectorAll('.tab_box');
let num = 0;
tabBtn1.forEach(function(btn, idx) {
  btn.onclick = function(e) {
    e.preventDefault();
    tabBtn1[num].classList.remove('tabM_on');
    this.classList.add('tabM_on');
    num = idx;
    if(tabBtn1[num].classList.contains('tabM_on')) {
      tabBox.getElementById(`#tabB${num}`).style.display = 'block';
    } else {
      // document.querySelector(`#tabB${idx}`).classList.remove('open');
    };
  };
});