window.onload = function() {
    const cards = document.querySelectorAll('.card');
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel = document.querySelector('.carousel');
  
    // Debugging log: Check if elements are being selected correctly
    console.log('Cards:', cards);
    console.log('Carousel Container:', carouselContainer);
    console.log('Carousel:', carousel);
  
    if (!cards.length || !carouselContainer || !carousel) {
      console.error('Error: Could not find one or more elements.');
      return; // Exit if elements are not found
    }
  
    let currentIndex = 0;
  
    function slideToCenter() {
      const containerWidth = carouselContainer.offsetWidth;
      const cardWidth = cards[0].offsetWidth;
      const gapBetweenCards = 20; // 10px left + 10px right margin from CSS
  
      // Debugging log: Check if widths are being calculated correctly
      console.log('Container Width:', containerWidth);
      console.log('Card Width:', cardWidth);
  
      // Calculate the offset to center the current card
      const offset = (containerWidth - cardWidth) / 2 - (currentIndex * (cardWidth + gapBetweenCards));
  
      // Apply the transform to move the current card to the center
      carousel.style.transform = `translateX(${offset}px)`;
  
      // Move to the next card for the next interval
      currentIndex = (currentIndex + 1) % cards.length;
    }
  
    // Slide every 3 seconds
    setInterval(slideToCenter, 3000);
  };
  