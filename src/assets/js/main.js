let onready = () =>{

  const slideRelesePath =".slide-cont-release "
  const slideSpecialPath =".slide-cont-special "

  const swiperRelesse = new Swiper(slideRelesePath+'.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 26,
  
    // // If we need pagination
    pagination: {
      el: slideRelesePath+'.slide-pagination',
      //el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: slideRelesePath+'.slide-btn-next',
      prevEl: slideRelesePath+'.slide-btn-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  //let divdeGroup = document.querySelector("");
  const swiperSpecial = new Swiper(slideSpecialPath+'.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    //slidesPerColumn:8,
  
    //slidesPerGroup: 3,
    //spaceBetween: 26,

    // // If we need pagination
    pagination: {
      el: slideSpecialPath+'.slide-pagination',
      //el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: slideSpecialPath+'.slide-btn-next',
      prevEl: slideSpecialPath+'.slide-btn-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });





}






window.addEventListener('DOMContentLoaded', onready);

