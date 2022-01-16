let onready = () =>{

  const slideRelesePath =".slide-cont-release "
  const slideSpecialPath =".slide-cont-special "

  const swiperRelesse = new Swiper(slideRelesePath+'.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
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

    breakpoints: {
      750:{
        slidesPerView: 3,
        slidesPerGroup: 3,

      }
    }
  
  
  });

  rearrangementSpecial();

  const swiperSpecial = new Swiper(slideSpecialPath+'.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 26,

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
  
    breakpoints: {
      750:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        //spaceBetween: 26,
      }
    }
  });

  modalOpenEvent("agree");
  modalOpenEvent("quote");
  modalOpenEvent("complete");
  modalOpenEvent("branch");

  modalCloseEvent();

  window.addEventListener('resize', rearrangementSpecial)

}


window.addEventListener('DOMContentLoaded', onready);



let isRsizeMobileReady = true;
let isRsizePcReady = true;
let isReloadReady = true;

let timer = null;

let rearrangementSpecial = function(){
  let winW = window.innerWidth;

  let slideSpecial = document.querySelector(".slide-cont-special .car-info-area");
  let infoBoxList = slideSpecial.getElementsByClassName("info-box");

  if((winW > 750) && isRsizePcReady){

    if (self.name != 'reload') {
      
      self.name = 'reload';
      self.location.reload(true);
    }
    else self.name = '';

    isRsizeMobileReady = true;
    console.log("작동PC");
    //요소생성
    let tampTag = document.createElement('div');
    tampTag.innerHTML = "<div class='swiper-slide slide-part'></div>";
    let newTag = tampTag.children[0].cloneNode(true);
    tampTag.remove();
    
    //리스트요소 복제
    let infoBoxListClone = [...infoBoxList];
    //원본리스트요소 삭제
    infoBoxListClone.forEach(el => {
      el.classList.remove("swiper-slide");
    });

    [...infoBoxList].forEach(el => {
      //el.remove();
    });


    slideSpecial.append(newTag);
    slideSpecial.append(newTag.cloneNode(true));
    let slidePart = slideSpecial.getElementsByClassName("slide-part");
    //console.log(slidePart);
    let iNum = 0;
    infoBoxListClone.forEach((item, index)=> {
      //참고:실수형 오차 < Number.EPSILON
      let iNum = parseInt(index/6);
      slidePart[iNum].append(item);
     })

     isRsizePcReady = false;
  }

  else if(winW <= 750 && isRsizeMobileReady){

    // clearTimeout( timer ); 
    // timer = setTimeout(function(){
    //   location.reload();
    // }, 150 );
    
    if (self.name != 'reload') {
      
      self.name = 'reload';
      self.location.reload(true);
    }
    else self.name = '';

    // if(isReloadReady){
      
    //   isReloadReady = false;
    // }

    isRsizePcReady = true;
    // [...infoBoxList].forEach(el => el.classList.add("swiper-slide"));
  
    isRsizeMobileReady = false;
  }
}


let modalOpenEvent = (modalname) =>{
  let btnOpenList = document.querySelectorAll(`.fn-open-modal-${modalname}`);
  let tagetModal = document.querySelector(`.modal-${modalname}`);
  
  let openModal= () =>{
    tagetModal.classList.add("modal-show");
    console.log(modalname, "작동");
  }

  btnOpenList.forEach(btn =>{
    btn.addEventListener("click", openModal);
  });

}

let modalCloseEvent =() =>{
  let btnCloseList = document.querySelectorAll(".fn-close-modal");
  //btnClose.closest(".modal-wrap");
  
  btnCloseList.forEach(btn =>{
    let tagetModal = btn.closest(".modal-wrap");
    console.log(tagetModal);
    btn.addEventListener("click", ()=>{
      tagetModal.classList.remove("modal-show");  
    });
  });

  

  // let closeModal = () =>{
  //   tagetModal.classList.remove("modal-show");
  // }
  
}