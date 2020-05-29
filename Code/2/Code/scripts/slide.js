var slideIndex = 1;
let slideboxIndex =1;

showSlides(slideIndex);
showBoxSlides(slideboxIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function kutuSlides(n){
  showBoxSlides(slideboxIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function showBoxSlides(n){
  let i;
  var boxslides= document.getElementsByClassName("mysSlides");
  if (n > boxslides.length) {slideboxIndex = 1}    
  if (n < 1) {slideboxIndex = boxslides.length}
  for (i = 0; i < boxslides.length; i++) {
    boxslides[i].style.display = "none";  
  }
  boxslides[slideboxIndex-1].style.display = "block";
}