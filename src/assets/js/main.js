let onready = () =>{

  const slideReleasPath =".slide-cont-release "
  const swiper = new Swiper(slideReleasPath+'.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
  
    // // If we need pagination
    pagination: {
      el: slideReleasPath+'.slide-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: slideReleasPath+'.slide-btn-next',
      prevEl: slideReleasPath+'.slide-btn-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}




window.addEventListener('DOMContentLoaded', onready);

