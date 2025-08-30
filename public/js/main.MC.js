 // JavaScript para los carruseles
      document.addEventListener("DOMContentLoaded", function() {
        // Inicializar todos los carruseles
        document.querySelectorAll('.path-carousel-mc').forEach(carousel => {
          const inner = carousel.querySelector('.carousel-inner-mc');
          const slides = carousel.querySelectorAll('.carousel-slide-mc');
          const prevBtn = carousel.querySelector('.carousel-prev-mc');
          const nextBtn = carousel.querySelector('.carousel-next-mc');
          const indicators = carousel.querySelectorAll('.indicator-mc');
          
          let currentIndex = 0;
          const totalSlides = slides.length;
          
          // Mostrar slide inicial
          showSlide(currentIndex);
          
          // Event listeners para botones
          prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            showSlide(currentIndex);
          });
          
          nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            showSlide(currentIndex);
          });
          
          // Event listeners para indicadores
          indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
              currentIndex = index;
              showSlide(currentIndex);
            });
          });
          
          // Función para mostrar slide específico
          function showSlide(index) {
            // Ocultar todos los slides
            slides.forEach(slide => {
              slide.classList.remove('active');
            });
            
            // Mostrar slide actual
            slides[index].classList.add('active');
            
            // Actualizar indicadores
            indicators.forEach(indicator => {
              indicator.classList.remove('active');
            });
            indicators[index].classList.add('active');
            
            // Mover el inner carousel
            inner.style.transform = `translateX(-${index * 100}%)`;
          }
        });
      });