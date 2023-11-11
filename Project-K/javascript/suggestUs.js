document.getElementById('bookSuggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const bookTitle = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const reason = document.getElementById('reason').value;

    // Display a greeting message
    const greetingMessage = `Thank you for your suggestion! We appreciate your recommendation of "${bookTitle}" by ${author}. We'll consider it because "${reason}".`;
    displayGreeting(greetingMessage);

    // Clear form fields after submission
    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
    document.getElementById('reason').value = '';
});

function displayGreeting(message) {
    const greetingElement = document.createElement('p');
    greetingElement.textContent = message;
    greetingElement.classList.add('greeting');
    const suggestionForm = document.querySelector('.suggestion-form');
    suggestionForm.appendChild(greetingElement);

    // Remove greeting after 5 seconds (optional)
    setTimeout(() => {
        greetingElement.remove();
    }, 5000);
}
