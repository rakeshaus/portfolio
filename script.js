document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

   
});
