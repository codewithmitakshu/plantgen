let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

const header = document.querySelector('header')

window.onscroll = function(){
    if(document.documentElement.scrollTop > 5){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}




// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select the content section
const contentElements = document.querySelectorAll('.content');

// Loop through each selected element
contentElements.forEach((contentElement) => {

    // Apply GSAP animation to the entire content element
    gsap.from(contentElement, {
        scrollTrigger: {
            trigger: contentElement, // Trigger the animation when the element is in view
            start: 'top 80%',        // Animation starts when the element is 80% from the top of the viewport
            end: 'top 20%',          // Animation ends when it's 20% from the top
            markers: false,          // Set to true if you want to see the scroll markers for debugging
            scrub: true,             // Smooth animation syncs with scroll
        },
        opacity: 0,                // Start the content with opacity 0
        y: 50,                     // Start with 50px vertical offset
        duration: 1,               // Animation duration for the entire element
        ease: 'power2.out'         // Easing function for smooth animation
    });
});
