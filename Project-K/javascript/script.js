function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Both username and password are required fields.");
    } else {
        // You can perform additional validation or form submission here.
        // For example, you can send the form data to a server for authentication.
        alert("Form submitted successfully.");
    }
}
