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

    
}