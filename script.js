<<<<<<< HEAD
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('show');
});
  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  // Close modal on click outside content
  window.onclick = function(event) {
    const login = document.getElementById('loginModal');
    const signup = document.getElementById('signupModal');
    if (event.target == login) login.style.display = "none";
    if (event.target == signup) signup.style.display = "none";
  }
//subscription form

document.getElementById("subscribeForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const email = document.getElementById("emailInput").value;
    
    if (email) {
      document.getElementById("message").textContent = "Thank you for subscribing!";
      document.getElementById("subscribeForm").reset(); 
    }
  });

  //About content //

  let current = 0;
  const testimonials = document.querySelectorAll('.testimonial');

  function showNextTestimonial() {
    testimonials[current].classList.remove('active');
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add('active');
  }

  setInterval(showNextTestimonial, 3000);



=======
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('show');
});
  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  // Close modal on click outside content
  window.onclick = function(event) {
    const login = document.getElementById('loginModal');
    const signup = document.getElementById('signupModal');
    if (event.target == login) login.style.display = "none";
    if (event.target == signup) signup.style.display = "none";
  }
//subscription form

document.getElementById("subscribeForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const email = document.getElementById("emailInput").value;
    
    if (email) {
      document.getElementById("message").textContent = "Thank you for subscribing!";
      document.getElementById("subscribeForm").reset(); 
    }
  });

  //About content //

  let current = 0;
  const testimonials = document.querySelectorAll('.testimonial');

  function showNextTestimonial() {
    testimonials[current].classList.remove('active');
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add('active');
  }

  setInterval(showNextTestimonial, 3000);



>>>>>>> 189be21 (Final web development Assignment)
