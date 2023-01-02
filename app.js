// select the button
const backToTopButton = document.querySelector('.back-to-top-button');

// hide the button when the page loads
backToTopButton.style.display = 'none';

// add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // check the distance that the page has been scrolled
  if (window.scrollY > 100) {
    // show the button
    backToTopButton.style.display = 'block';
  } else {
    // hide the button
    backToTopButton.style.display = 'none';
  }
});

// add an event listener for the click event
backToTopButton.addEventListener('click', function() {
  // scroll to the top of the page
  window.scrollTo({
    top: 0,  // scroll to the top of the page
    behavior: 'smooth'  // smooth scroll effect
  });
});


// select the footer
const footer = document.querySelector('.footer');

// hide the footer when the page loads
footer.style.display = 'none';

// add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // check the distance that the page has been scrolled
  if (window.scrollY > 100) {
    // show the footer
    footer.style.display = 'block';
  } else {
    // hide the footer
    footer.style.display = 'none';
  }
});

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});






