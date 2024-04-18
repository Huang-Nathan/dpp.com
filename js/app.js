// setting
document.body.onselectstart = document.body.ondrag = function(){
  return false;
};

// =========== slider and thumbs

var swiper = new Swiper(".bg_slider_thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
  // freeMode: true,
  // watchSlidesProgress: true,
});
var swiper2 = new Swiper(".bg_slider", {
  loop: true,
  spaceBetween: 0,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

// ================== sticky top bar

// window.addEventListener('scroll', function(){
//   const header = document.querySelector("header");
//   const home = document.querySelector(".home")
//   const homeHeight = home.offsetHeight - 56;
//   header.classList.toggle('sticky', window.scrollY >0);
//   header.classList.toggle('color_change', scrollY > homeHeight);
// });




// ====== products_slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  // centeredSlides: true,
  spaceBetween: 20,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    400:{
      slidesPerView:1.5,
      spaceBetween:20,
    },
    
    660:{
      slidesPerView:2.5,
      spaceBetween:20,
    },
    1000:{
      slidesPerView:3.2,
      spaceBetween:25,
    },
    1400:{
      slidesPerView:4.2,
      spaceBetween:30,
    },
  }
});


// ====== Showcase changer
 const ShowcaseTitle = document.querySelectorAll('.product_text .title')
 const titles = ['Corrugated Carton','Color Box', 'Buffer Materials','Pulp Molding','Books','Label','Wine Box','Gift Box'];
 ShowcaseTitle.forEach((bt, i)=>{
  bt.innerHTML = titles[i++]
 })


// ====== content_detail

// const moreBtn_1 = document.querySelector('.open_btn_1')
const pps_btns = document.querySelectorAll('[class^="open_btn_"]');
const shutBtn = document.querySelector('.pps_close_btn');
const ppsContent = document.querySelector('.detail_expand');
const ppsTitle = document.querySelector('.pps_more_title');
const ppsImages = document.querySelectorAll('[class^="pps_more_img_"]');
const paths =[
  ['01.svg','02.svg','03.svg'],
  ['01.svg','02.svg','03.svg'],
  ['01.svg','02.svg','03.svg'],
  ['01.svg','02.svg','03.svg'],
  ['01.svg','02.svg','03.svg'],
  ['01.svg','02.svg','03.svg'],
  ['01.svg','02.svg','03.svg'],
  ['01.svg','02.svg','03.svg'],
]
// moreBtn_1.addEventListener('click',()=>{
//   ppsContent.classList.add('pps_more');
//   ppsTitle.innerHTML = 'Watermark Crafting Showcase'
// });

pps_btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    event.stopPropagation();
    ppsContent.classList.add('pps_more');
    const title = titles[index / 2];
    const pathIndex = paths[index / 2];
    ppsTitle.innerHTML = title;
    ppsImages.forEach((img, i) => {
      img.setAttribute('src', 'img/' + pathIndex[i]);
    });
  });
});

// pps_btns.forEach((btn, index)=>{
//   btn.addEventListener('click',()=>{
//     ppsContent.classList.add('pps_more');
//     let title;
//     let pathIndex
//     switch(index){
//       case 0:
//         title=titles[0];
//         pathIndex = paths[0]
//         break;
//       case 2:
//         title=titles[1];
//         pathIndex = paths[1]
//         break;
//       case 4:
//         title=titles[2];;
//         pathIndex = paths[2]
//         break;
//       case 6:
//         title=titles[3];
//         pathIndex = paths[0]
//         break;
//       case 8:
//         title=titles[4];
//         pathIndex = paths[0]
//         break;
//       case 10:
//         title=titles[5];
//         pathIndex = paths[0]
//         break;
//       case 12:
//         title=titles[6];
//         pathIndex = paths[0]
//         break;
//       case 14:
//         title=titles[7];
//         pathIndex = paths[0]
//         break;
//       case 16:
//         title=titles[8];
//         pathIndex = paths[0]
//         break;
//     }
//     ppsTitle.innerHTML = title;
//     ppsImages.forEach((img, i)=>{
//       img.setAttribute('src','img/'+pathIndex[i]);
//     });
//   });
// });

shutBtn.addEventListener('click',()=>{
  ppsContent.classList.remove('pps_more');
});

// ====== 任意区域关闭页面
document.addEventListener('click', function (event) {
  var popupContainer = document.querySelector('.expand_container')
  // 如果点击的位置不在弹窗内，则关闭弹窗
  if (!popupContainer.contains(event.target)) {
    console.log('test test test')
    ppsContent.classList.remove('pps_more'); // 修复了这里，移除 pps_more 类
  }
});

// ========== About_us_Countup

let anualSales = document.querySelector(".as");
let productionBase = document.querySelector(".pb");
let staff = document.querySelector(".sta");
let partners = document.querySelector(".par");
let expe = document.querySelector(".exp");
let ssqr = document.querySelector(".sqr");
let container = document.querySelector(".about_us_content");
let activated = false;


window.addEventListener('scroll',()=>{

  if(pageYOffset > container.offsetTop - container.offsetHeight - 200
  && activated ===false){
    anualSales.innerText = 0;
    productionBase.innerText = 0;
    staff.innerText = 0;
    partners.innerText = 0;
    expe.innerText = 0;
    
    let count = 0;
    let p = 0;
    let pp = 0;
    let s = 0;
    let ex = 0;
    let sq = 0;
    function updateCountA(){
      const anualS = 100;
      if (count < anualS){
        count= count + 2;
        anualSales.innerText = count;
        setTimeout(updateCountA,30)
      }else{
          anualSales.innerText = anualS;
      };      
    };
    function updateCountP(){
      const productionB = 2;
      if (p < productionB){
        p++;
        productionB.innerText = p;
        setTimeout(updateCountP,100)
      }else{
          productionBase.innerText = productionB;
      };      
    };

    function updateCountS(){
      const Sf= 700;
      if (s < Sf){
        s = s + 16;
        staff.innerText = s;
        setTimeout(updateCountS,40)
      }else{
          staff.innerText = Sf;
      };      
    };

    function updateCountPa(){
      const Part = 75;
      if (pp < Part){
        pp = pp + 3;
        partners.innerText = pp;
        setTimeout(updateCountPa,30)
      }else{
          partners.innerText = Part;
      };      
    };
    function updateCountE(){
      const Expee = 27;
      if (ex < Expee){
        ex = ex +2;
        expe.innerText = ex;
        setTimeout(updateCountE,30)
      }else{
          expe.innerText = Expee;
      };      
    };
    function updateCountSQR(){
      const msq = 10000;
      if (sq < msq){
        sq = sq + 700;
        ssqr.innerText = sq;
        setTimeout(updateCountSQR,30)
      }else{
          ssqr.innerText = msq;
      };      
    };
    updateCountA();
    updateCountP();
    updateCountS();
    updateCountPa();
    updateCountE();
    updateCountSQR();
    activated = true;
  }
});


// loadImg

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 如果目标元素与视口相交（可见），则加载图片
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      // 停止观察已加载的图片
      observer.unobserve(lazyImage);
    }
  });
});

// 获取所有具有 'lazy-load' 类的图片元素
const lazyImages = document.querySelectorAll('.lazy-load');

// 遍历每个懒加载图片，并开始观察
lazyImages.forEach(image => {
  observer.observe(image);
});
