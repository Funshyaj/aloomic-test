function reveal() {
    var reveals = document.querySelectorAll(".industry-content-box");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else if(elementTop - elementVisible < windowHeight ) {
        reveals[i].classList.remove("active");
      }
      else{
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

