/**This function of the back-to-top button */
// declare the variable
const backToTop = document.querySelector(".back-to-top");
// add even listener to the window object and create an error function
window.addEventListener("scroll",() =>{
    // having a condition that if the page has been scroll down to 100 pixels from the top
    // then it will process the active class
    if(window.pageYOffset > 100){
        backToTop.classList.add("active");
    }else {
        backToTop.classList.remove("active");
    }
} )