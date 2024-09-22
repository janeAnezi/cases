// Select the counter element
const counterElement = document.getElementById('counter');
let targetNumber = 100;  // Set the number you want to count to
let startNumber = 70;
let isCounting = false;

// Function to animate the counting
function countUp() {
  const interval = setInterval(() => {
    if (startNumber < targetNumber) {
      startNumber++;
      counterElement.textContent = startNumber;
    } else {
      clearInterval(interval);
    }
  }, 100);  // Adjust the speed here
}

// Intersection Observer to trigger counting when section is in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isCounting) {
      isCounting = true;  // Avoid counting multiple times
      countUp();
    }
  });
});

// Observe the section where the counter is located
observer.observe(document.getElementById('counter-section'));
