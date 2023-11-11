function submitForm(event) {
    event.preventDefault();
    
    // Fetch the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here, you can implement further logic, like sending the form data to a server using fetch or AJAX.
    // For the sake of this example, we'll just show a confirmation message.
    
    // Simulate form submission with a confirmation message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('confirmationMessage').classList.remove('hidden');
    
}
