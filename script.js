// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }
  
  alert('Thank you for your message! We will get back to you soon.');
  document.getElementById('contact-form').reset();
});
