$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Engineer at the Government of Nepal","Network and Cyber Security Engineer", "Programmer", "ICT Officer", "Computer Engineering Instructor","Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

 var typed = new Typed(".typing-2", {
        strings: ["Computer Engineer at the Government of Nepal","Network and Cyber Security Engineer","Programmer", "ICT Officer", "Computer Engineering Instructor","Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 6000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            2000:{
                items: 2,
                nav: false
            },
            4000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};
// Ripple Effects
	  document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");
  
   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 
   ripple.style.animation = `ripple-effect .4s  linear`;
   ripple.onanimationend = () => {
     document.body.removeChild(ripple);
     
   }
  
}

// extra and optional part:

const all = document.body.getElementsByTagName("*");
for (var i = 0;  i < all.length; ++i) {
  all[i].onclick = (event) => event.stopPropagation();
}
