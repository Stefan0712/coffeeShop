document.addEventListener('DOMContentLoaded', function() {
    var testimonials = document.querySelectorAll('.testimonial-body');
    var currentTestimonial = 0;
    var nextTestimonial = 1;
  
    testimonials[currentTestimonial].style.display = 'flex';
  
    function showNextTestimonial() {
      testimonials[currentTestimonial].style.animation = 'slide-out-right 0.5s forwards';
      testimonials[nextTestimonial].style.display = 'flex';
      testimonials[nextTestimonial].style.animation = 'slide-in-left 0.5s forwards';
  
      setTimeout(function() {
        testimonials[currentTestimonial].style.display = 'none';
        testimonials[currentTestimonial].style.animation = '';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        nextTestimonial = (currentTestimonial + 1) % testimonials.length;
      }, 500);
    }
  
    setInterval(showNextTestimonial, 5000); // Change the interval duration as desired
  });



  const toggleMenu = () =>{
    const menu = document.querySelector('.nav-links')
    const icon = document.querySelector('.nav-icon')
    icon.style.backgroundImage = '../images/close.png';
    menu.classList.toggle('show')
  }
  