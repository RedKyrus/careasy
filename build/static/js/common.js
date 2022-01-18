window.addEventListener('DOMContentLoaded', () =>{

  modalOpenEvent("agree");
  modalOpenEvent("quote");
  modalOpenEvent("complete");
  modalOpenEvent("branch");

  modalCloseEvent();

  topAdCloseEvent();

  scrollMoveEvent();

}
);




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
    btn.addEventListener("click", ()=>{
      tagetModal.classList.remove("modal-show");  
    });
  });
  
}

let topAdCloseEvent =() =>{
  let topAd = document.querySelector(".top-ad");
  let btnCloseAd = document.querySelector(".top-ad .btn-close-ad");
  //btnClose.closest(".modal-wrap");
  
  let closeTopAd = () =>{
    topAd.classList.add("ad-hidden");
  }

  btnCloseAd.addEventListener("click",closeTopAd)
  
}

let scrollMoveEvent = () =>{
  let btnTrigger = document.querySelectorAll("[data-scroll-target]");
  //let tagetList = document.querySelectorAll("[data-scroll-id]");
  
  

  btnTrigger.forEach(btn=>{
    let targetID = btn.getAttribute("data-scroll-target");
    let target = document.querySelector(`[data-scroll-id='${targetID}']`);
    
    if(target === null) return;

    //console.dir(target);
    

    btn.addEventListener("click",()=>{
      //window.scrollTo({top:pos, behavior:'smooth'});
      let pos = target.offsetTop - 20;
      window.scrollTo({top:pos, behavior:'smooth'});
    });
  });


}
