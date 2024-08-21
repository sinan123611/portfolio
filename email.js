// Function to send an email using EmailJS
function sendmail() {
    // Validate the form before sending the email
    if (!validateForm()) {
        return; // If validation fails, do not proceed
    }

    // Prepare the email parameters
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    // Send the email using EmailJS
    emailjs.send("service_jwcq43f", "template_ln2eh2a", parms)
        .then(function(response) {
            alert("EMAIL SENT!!"); // Success message
        }, function(error) {
            alert("FAILED TO SEND EMAIL. PLEASE TRY AGAIN."); // Failure message
        });
}

// Function to validate the form inputs
function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("name_error").textContent = "";
    document.getElementById("email_error").textContent = "";
    document.getElementById("phone_error").textContent = "";
    document.getElementById("message_error").textContent = "";

    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("name_error").textContent = "Please enter your name";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email_error").textContent = "Please enter a valid email address";
        isValid = false;
    }

    // Validate Phone
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phone_error").textContent = "Please enter a valid phone number (10 digits)";
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("message_error").textContent = "Please enter your message";
        isValid = false;
    }

    return isValid;
}

