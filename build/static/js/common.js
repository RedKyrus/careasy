window.addEventListener('DOMContentLoaded', () =>{

  modalOpenEvent("agree");
  modalOpenEvent("quote");
  modalOpenEvent("complete");
  modalOpenEvent("branch");
  modalOpenEvent("review");

  modalCloseEvent();

  topAdCloseEvent();

}
);

window.addEventListener('load',()=>{
  scrollMoveEvent();
});



let modalOpenEvent = (modalname) =>{
  let btnOpenList = document.querySelectorAll(`.fn-open-modal-${modalname}`);
  let tagetModal = document.querySelector(`.modal-${modalname}`);
  
  let openModal= () =>{
    tagetModal.classList.add("modal-show");
    document.body.classList.add("modal-open-scroll-stop")
    //console.log(modalname, "작동");
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
      let isShowModal = document.querySelector(".modal-show");
      if(isShowModal == null){
        document.body.classList.remove("modal-open-scroll-stop")
      }
      
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

  let storageKeyName ="scrollMoveTargetID";
  
  let getTargetID = localStorage.getItem(storageKeyName);
  // /console.log(getTargetID);
  
  if(getTargetID != null){
    let getTarget = document.querySelector(`[data-scroll-id='${getTargetID}']`);
    scrollMoveAction(getTarget);
    //console.log(getTarget);
    localStorage.removeItem(storageKeyName);
  }

  let btnTrigger = document.querySelectorAll("[data-scroll-target]");

  btnTrigger.forEach(btn=>{
    let targetID = btn.getAttribute("data-scroll-target");

    btn.addEventListener("click",(event)=>{
      
      let target = document.querySelector(`[data-scroll-id='${targetID}']`);
      if(target === null){
        localStorage.setItem(storageKeyName, targetID);
        return;
      }

      event.preventDefault();
      scrollMoveAction(target);
    });

  });

}

let scrollMoveAction = (target) =>{
  let pos = target.offsetTop - 20;
  window.scrollTo({top:pos, behavior:'smooth'});
}