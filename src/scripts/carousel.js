document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
  
    const updateIndicators = () => {
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
      });
    };
  
    const moveToSlide = (targetIndex) => {
      const amountToMove = -targetIndex * 100; // 100% for full-width slides
      track.style.transform = `translateX(${amountToMove}%)`;
      currentSlide = targetIndex;
      updateIndicators();
    };
  
    nextButton.addEventListener('click', () => {
      const targetIndex = (currentSlide + 1) % slides.length;
      moveToSlide(targetIndex);
    });
  
    prevButton.addEventListener('click', () => {
      const targetIndex = (currentSlide - 1 + slides.length) % slides.length;
      moveToSlide(targetIndex);
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => moveToSlide(index));
    });
  
    // Auto-slide
    setInterval(() => {
      const targetIndex = (currentSlide + 1) % slides.length;
      moveToSlide(targetIndex);
    }, 5000); // 5 seconds interval
  });
  