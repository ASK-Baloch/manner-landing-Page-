const primaryHeader=document.querySelector('.primary-header')
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener("click",()=>{

    // primaryNav.classList.toggle("primary-navigation")
   primaryNav.hasAttribute("data-visible")?primaryNav.setAttribute("aria-expended",false) :  primaryNav.setAttribute("aria-expended",true)
  

    primaryNav.toggleAttribute("data-visible")
    primaryHeader.toggleAttribute("data-overlay")
})

 const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    centerMode:true,
    responsive:{
      480:{
        dots:false,
      }
    }
  });