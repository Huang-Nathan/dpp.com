
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
  header.classList.toggle('sticky', window.scrollY >0);
})


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
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
