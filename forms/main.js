function validateForm() {
    const name = document.getElementById("fullname").value.trim();
    const userName = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    //User Name validation
    if (userName === "") {
        alert("Please enter your username.");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone validation (for a 10-digit number)
    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    } else if (!isValidPhone(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Password validation (minimum 6 characters, at least 1 uppercase letter, and 1 number)
    if (password === "") {
        alert("Please enter your password.");
        return false;
    } else if (!isValidPassword(password)) {
        alert("Password must be at least 6 characters long, contain at least 1 uppercase letter, and at least 1 number.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;

}

// Email validation function using regex (regular expression)
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}