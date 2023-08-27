// NAVBAR TOGGLER 
let navToggleBtn = document.getElementById("navToggler");
let mNav = document.getElementById("mobileNav");
let mClose = document.getElementById("m-close-btn");

navToggleBtn.addEventListener("click", ()=>{
    mNav.style.opacity = "1";
    mNav.style.pointerEvents = "all";
});

mClose.addEventListener("click", ()=>{
    mNav.style.opacity = "0";
    mNav.style.pointerEvents = "none";
});


// AOS ANIMATION

AOS.init({
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  
  });