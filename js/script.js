// active navbar when 20px scroll from top to bottom side
let nav = document.querySelector("navigation-warp");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

// hide nav
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
    })
})
    
