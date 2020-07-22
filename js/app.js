window.addEventListener('scroll', function() {
    const header = document.querySelector(".header");
    // the logo
   
    if (window.scrollY > 0) {
      header.classList.add("nav-scroll");
    }else {
      header.classList.remove("nav-scroll");
    }
  });

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
});

// const header = document.querySelector('header'); //get the header class
// const sectionOne = document.querySelector('.home-intro'); //This is the section class

// const sectionOneOptions = {
//     rootMargin: "-400px 0px 0px 0px"
// }; //we are going to add file to this soon

// const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             header.classList.add('nav-scrolled');
//             sectionOneObserver.unobserve(entry.target);
//         }else {
//             header.classList.remove('nav-scrolled');
//             sectionOneObserver.unobserve(entry.target);
//         }
//     });
// }, sectionOneOptions);

// sectionOneObserver.observe(sectionOne); // function to observe the sectionOne element


// (function smoothscroll(){
//     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//     if (currentScroll > 0) {
//          window.requestAnimationFrame(smoothscroll);
//          window.scrollTo (0,currentScroll - (currentScroll/5));
//     }
// })(); this  is teh smooth scroll


// var scrollToTop = window.setInterval(function() {
//     var pos = window.pageYOffset;
//     if ( pos > 0 ) {
//         window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
//     } else {
//         window.clearInterval( scrollToTop );
//     }
// }, 16); // how fast to scroll (this equals roughly 60 fps)