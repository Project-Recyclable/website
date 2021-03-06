//Moblie Menu Bar 
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

//Mobile Drop Down Bar
function mobile(x) {
  if (x.matches) { // If media query matches
    var dropdown = document.getElementsByClassName("dropbtn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }
}

var x = window.matchMedia("(max-width: 920px)")
mobile(x) // Call listener function at run time
x.addListener(mobile);  // Attach listener function on state changes