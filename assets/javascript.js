// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor link behavior
  
      const target = document.querySelector(this.getAttribute('href')); // Get the target element based on the href attribute
      const offsetTop = target.offsetTop; // Get the top offset position of the target element
  
      window.scrollTo({
        top: offsetTop, // Scroll to the calculated offset top position
        behavior: 'smooth' // Use smooth scrolling behavior
      });
    });
  });

//If i did not have this smooth scrolling anchor links here, the "menu" and "Reservation" buttons would simply just cut straight to that part of the page. This makes the experience seem nicer for the user
  