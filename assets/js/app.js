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
})