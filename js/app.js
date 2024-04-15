
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

window.addEventListener('scroll', function(){
  const header = document.querySelector("header");
  const home = document.querySelector(".home")
  const homeHeight = home.offsetHeight - 56;
  header.classList.toggle('sticky', window.scrollY >0);
  header.classList.toggle('color_change', scrollY > homeHeight);
});

// ============ Responsive navigation bar

const menuBtn = document.querySelector('.nav_menu_btn')
const closeBtn = document.querySelector('.nav_close_btn')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener('click',()=>{
  navigation.classList.add('active');
});

closeBtn.addEventListener('click',()=>{
  navigation.classList.remove('active');
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


// ====== products_slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  // centeredSlides: true,
  spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    430:{
      slidesPerView:1.5,
    },
    1920:{
      slidesPerView:4
    }
  }
});


// ====== content_detail

// const moreBtn_1 = document.querySelector('.open_btn_1')
const pps_btns = document.querySelectorAll('[class^="open_btn_"]');
const shutBtn = document.querySelector('.pps_close_btn');
const ppsContent = document.querySelector('.detail_expand');
const ppsTitle = document.querySelector('.pps_more_title');
const ppsImages = document.querySelectorAll('[class^="pps_more_img_"]');
const paths =[
  ['books.png','bolor box.png', 'digital.png'],
  ['label.png','laser.png','offset.png'],
  ['pupp.png'],
  [],
  [],
  [],
  [],
  [],
]
// moreBtn_1.addEventListener('click',()=>{
//   ppsContent.classList.add('pps_more');
//   ppsTitle.innerHTML = 'Watermark Crafting Showcase'
// });

pps_btns.forEach((btn, index)=>{
  btn.addEventListener('click',()=>{
    ppsContent.classList.add('pps_more');
    let title;
    let pathIndex
    switch(index){
      case 0:
        title='Watermark Test!';
        pathIndex = paths[0]
        break;
      case 2:
        title='New Test!';
        pathIndex = paths[1]
        break;
      case 4:
        title='Digital Showcase!';
        pathIndex = paths[2]
        break;
      case 6:
        title='Wahaha';
        pathIndex = paths[0]
        break;
      case 8:
        title='Ezpz';
        pathIndex = paths[0]
        break;
      case 10:
        title='Watermark Test!';
        pathIndex = paths[0]
        break;
      case 12:
        title='Watermark Test!';
        pathIndex = paths[0]
        break;
      case 14:
        title='Watermark Test!';
        pathIndex = paths[0]
        break;
    }
    ppsTitle.innerHTML = title;
    ppsImages.forEach((img, i)=>{
      img.setAttribute('src','img/'+pathIndex[i]);
    });
  });
});

shutBtn.addEventListener('click',()=>{
  ppsContent.classList.remove('pps_more');
});
