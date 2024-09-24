
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting before validation

    showSpinner();          // Show the loading spinner

    setTimeout(() => {      // Simulate form validation process (2 seconds delay)
        if (validateForm()) {
            hideSpinner();  // Hide spinner if validation is successful
            alert("Form submitted successfully!");

            clearForm();    // Clear input fields after successful submission
        } else {
            hideSpinner();  // Hide spinner if validation fails
        }
    }, 2000);  

});

function showSpinner() {
    document.getElementById("loadingSpinner").classList.remove("hidden");
}

function hideSpinner() {
    document.getElementById("loadingSpinner").classList.add("hidden");
}

// Clear all form inputs
function clearForm() {
    document.getElementById("signupForm").reset();  // Reset form inputs
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
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
       let errormsg = document.querySelector('.error')
        errormsg.textContent = 'Please enter your email.';
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

// Email validation function using regex
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Phone validation function using regex
function isValidPhone(phone) {
    const phonePattern = /^[0-9]{11}$/;
    return phonePattern.test(phone);
}

// Password validation function (at least 6 characters, 1 uppercase letter, 1 number)
function isValidPassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordPattern.test(password);
}